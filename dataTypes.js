// Preemptive
// Number, string, boolean, null, undefined, BigInt, Symbol


/*
const id =  Symbol("123");  //  Return unique identity even for same value
const id2 = Symbol("123");

console.log(id == id2);
console.log("id: ", id, " id2: ", id2);


const id3 = Symbol.for("global123");    //  Return same identity for same value
const id4 = Symbol.for("global123");

console.log(id3 === id4); // ✅ true
*/

console.log(typeof null);       //  object
console.log(typeof undefined);  //  undefined
console.log(typeof NaN);        //  number
console.log(typeof ( ()=>{} )); //  function
console.log(typeof {});
console.log(typeof []);