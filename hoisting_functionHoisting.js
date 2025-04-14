/*
╔══════════════════════════════════════════╗
 ➡️➡️➡️➡️➡️ Execution Context ➡️➡️➡️➡️➡️
╚══════════════════════════════════════════╝

    1. Hoisting is JavaScript's default behavior of moving declarations to the top of their scope during the memory creation phase.

    2. But there's a twist...

    3. Only declarations are hoisted, not initializations.

    🔸 Example 1: var

        console.log(a); // undefined
        var a = 10;

        Internally becomes:

        var a;         // hoisted and initialized as undefined
        console.log(a);
        a = 10;


    🔸 Example 2: let and const

        console.log(b); // ❌ ReferenceError
        let b = 20;

        Why? Because of the Temporal Dead Zone (TDZ)

        The b exists, but it’s in a “dead zone” until it’s declared.

        You can’t access it until the engine reaches the declaration.



    🔸 Example 3: Function Declaration

        greet(); // ✅ works
        function greet() {
            console.log("Hello!");
        }

        ✅ Entire function is hoisted, not just the name.



    🔸 Example 4: Function Expression

        greet(); // ❌ TypeError: greet is not a function

        var greet = function() {
            console.log("Hi!");
        };

        Here:

        var greet is hoisted as undefined

        But assignment happens later

        So you’re calling undefined() → TypeError



    🧠 Hoisting in the Call Stack (How JS Really Thinks)

    When JS runs:

        Global Execution Context is created.

        Memory phase (hoisting):
        |
        |---    Declares variables (var → undefined, let/const → uninitialized)
        |
        |---    Declares function definitions

        Execution phase:
        |
        |---    Executes line by line, assigns values, runs logic


Type	                Hoisted?	              Initialized?	       Scope	                   Access Before Declaration
        var	                    ✅ Yes	        ✅                   undefined	Function	    ✅ Yes (but undefined)
        let	                    ✅ Yes	        ❌	                Block	                    ❌ No (TDZ)
        const	                ✅ Yes	        ❌	                Block	                    ❌ No (TDZ)
        function	            ✅ Yes	        ✅	                Block / Global	            ✅ Yes
        function expression	    ✅ (name)	    ❌	                Based on var/let/const	    ❌ No
        class	                ✅ Yes	        ❌	                Block	                    ❌ No (TDZ)

*/