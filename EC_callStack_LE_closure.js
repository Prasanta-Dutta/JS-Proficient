/*
╔══════════════════════════════════════════╗
 ➡️➡️➡️➡️➡️ Execution Context ➡️➡️➡️➡️➡️
╚══════════════════════════════════════════╝

    An Execution Context (EC) is like a container or environment in which JavaScript code is evaluated and executed.
    There are three types of execution context,

    🟢 Global Execution Context (GEC)	        Created when your JS file first runs (only once)
    🔵 Function Execution Context (FEC)	        Created every time a function is invoked
    🔴 Eval Execution Context	                Used when running code inside eval() (rare)

    ⚙️ Phases of Execution Context:
    🧱 1. Memory Creation Phase (aka Creation Phase)

        JS scans the code and allocates memory before actually executing it.

    What happens:

        Creates a global object (in browsers, it's window)

        Sets up this keyword

        Allocates memory for:

            Variables (set to undefined if declared with var)

            Functions (fully hoisted with the body)

            let and const are in TDZ (memory reserved but not initialized)

    🚀 2. Code Execution Phase

        The code is executed line by line.

        Variables are assigned actual values

        Functions are executed (which can create their own new Execution Contexts!)

        let and const get initialized when control reaches them

    var a = 10;
    function greet() {
    var b = 20;
    console.log(a + b);
    }
    greet();

    💾 Memory Creation Phase (Global EC):
    Global EC Memory:
    - a: undefined
    - greet: function definition
    - this: window

    - a = 10
    - greet() is invoked → creates a new Function Execution Context

    🔄 Call Stack in Action:
    Call Stack:
    |                |
    | greet()        | ← Function EC created
    | Global()       | ← GEC always at bottom

    Once greet() finishes, it’s popped:
    Call Stack:
    | Global()       |


    📦 What is eval()?

    eval() is a built-in global function that takes a string as input and executes it as JavaScript code.

    eval("console.log('Hello Eval!')");

    It creates an Execution Context, similar to how a function or global code does.

    🧬 How Eval Works Behind the Scenes

    When you call eval("code"), JavaScript:

    1. Parses the string into code.

    2. Compiles it.

    3. Creates an Eval Execution Context.

    4. Executes it within the same scope where eval() was called.


╔════════════════════════════════════════════╗
 ➡️➡️➡️➡️➡️ Lexical Environment ➡️➡️➡️➡️➡️
╚════════════════════════════════════════════╝
    Each execution context (global or function) gets its own Lexical Environment.
    It consists of two parts:

        🧠 Environment Record – the actual variables/functions

        🔗 Outer Lexical Environment Reference – link to the parent scope (like a chain)

    
    function outer() {
        let a = 10;
        function inner() {
            let b = 20;
            console.log(a + b); // a is from outer scope
        }
        inner();
    }
    outer();

    🔍 How It Works Behind the Scenes

        inner() Lexical Env:
        - b = 20
        - outer reference → outer()'s env

        outer() Lexical Env:
        - a = 10
        - outer reference → Global env

        Global Lexical Env:
        - outer = function


    ✅ JavaScript is Lexically Scoped:
    That means:
    1. The scope of a variable is determined by its position in the source code.
    2. Functions remember the environment in which they were defined, not where they are called.

--------------------------------------------------------------------------
    function outer() {
        let a = "I am a";

        function inner() {
            console.log(a); // ✅ It can access 'a'
        }

        return inner;
    }

    const innerFunc = outer(); // outer runs, returns 'inner'
    innerFunc(); // still remembers 'a'
---------------------------------------------------------------------------



    ❌ JavaScript is not dynamically scoped:
    In dynamic scope (like some other languages), the scope is based on where the function is called, not defined.

-----------------------------------------------------------------------
    let a = "Global";                                                 

    function printA() {
        console.log(a);
    }

    function execute() {
        let a = "Local";
        printA(); // ❗ In dynamic scope, this would print "Local"
    }

    execute();
----------------------------------------------------------------------


╔════════════════════════════════╗
 ➡️➡️➡️➡️➡️ Closure ➡️➡️➡️➡️➡️
╚════════════════════════════════╝

    Closures are just functions + their lexical environment (variables they can access).
    Closures = Function Code + Backpack of Variables (Lexical Environment).

    Closures are formed when a function remembers its outer lexical environment even after the outer function is done executing.
    function outer() {
        let a = 10;

        function inner() {
            console.log(a); // inner will remember `a` from outer
        }

        return inner;
    }

    const fn = outer(); // inner is returned and assigned to fn
    fn(); // calling inner() outside its original place

    🔎 What’s Happening?

    1. outer() is invoked → it creates a Lexical Environment with a = 10.

    2. inner() is defined inside outer and thus has access to a.

    3. When outer() returns inner, the inner function carries its Lexical Environment with it (this is a closure).

    4. Even though fn() (inner) is called outside of outer(), it still remembers a = 10 because it was defined inside outer().


    🧠 Lexical Environments & Memory Management:
    1. Closures extend the life of variables.

    2.  Variables not used in closures are garbage collected as usual.

    
    
    🧼 Garbage Collection in JS (Simplified):
    1. JavaScript uses a mark-and-sweep algorithm:

    2. Mark all variables that are still reachable.

    3. Sweep away the rest (clean up memory).

    4. If a variable is part of a closure, it’s marked as "reachable" — even if the outer function has finished.


    function makeHugeClosure() {
        let largeArray = new Array(1000000).fill('x');
        return function () {
            console.log('Using closure');
        };
    }

    const leaky = makeHugeClosure();

    💡 What Happens:

    largeArray is part of the lexical environment created during the execution of makeHugeClosure().

    The inner function returned (the closure) doesn't use largeArray.



    🔍 So… Will largeArray Be Garbage Collected?

    ✅ In Modern JavaScript Engines (like V8 — Chrome, Node.js):

    The engine does a static analysis to see what variables the closure actually uses.

    If largeArray is not referenced in the returned function, it will not be retained in memory.

    So YES — in this case, largeArray is eligible for garbage collection.

    🔷 Conclusion: It will NOT cause a memory leak.


    🧬 Real Understanding:

    Closures = "persistent access to variables", not just during execution, but even afterward.

    They are the heart of:

        1. Data privacy

        2. Encapsulation

        3. Event listeners

        4. Currying

        5. Function factories

    🔒 Example of Data Privacy (Real-world Use)

    function createBankAccount(initialBalance) {
        let balance = initialBalance;

        return {
            deposit(amount) {
                balance += amount;
                console.log(`Deposited ₹${amount}. New balance: ₹${balance}`);
            },
            withdraw(amount) {
                if (balance >= amount) {
                    balance -= amount;
                    console.log(`Withdrew ₹${amount}. Remaining balance: ₹${balance}`);
                } else {
                    console.log("Insufficient balance");
                }
            }
        };
    }

    const myAccount = createBankAccount(1000);
    myAccount.deposit(500);
    myAccount.withdraw(800);

    ✅ Here, balance is completely private — can't be accessed outside createBankAccount.

*/