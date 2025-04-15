/*
    Number:
    Types:
   
    const num1 = 500000;                //  Primitive, Stored in Stack
    const num2 = Number(1000000);       //  Primitive, is a type conversion function
    const num3 = new Number(700000);    //  Object, reference is stored in Stack, memory allocated on Heap

    // console.log(typeof num1);
    // console.log(typeof num2);
    // console.log(typeof num3);

    // Comparison:

    console.log(num1 === 500000);   //  True
    console.log(num2 === 1000000);  //  True
    console.log(num3 === 700000);   //  False, because for object reference is compared not the value. To avoid do like,
    console.log(num3.valueOf() === 700000);


    // Support Auto-Boxing:
    console.log(typeof num1.toLocaleString('en-in'), ":", num1.toLocaleString('en-in'));


    // But does not support Property Addition:
    num1.customProp = "hello";
    console.log(num1.customProp); // undefined ❌ because the wrapper object is temporary, destroyed immediately after use.

*/



/*
    Garbage Collection (GC):

    Primitives are automatically cleaned up (because they are stack-allocated).

    Objects (like num3) need garbage collection:

    Once no reference points to the object (num3), it will be marked for garbage collection and memory is freed from the heap.
    i.e. num3 = null;


*/


/*
    Some Important Methods:

*/
    const salary = 500000;
    const balance = new Number(3000000);

    console.log(salary.toExponential(2));
    console.log(salary.toExponential(3));

    console.log(salary.toFixed(2));
    console.log(salary.toLocaleString('en-in'));

    console.log(salary.toPrecision(2));
    console.log(salary.toPrecision(3));

    console.log(salary.toString());
    console.log(typeof balance.valueOf(), " : ", balance.valueOf());    //  Return value is of Number type

    // So now we can do WakeLockSentinel,
    console.log(balance.valueOf() === 3000000);        //   true
