/*  
    ╔══════════════════════════════════════════╗
     ➡️➡️➡️➡️➡️ Problem With forEach ➡️➡️➡️➡️➡️
    ╚══════════════════════════════════════════╝
    1. ForEach does not return any value.
    2. To return any value with a filter condition we use filter().
    3. To return a single value we use reduce().

    let isp = ["Jio", "Airtel", "VI", "BSNL"];

    let allISP = isp.forEach(isp => {
        console.log(isp);
        return isp;
    });

    console.log(allISP);    //  Undefined bcs forEach doesn't return any value.

*/


/*
    ╔═════════════════════════════════════════════════╗
     ➡️➡️➡️➡️➡️ Another Way with forEach ➡️➡️➡️➡️➡️
    ╚═════════════════════════════════════════════════╝

    let allNumbers = [5,7,12,18,19,21,25,28];

    let oddNumbers = [];

    allNumbers.forEach((num) => {
        if((num % 2) !== 0){
            oddNumbers.push(num);
        }
    });

    console.log(`Odd Numbers: ${oddNumbers}`);

*/


/*
    ╔═════════════════════════════════════╗
     ➡️➡️➡️➡️➡️ Filter Method ➡️➡️➡️➡️➡️
    ╚═════════════════════════════════════╝

    let allAges = [15, 18, 21, 7, 26, 12, 31, 35];

    let voter = allAges.filter((age) => age >= 18);
    console.log(`Voter's Age: ${voter}, Type: ${Array.isArray(voter)?"Array":"Not an Array"}`);

    let nonVoter = allAges.filter((age) => {
        return (age < 18);      //  When using {} must use 'return' keyword
    })
    console.log(`Non-Voter's Age: ${nonVoter}`);


---------------------------------------------------------------------------------------------------------------------------------------------------
    1. Filter always filter the array items based on the provided condition, i.e. elements which meet the condition will push to the return array.
    2. It returns an Array always.
---------------------------------------------------------------------------------------------------------------------------------------------------

    ╔══════════════════════════════════════════╗
    ➡️➡️➡️➡️➡️ Problem With Filter ➡️➡️➡️➡️➡️
    ╚══════════════════════════════════════════╝

    1. Filter doesn't perform any operation on the array element.
    2. Filter doesn't change the element, return same as it is.


    let allNums = [15, 18, 21, 7, 26, 12, 31, 35];

    let add10 = allNums.filter((num) => {
        return (num + 10);
    })
    console.log(`Elements after adding 10: ${add10}`);

*/


/*
    ╔═══════════════════════════════════╗
     ➡️➡️➡️➡️➡️ Map Method ➡️➡️➡️➡️➡️
    ╚═══════════════════════════════════╝

    1. Map apply operations to all the elements.
    2. If apply any filter condition, then for the elements which does not pass the con, for those it return <empty slots>.


    let allNums2 = [15, 18, 21, 7, 26, 12, 31, 35];

    let add20 = allNums2.map((num) => {
        return (num + 20);
    })
    console.log(`Elements after adding 10: ${add20}`);


    // Return <empty slots>:

    let add30 = allNums2.map((num) => {
        if(num % 2 == 0){
            return num+30;
        }
    })
    console.log(`Elements after adding 10: ${add30}, Length of Array: ${add30.length}, ${add30[0]}`);


    ╔═══════════════════════════════════════════════╗
     ➡️➡️➡️➡️➡️ Map Filter Combination ➡️➡️➡️➡️➡️
    ╚═══════════════════════════════════════════════╝

    To avoid this problem <empty slot> use map()/filter() combination like,

    let allNums3 = [15, 18, 21, 7, 26, 12, 31, 35];

    let doubleEvenNo = allNums3
    .filter((num => {
        return num % 2 == 0;
    }))
    .map((num) => {
        return num*2;
    })
    console.log(`Elements double even numbers: ${doubleEvenNo}, \nLength of Array: ${doubleEvenNo.length}`);

*/


/*
    ╔═════════════════════════════════════╗
     ➡️➡️➡️➡️➡️ Reduce Method ➡️➡️➡️➡️➡️
    ╚═════════════════════════════════════╝

    1. Map & Filter always return an array. Map return all elements, where filter return only the conditional elements.
    2. But to overcome the problem that if we need any singal value as return reduce() comes into the game.
    3. Takes accumulator, current value and initial value for the accumulator.
    4. Accumulator initialize only once with the provided value, from next iteration initialize with the returned value.
    5. If does not provide initializer, by default takes as 0.

    let itemCosts = [10, 20, 30];

    let totalCost = itemCosts.reduce(function (acc, curr) {
        console.log(`acc: ${acc}   curr: ${curr}`)
        return acc+curr;
    }, 0);
    console.log(`Total Cost: ${totalCost}`);


    // With Arrow Function:
    totalCost = itemCosts.reduce((acc, curr) => (acc+curr), 0);
    console.log(`Total Cost: ${totalCost}`);


    // With Defined Function:
    function myTotal(acc, curr){
        return acc+curr;
    }

    totalCost = itemCosts.reduce(myTotal);      //  If initial value is not passed, then by default takes it as 0 and total = 60
    console.log(`Total Cost: ${totalCost}`);


    totalCost = itemCosts.reduce(myTotal, 10);  //  Here we pass initial value with reduce(), so it takes as 10 and total = 70
    console.log(`Total Cost: ${totalCost}`);

*/


/*
    ╔══════════════════════════════════════════════════════════╗
     ➡️➡️➡️➡️➡️ Built myCart type functionalities ➡️➡️➡️➡️➡️
    ╚══════════════════════════════════════════════════════════╝

    // With map and reduce:

    let myCart = [
        {
            courseName : "Full Stack using MERN",
            coursePrice : 33000
        },
        {
            courseName : "Data Science",
            coursePrice : 51000
        },
        {
            courseName : "AI/ML",
            coursePrice : 69000
        }
    ];

    let totalCoursePrice = myCart
    .map((course) => course.coursePrice)
    .reduce((acc, curr) => {
        return acc+curr;
    }, 0);

    console.log(`Total price of all courses: ${totalCoursePrice}`);


    // With only reduce():

    totalCoursePrice = myCart.reduce((acc, course) => {
        return acc+course.coursePrice;
    }, 0);

    console.log(`Total price of all courses: ${totalCoursePrice}`);

*/