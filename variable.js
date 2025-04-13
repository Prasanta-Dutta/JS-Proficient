const accNo = 110000215896;
let email = "prasanta@gmail.com"
var name = "Prasanta Dutta";

city = "Joypur";


function abcd() {
    var x = 50;
  
    function pqr() {
      var x = 10;
      console.log("X in pqr: ", x);
    }
    pqr();
    console.log("X in abcd: ", x);
}
abcd();

// console.log("X in pqr: ", x);  // It gives error bcs var does not exist in local scope

  

/*
    In js when we run any code then first memory is created for variables and functions ---> Memory creation phase
    Then code is executed line by line ---> Code execution phase

    const ---> Value cannot be reassign. Also Hoisted, but initially i.e. at the memory creation phase it is in the Temporal Dead Zone(TDZ).
    Ans TDZ does not allow veriables to use before it has been declared. So we can't do like, [console.log(accNo); const accNo = "123";]
    Also it not even initialized with undefined in memory creation phase, but the memory is allocated.
    This period between hoisting and actual declaration in code is called the Temporal Dead Zone (TDZ), i.e. before it declare.

    Step-by-Step:
    1. Memory Creation Phase (before code runs)

        JavaScript engine hoists const / let variables to memory.

        BUT: It doesn't initialize them.

        So, they exist in memory, but they're in the Temporal Dead Zone (TDZ).

    2. Temporal Dead Zone (TDZ)

        This is the period from the start of the block until the variable's declaration line is executed.

        During TDZ, accessing the variable causes a ReferenceError.

        The variable is in scope, but unusable.

    3. Once Declared

    When the line like this runs:

    const foo = 42;

    ➡️ Here's what happens:

        Variable is initialized with the given value (42).

        It is removed from the TDZ.

        Now it's accessible and usable.

    So yes — once declared and initialized, the variable exits the TDZ.

    For Var:
    1. Memory Creation Phase (a.k.a. "Hoisting Phase")

    The JS engine scans the code top-to-bottom.

    All variables declared with var are:

        ✅ Hoisted

        ✅ Allocated memory

        ✅ Initialized with undefined (👈 key difference from let and const)

        console.log(x); // undefined
        var x = 10;

        During the memory creation phase:

        JS sees var x and sets x = undefined in memory.

        Then during execution, x = 10 replaces it.

        2. Code Execution Phase

            Code runs line-by-line.

            When it reaches var x = 10, it assigns the value 10 to the already-created x.

        🧪 Live Example: Step-by-Step Breakdown

        function test() {
            console.log(a); // ❓ What happens?
            var a = 5;
            console.log(a); // ✅ 5
        }
        test();

        📅 Execution Timeline:
        Phase	                Line of Code	            What Happens
        Memory Creation	        var a	                    a is created and set to undefined
        Execution (Line 2)	    console.log(a)	            Prints undefined
        Execution (Line 3)	    a = 5	                    Updates a from undefined to 5
        Execution (Line 4)	                                console.log(a)	Prints 5
        🧠 How Hoisting Works Visually
        👇 You write this:

        console.log(a);
        var a = 10;

        👆 JavaScript internally sees this:

        var a;           // Hoisted and initialized as undefined
        console.log(a);  // Logs: undefined
        a = 10;          // Assigns 10 to a

        So var can be accessed before declaration — but its value is just undefined.
        ⚠️ Quirks & Dangers of var
        1. ✅ Function Scope Only (not block-scoped!)

        if (true) {
        var message = "Hello";
        }
        console.log(message); // ✅ "Hello"

        This works because var ignores block {} boundaries — it only respects function boundaries.
        2. ⚠️ Redeclaration Allowed

        var x = 5;
        var x = 10;
        console.log(x); // ✅ 10

        This can lead to bugs in large codebases and overwrites values silently.
        3. 😬 Global Pollution

        When var is declared outside any function, it becomes part of the global window object (in browsers).

        var myName = "Prasanta";
        console.log(window.myName); // ✅ "Prasanta"

        Again,
        var x = 5;
        console.log(delete window.x); // ❌ false — can't be deleted



        Problem with var:
        1. Not block scope, but fn scope.
        2. Re-declaration/defination/allocation allowed.
        3. Global pollution, when declared outside any fn add itself to the window object.
    

    function abcd() {
    var x = 50;
        function pqr() {
            var x = 10;
        }
    }

    🔄 Step-by-Step Breakdown:
    🧠 Step 1: Global Execution Context (GEC)

        Nothing runs yet.

        Global scope contains the function definition abcd.

    🧠 Step 2: abcd() is called → New Execution Context (EC) is created

        Memory Creation Phase of abcd EC:

            var x is hoisted and initialized with undefined

        Execution Phase of abcd EC:

            x is assigned 50

            pqr function is defined (just like how abcd was defined in global scope)

    ✅ At this point, x inside abcd() points to its own memory.
    🧠 Step 3: If pqr() is called → Another New EC is created

        Memory Creation Phase of pqr EC:

            var x is hoisted and initialized with undefined

        Execution Phase of pqr EC:

            x is assigned 10

    🚫 This x is not the same as the one in abcd().

    Global Execution Context (GEC)
    │
    ├── abcd() Execution Context
    │   ├── var x = 50 → 📦 memory location #1
    │   └── function pqr()
    │       └── pqr() Execution Context
    │           └── var x = 10 → 📦 memory location #2

    💡 If you Remove var Inside pqr
    ➡️ Now x = 10 refers to the outer x (because no new one is created inside pqr).
    🧠 This uses scope chain / lexical scoping to look up the outer x and modify it.


    When no keyword assign:
    const accNo = 110000215896;     // ✅ Block-scoped, const, cannot be reassigned
    let email = "prasanta@gmail.com" // ✅ Block-scoped, mutable
    var name = "Prasanta Dutta";    // ✅ Function-scoped
    city = "Joypur";                // ❗ No declaration keyword

    city = "Joypur";
    1. It’ll treated as a global variable and stick it onto the global object (window in browser / global in Node.js)."
    2. This happens even if you’re inside a function!, Unless you're in strict mode, which we’ll get to next.
    3. It’s similar to var (because it attaches to global window ✅), BUT: It’s even more dangerous than var because...
    4. console.log(delete window.city); // ❌ false — can't be deleted


    Feature	                var	                        let / const	                        Implicit Global (city = ...)
    Hoisted	                ✅ (with undefined)        ✅ (in TDZ)	                    ❌ Not hoisted
    Scope	                Function	                Block	                            Global (always)
    Attached to window	    ✅ Yes	                  ❌ No	                            ✅ Yes
    Writable	            ✅ Yes	                  ✅ / ❌ (let / const)	          ✅ Yes
    Configurable (deletable)❌ No	                  ❌ No	                            ✅ Yes
    Safe to use?	        😬 Risky	               ✅ Safe	                         ❌ Dangerous & discouraged
    
*/