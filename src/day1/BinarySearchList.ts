export default function bs_list(haystack: number[], needle: number): boolean {

    function getMidpoint(lo: number, hi: number): number {
        return Math.floor((lo + (hi - lo) / 2))
    }

    var arrayLo: number = 0;
    var arrayHi: number = haystack.length;
    var arrayMidpoint: number = getMidpoint(arrayLo, arrayHi);
    var arrayMidpointValue: number = haystack[arrayMidpoint];

    console.log(`Running search function... \n Needle value is ${needle} \n Starting Lo: ${arrayLo} \n Starting Hi: ${arrayHi} \n Starting Midpoint: ${arrayMidpointValue} \n`)

    do {

        arrayMidpoint = getMidpoint(arrayLo, arrayHi);
        arrayMidpointValue = haystack[arrayMidpoint];
        console.log(`Inspecting the needle value at index ${arrayMidpoint}, which is ${arrayMidpointValue}.`);
        

        if (arrayMidpointValue === needle) {
            console.log(`Array midpoint = value of ${needle}. We found our needle!`)
            return true;
        } else if (needle < haystack[arrayMidpoint]) {
            console.log(`Needle is below the midpoint. \n`);
            arrayHi = arrayMidpoint;
            arrayMidpoint = getMidpoint(arrayLo, arrayHi);
            console.log(`Updating search function... \n Needle value is ${needle} \n Current Lo: ${arrayLo} \n Current Hi: ${arrayHi} \n Current Midpoint: ${arrayMidpoint} \n`)
        } else if (needle > haystack[arrayMidpoint]) {
            console.log(`Needle is above the midpoint. \n`);
            arrayLo = arrayMidpoint + 1;
            arrayMidpoint = getMidpoint(arrayLo, arrayHi);
            console.log(`Updating search function... \n Needle value is ${needle} \n Current Lo: ${arrayLo} \n Current Hi: ${arrayHi} \n Current Midpoint: ${arrayMidpoint} \n`)
        }
    }
    while (arrayLo < arrayHi);

    console.log("No needle found...")
    return false;
}

// Quick test for debugging
// bs_list([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 17);

///////////////////////////////////////////////////////////////////////
// Course Solution Version
///////////////////////////////////////////////////////////////////////

// export default function bs_list(haystack: number[], needle: number): boolean {

//     let lo = 0;
//     let hi = haystack.length;

//     do {
//         const m = Math.floor(lo + (hi - lo) / 2);
//         const v = haystack[m];

//         if (v === needle) {
//             return true;
//         } else if (v > needle) {
//             hi = m;
//         } else {
//             lo = m + 1;
//         }
//     }
//     while (lo < hi);

//     return false;
// }