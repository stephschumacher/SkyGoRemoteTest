

/////////////
// splitNumberPoundsPence
// Split the price into two, pounds and pence
// Do this to 2 decimal places and return whole numbers for each part
// NOTE: if more than 2 decimal places are given they are ignored.
// e.g. 27.70 = 27 70,  27.999 = 27 99, 27 = 27 0
// num = price to split (with or without the decimal point)
// return = list of numbers, pounds and pence 
/////////////
export function splitNumberPoundsPence(num: number): number [] {
    let pounds = Math.floor(num)
    let pence = Math.floor((num - pounds) * 100)

    return [pounds, pence]
}