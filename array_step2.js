/*
    Conatant Array:
    const arr = [1, 2, 3];

    Immutable, can't change/reassign.

    arr = [4, 5, 6];  // ❌ TypeError


    But Here Mutation Work:

    arr.push(4);      // ✅ works
    arr[0] = 100;     // ✅ works
    arr.pop();        // ✅ works


    🧠 Behind the Scenes (V8-level):

    +------------------+        +-------------------------+
    |   Stack Memory   |        |        Heap Memory      |
    +------------------+        +-------------------------+
    |  arr → ref#0x01  | ----→  |  ref#0x01: [1, 2, 3]     |
    +------------------+        +-------------------------+


    That's why:
    arr.push(4);      // ✅ works, bcs we not changing the reference — you're changing the contents at the referenced location.



    🧪 How to Avoid this/Frezz:
    
    const arr = Object.freeze([1, 2, 3]);
    arr.push(4);  // ❌ Fails silently (or throws in strict mode)
    arr[0] = 99;  // ❌ Cannot change



    🧠 Memory Layout:

    Array Object (on heap)
        ├── HiddenClass ptr
        ├── Elements ptr ──→ [element0, element1, element2, ...]



    const arr = [1, 2, 3];

    Stack                     Heap
    ────────────────────      ───────────────────────────────
    | arr (binding)      | →  | Array Object (Header)        |
    |--------------------|    | ├── HiddenClass pointer      |
                            | ├── Elements pointer ──┐     |
                            |                        ↓     |
                            |                [1, 2, 3]     | ← Elements Array (data)
                            └──────────────────────────────


    ✅ 1. Stack
    Stores the variable binding (arr) and points to the array object.
    Since arr is declared with const, this pointer cannot be reassigned, but the data it points to is mutable.
    The stack is thread-local and very fast, but can only hold primitive values or pointers to heap objects.



    ✅ 2. Heap

    This is where the real magic happens. The array object itself lives on the heap and includes:
    🔹 Array Object Header

        Contains metadata, including:

            Internal class pointer → HiddenClass

            Elements pointer → pointer to the actual data (elements array)

    🔹 Elements Array

        The actual [1, 2, 3] data is stored here.

        This is a contiguous memory region for packed arrays, or a sparse dictionary-like layout for holey arrays.

        Optimized by V8 depending on:

            Type of values (SMI, double, object)

            Density (packed vs. holey)


        
    Stack
    ───────
    arr ───────┐
            ↓
    Heap
    ──────────────────────────────────────────────
    Array Object {
    hiddenClassPtr → HiddenClass#XYZ,
    elementsPtr ─────┐
    }                  ↓
                [1, 2, 3]  ← elements buffer


*/