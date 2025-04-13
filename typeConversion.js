let no = "32";
let noString = "32abc";
let isHero = true;
let isCowered = false;
let nullValue = null;
let undefValue = undefined;

/*
console.log(Number (no));
console.log(Number (noString));
console.log(Number (isHero));
console.log(Number (isCowered));
console.log(Number (nullValue));
console.log(Number (undefValue));
*/

/*
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
*/


/*
console.log(String(51));
console.log(String(true));
console.log(String(isHero));
console.log(String(isCowered));
console.log(String(null));
console.log(String(undefined));
console.log(String(NaN));
*/


//  Operations
/*
console.log(1+2);
console.log(1 + "2");
console.log("1" + 2);
console.log("1" + 2 + 5);
console.log(5 + 1 + "3");
*/


/*
console.log(1 + null);
console.log(null + 1);
console.log(1 + NaN);
console.log(NaN + 1);
console.log(1 + {name : "Prasanta"}, " --->>> ", typeof(1 + {name : "Prasanta"}));
console.log("1" + {name : "Prasanta"}, " --->>> ", typeof("1" + {name : "Prasanta"}));
*/


/*
console.log(+true)      //  Unary operator
console.log(-true)
console.log(+"");
console.log(true+true); //  converted as 1+1
console.log(true+false);
console.log(true+null); //  converted as 1 + null
console.log(true+NaN);  //  converted as 1 + NaN
console.log(true+"");
console.log(true+"true");
*/


let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

console.log("Num1: ",num1, " Num2: ",num2, "Num3: ",num3);


/*
    "32" --> 32
    "32abc" --> NaN
    true, false --> 1/0
    null --> 0
    undefined --> NaN


                ┌────────────┐
                │ Input Data │
                └─────┬──────┘
                      ↓
            ┌──────────────────────┐
            │ Convert to string +  │
            │      trim it         │
            └────────┬─────────────┘
                     ↓
            ┌────────────┐
            │ Is it "" ? │───Yes──▶ return 0
            └────┬───────┘
                 ↓ No
        ┌────────────────────────┐
        │ Is it "Infinity" or    │
        │ "-Infinity"?           │──▶ Return Infinity or -Infinity
        └────┬───────────────────┘
             ↓ No
        ┌────────────────────────────┐
        │ Check if ENTIRE string     │
        │ matches number regex       │
        └────┬───────────────────────┘
             ↓
        Yes ─────────────▶ parseFloat(str) ✅
            ↓ No
        Return NaN ❌


    For Boolean:
    true ---> Any value accept 0, any string accept empty ""
    false ---> "", null, NaN, undefined

*/