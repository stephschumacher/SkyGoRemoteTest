import { ClientFunction, Selector, t } from 'testcafe';
import { log, LogType } from "../common/log";
import { splitNumberPoundsPence } from "../common/helper"


export default class ShopOffersPage  {
    tiles: Selector;
    offerPrice: Selector;
    
    constructor () {
        this.tiles = Selector("#tab-1").find(".u-margin-y-large")
        this.offerPrice = Selector("#tab-1").find(".c-costing__price.c-price")
    }

    /////////////
    // checkOfferPrices
    // Check the prices on the page against the list of prices given
    // offerPrices = array of current prices (££.pp), e.g. [39.00, 27.50, 46]
    /////////////
    async checkOfferPrices(offerPrices: number []) {

        // check there are enough offers
        let offerPriceCount = await this.offerPrice.count
        await t.expect(offerPriceCount).gte(offerPrices.length)
        log(`There are at least ${offerPrices.length} tiles (Found ${offerPriceCount})`, LogType.Success)

        let text: string
        let numSplit: number []
        for (let i = 0; i < offerPrices.length; i++) {
            numSplit = splitNumberPoundsPence(offerPrices[i])

            text = await this.offerPrice.nth(i).find(".c-price__main").innerText;
            await t.expect(text).eql("£"+numSplit[0].toString(), `Price should be ${offerPrices[i]}`)

            if(numSplit[1] > 0) {
                text = await this.offerPrice.nth(i).find(".c-price__fractional").innerText;
                await t.expect(text).eql(numSplit[1].toString(), `Price should be ${offerPrices[i]}`)
            }
            log(`Price is £${offerPrices[i]}`, LogType.Success)
        }
    }

}