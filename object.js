/*
    ╔══════════════════════════════════════╗
     ➡️➡️➡️➡️➡️ Creation Types ➡️➡️➡️➡️➡️
    ╚══════════════════════════════════════╝

    1. Object Literal:
    
    let val = Symbol("Unique Developer");
    let val2 = Symbol("Hi Robin");
    let user = {
        name : "Prasanta",
        age : 25,
        email : "prasanta@gmail.com",
        [val] : Symbol("Unique Developer"),
        [val2] : val2
    };

    console.log(user);


    2. Constructor Function:
    
    function createBtn(color){
        this.color = color,
        this.shape = "circle",
        this.radius = 10
    }

    let redBtn = new createBtn("Red");
    console.log(redBtn);
    console.log(typeof redBtn);


    3. Object.create():

    let employee = {
        greet() {
            console.log(`Hello, I'm ${this.name}`);
        }
    }

    let emp1 = Object.create(employee);
    emp1.name = "Robin";
    emp1.slary = 60000;
    emp1.city = "Loscur";

    console.log(emp1);
    console.log(typeof emp1);

*/

/*
    ╔══════════════════════════════════════╗
     ➡️➡️➡️➡️➡️ Memory Allocation ➡️➡️➡️➡️➡️
    ╚══════════════════════════════════════╝

    Stack                    Heap
    ────────────────────     ───────────────────────────────────────────
    | obj (pointer)    | →  | Object Header (metadata, pointer to elements)  |
    |------------------|    | {"name": "Alice", "age": 25}                   |
                            | Elements: [ "name", "age" ]                    |
                            | HiddenClass: Pointer to Shape info (metadata)  |

    
    Component	                Location	            Notes
    Object header	            Heap	                Stores metadata, prototype link, and hidden class pointer
    Properties	                Heap	                Each property points to a value, either primitive or reference
    Hidden Class	            Heap	                Tracks shape of the object for optimization purposes


    const obj = { name: "Alice", age: 25 };

    HiddenClass#1 → { name: [offset 0], age: [offset 1] }

    obj.city = "Paris";

    Adding a property (city) causes a transition to a new hidden class (HiddenClass#2):

    HiddenClass#1 → { name: [0], age: [1] }  —(add 'city')→  HiddenClass#2 → { name: [0], age: [1], city: [2] }



    Garbage Collection Process:

    1. Marking: V8 marks all reachable objects (those that are still in use).
    2. Sweeping: It frees the memory of objects that are unreachable.
    3. Generational GC: Objects that live long enough are promoted to the Old Generation for slower, less frequent collection.

    Example:

    let obj = { name: "Alice" };
    obj = null;  // Now obj is eligible for GC, as there are no references to it.

*/

/*
    Object Inheritance:

    Prototype Chain Lookup: 
    When accessing a property, JS first checks the object itself. If not found, it checks the object's prototype.

    const animal = { species: "Dog" };
    const dog = Object.create(animal);  // dog inherits from animal
    dog.breed = "Beagle";
    console.log(dog);
    console.log(dog.species, dog.breed);
*/


/*
    ╔══════════════════════════════════════╗
     ➡️➡️➡️➡️➡️ Object Immutability ➡️➡️➡️➡️➡️
    ╚══════════════════════════════════════╝


    const obj = Object.freeze({ name: "Alice", age: 25 });
    obj.name = "Bob";  // ❌ Fails silently (or throws in strict mode)
    console.log(obj);

    Shallow freezing: Nested objects inside the frozen object can still be modified.


    const nestedObj = Object.freeze({ address: { city: "Paris" } });
    nestedObj.address.city = "Berlin";  // Allowed, because `address` is not frozen
    console.log(nestedObj);

    Here for nested object freezing not applied
*/


/*
    ╔══════════════════════════════════════╗
     ➡️➡️➡️➡️➡️ Object Destructuring ➡️➡️➡️➡️➡️
    ╚══════════════════════════════════════╝

    const person = { userName: "Alice", age: 25, city: "Paris" };
    const { userName : name, age } = person;  // Extracts `name` and `age`
    console.log(name, age);  // "Alice", 25

    // const { userName : name2, , city} = person;  //  No need like this bcs extra comma used in spread


    //Rest/Spread Operators:

    const newPerson = { ...person, country: "France" };  // Copy and add new property
    console.log(newPerson);  // { name: "Alice", age: 25, city: "Paris", country: "France" }

*/


/*
    ╔══════════════════════════════════════╗
    ➡️➡️➡️➡️➡️ Getter / Setter ➡️➡️➡️➡️➡️
    ╚══════════════════════════════════════╝

    const person = {
        fname : "Ketc",
        lname : "Langstone",
        age : 25,

        get fullName(){
            return `${this.fname} ${this.lname}`;
        },

        set fullName(value){
            [ this.fname, this.lname ] = value.split(' ');
        }
    };

    console.log(person.fullName);

    person.fullName = "Ketc Dutta";
    console.log(person.fullName);
*/