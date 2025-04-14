/*
╔════════════════════════════════════════╗
 ➡️➡️➡️➡️➡️ Types of String ➡️➡️➡️➡️➡️
╚════════════════════════════════════════╝

let name = "Prasanta";
console.log(typeof name, " ", name);                //  String ---> Stores on Stack, Compared by value

let email = new String("prasanta@gmail.com");
console.log(typeof email, " ", email);              //  Object ---> Stored in Heap, Compared by reference


let nickName = name;
nickName = "Rakesh";
console.log(typeof name, " ", name);

let optionalEmail = email;
optionalEmail = "rakesh@gmail.com";
console.log(typeof email, " ", email);

*/


/*
╔════════════════════════════════════════╗
 ➡️➡️➡️➡️➡️ Memory Allocation ➡️➡️➡️➡️➡️
╚════════════════════════════════════════╝

➡️➡️➡️    Primitiv Types:

    Primitive strings are immutable:

    let str = "abc";

    console.log(str);   //  o/p ---> abc

    str[0] = "z"; // ❌ doesn't change it

    console.log(str);   //  o/p ---> abc


➡️➡️➡️    Stored in the stack (fast access):

    let a = "hello";
    let b = "hello";

    ✅ Both point to the same memory because JS interns string literals (optimization technique).
    ✅ This pool is called a string intern pool.
    ✅ Saves memory
    ✅ Speeds up comparison (a === b can be pointer check)

    So a === b is true.


➡️➡️➡️    Method Access :: Autoboxing:

    Even though name = "Prasanta" is a primitive, you can still do:

    name.toUpperCase();

    JS does:

    1. Temporarily wraps it in a String object (new String("Prasanta"))

    2. Calls the method

    3. Discards the wrapper and returns the result as a primitive

    ✔️ This is called autoboxing.

    Example, 
    let name = "Prasanta";
    name.toUpperCase();

    JS does this:
    let temp = new String(name); // Autoboxing
    temp.toUpperCase();         // Calls method
    // Then temp is discarded 🧼 Garbage collected immediately after

    


➡️➡️➡️    Object Types:

    let x = new String("hello");
    let y = new String("hello");

    ✅ Both pointing to different memory.
    ✅ Created on Heap (Slow accessing/overhead).
    ✅ Immutable.

    let x = new String("hello");
    console.log(x);                 //  o/p ---> hello

    x[0] = 'P';
    console.log(x);                 //  o/p ---> hello

--------------------------------------------------------------------------------------------------
    (x==y)  ---> false
    (x===y)  ---> false
    Because here reference is compared, and for x & y two different memory location allocated.
    Also, Comparing two JavaScript objects always returns false.
--------------------------------------------------------------------------------------------------


➡️➡️➡️    🧶 Rope Strings (Concatenation Optimization):

    Rope-style (used for lazy concatenation)

    let a = "Hello";
    let b = " ";
    let c = "World";
    let result = a + b + c;

    Internally becomes:

                +
            / \
            +   "World"
            / \
        "Hello" " "

    This tree is a rope:

        Nodes = + (concatenation)

        Leaves = actual string segments

*/


/*
╔════════════════════════════════════════╗
 ➡️➡️➡️➡️➡️ String Methods  ➡️➡️➡️➡️➡️
╚════════════════════════════════════════╝

*/