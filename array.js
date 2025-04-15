/*    
    ╔══════════════════════════════════════╗
     ➡️➡️➡️➡️➡️ Array Declaration ➡️➡️➡️➡️➡️
    ╚══════════════════════════════════════╝

    let fruits = ['apple', 'mango', 'banana'];
    let cars =  new Array('Range Rover', 'BMW', 'Toyota');

    Difference b/w:
    When create like,
    let no1 = [3];              //  Create an array with 1 element i.e. 3
    let no2 = new Array(3);     //  Create an array with length 3 with no element i.e. [ <3 empty items> ]
*/

/*
    ╔══════════════════════════════════════╗
     ➡️➡️➡️➡️➡️ Internal Working ➡️➡️➡️➡️➡️
    ╚══════════════════════════════════════╝

    🧠 V8 Array Storage: Elements Kinds:
    🔹 1. FAST_ELEMENTS (most optimized):
    let arr = [1, 2, 3]; // FAST_SMI_ELEMENTS (for small integers)
    ➡️ Stored as a dense memory block like in C++

    🔹 2. FAST_DOUBLE_ELEMENTS:
    let arr = [1.1, 2.2, 3.3];

    🔹 3. FAST_ELEMENTS (with object references):
    let arr = [1, "two", { three: 3 }];

    🔹 4. HOLEY_ELEMENTS (aka Sparse or Slow arrays):
    let arr = [1, , 3]; // hole at index 1

    🔹 5. DICTIONARY_ELEMENTS:
    let arr = [];
    arr[1000] = "a"; // Very sparse
    ➡️ Internally converted to a hashmap-like structure. ➡️ Very slow compared to FAST_ELEMENTS.



    ╔══════════════════════════════════════╗
     ➡️➡️➡️➡️➡️ Memory Management ➡️➡️➡️➡️➡️
    ╚══════════════════════════════════════╝

    🧪 Behind the Scenes – Memory Layout:
    let arr = [1, 2, 3];

    Stack:
    arr ──▶ pointer to heap object

    Heap:
    JSArray {
        length: 3,
        elements: [1, 2, 3] (packed tightly in C++ style memory)
    }

    When optimized, it's close to:
    int arr[] = {1, 2, 3};

*/

/*
    ╔══════════════════════════════════════╗
     ➡️➡️➡️➡️➡️ Garbage Collection ➡️➡️➡️➡️➡️
    ╚══════════════════════════════════════╝

    🧠 Memory Model Recap:

--------------------------------------------------------------
    Stack: For primitive values and references (pointers).

    Heap: For objects, arrays, functions, closures, etc.
--------------------------------------------------------------

--------------------------------------------------------------------------
    When we do like:

    let arr = [1, 2, 3];

    arr is stored on the stack

    The actual [1, 2, 3] array lives in the heap

    GC monitors the heap and reclaims memory no longer referenced


    🔄 Array GC Lifecycle
    Step-by-step:

    let a = [1, 2, 3];
    a = null;

    Now the array is unreachable

    GC will mark it as collectible during next GC cycle

    If no other references exist (from closures or globals), it is freed

-------------------------------------------------------------------------------
*/


/*
    ╔══════════════════════════════════════╗
     ➡️➡️➡️➡️➡️ Hidden Classes ➡️➡️➡️➡️➡️
    ╚══════════════════════════════════════╝

    Think of Hidden Classes like blueprints or shapes for JS objects and arrays.
    JavaScript is dynamically typed, but V8 pretends it’s not to optimize performance.

    let obj = { name: "Prasanta", age: 25 };

    V8 creates a hidden class (like a C++ struct):

    HiddenClass#1: {
        name → offset 0
        age → offset 1
    }


    🧨 Changing the structure:

    obj.city = "Kolkata";

    Now V8 generates a new Hidden Class:

    HiddenClass#2: {
        name → offset 0
        age → offset 1
        city → offset 2
    }

    This transition breaks inline caching, because V8 can no longer reuse the previous blueprint.
*/

/*
    ╔══════════════════════════════════════╗
     ➡️➡️➡️➡️➡️ Internal Caching ➡️➡️➡️➡️➡️
    ╚══════════════════════════════════════╝

    ⚙️ 2. Inline Caching (IC) Revisited:
    IC works best when hidden classes stay the same.
    When you access properties or array elements, arr[0];
    V8 uses Inline Caches (ICs) to remember how to access that property the first time — and reuse that path later.


    Example:
    function greet(user) {
        return user.name;
    }

    let a = { name: "Alice" };
    let b = { name: "Bob" };

    greet(a); // IC created with HiddenClass#1
    greet(b); // HiddenClass#1 reused → FAST!

    let c = { name: "Carol", city: "Paris" };
    delete c.city;
    greet(c); // Now hidden class changed → IC busted 😭


    Step by Step Explanation:

    🧱 Starting Point: Empty Object
    let a = {};
    At this point, V8 gives it a HiddenClass#0 (an empty shape):    HiddenClass#0 → {}

    ✅ First Shape: After Adding .name
    let a = { name: "Alice" };

    Now the hidden class becomes:

    HiddenClass#1 → { name: [offset 0] }
    (transitioned from HiddenClass#0)

    "I have one property name"
    "It’s stored at offset 0 in memory"
    "I came from HiddenClass#0 by adding 'name'"

    let b = { name: "Bob" };
    Same structure → Reuses HiddenClass#1,  ✔️ Fast inline cache works here.

    let c = { name: "Carol", city: "Paris" };
    This creates a new transition:
    HiddenClass#2 → { name: [0], city: [1] }
    (from HiddenClass#1 via 'city' addition)

    delete c.city;
    HiddenClass#3 → { name: [0] } // BUT DIFFERENT from #1!

    HiddenClass#0
   |
   +-- name added --> HiddenClass#1
           |
           +-- city added --> HiddenClass#2
                   |
                   +-- city deleted --> HiddenClass#3 (same props, but different lineage)

*/