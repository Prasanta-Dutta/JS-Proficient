/*    
    let person = {
        name : "Prasanta",
        age : 25
    };

    for(let key in person){
        console.log(`key : ${key} value : ${person[key]}`);
    }

*/


/*
    ╔════════════════════════════════════════════════════════╗
     ➡️➡️➡️➡️➡️ For of cannot be used with objects ➡️➡️➡️➡️➡️
    ╚════════════════════════════════════════════════════════╝

    for(let key of person){
        console.log(`key : ${key} value : ${person[key]}`);
    }

    Error: person is not iterable
*/


/*
    ╔═══════════════════════════════════════════╗
     ➡️➡️➡️➡️➡️ Object key with space ➡️➡️➡️➡️➡️
    ╚═══════════════════════════════════════════╝
    let person2 = {
        "first name" : "Shubhanjali",
        age : 23
    };

    for(let key in person2){
        console.log(`key : ${key} value : ${person2[key]}`);
    }
*/


/*
    ╔════════════════════════════════════════════════════════╗
     ➡️➡️➡️➡️➡️ Array with both for-in and for-of ➡️➡️➡️➡️➡️
    ╚════════════════════════════════════════════════════════╝

    let noodles = ["Pasta", "Maggie", "Yippe"]

    for(let item of noodles){
        console.log(`${item}`);
    }

    for(let key in noodles){
        console.log(`key : ${key},  value : ${noodles[key]}`);
    }
*/


/*
    ╔════════════════════════════════════════════════════════╗
     ➡️➡️➡️➡️➡️ Use of Map() and Iterate through it ➡️➡️➡️➡️➡️
    ╚════════════════════════════════════════════════════════╝
    1. With Map() for-of can be used only, Also it returns the key value both, to use destructure it
    2. With Map() we can't use for-in, if we use it does not provide any error, but no o/p.

    const capitals = new Map();
    capitals.set("West Bengal", "Kolkata");
    capitals.set("Mashya Pradesh", "Indore");
    capitals.set("Uttar Pradesh", "Prayagraj");

    console.log(typeof capitals);

    for (const key of capitals) {
        console.log(`Typeof Key: ${typeof key}, ${key}`);
    }

    for (const [key, value] of capitals) {
        console.log(`State : ${key} ---> Capitals : ${value}`);
    }

    

    // for (const key in capitals) {
    //     console.log(`${key}`);
    // }

    // for (const [key, value] in capitals) {
    //     console.log(`State : ${key} ---> Capitals : ${value}`);
    // }
*/


/*
    ╔════════════════════════════════════════════════════╗
     ➡️➡️➡️➡️➡️ ForEach Loop, Every Function ➡️➡️➡️➡️➡️
    ╚════════════════════════════════════════════════════╝
    

    let courses = ["Java Full Stack", "MERN", "Python Full Stack"];

    // courses.forEach(function (course) {
    //     console.log(`${course}`);
    // });


    // courses.forEach((course) => {
    //     console.log(course);
    // });


    // function displayCourse(course){
    //     console.log(course);
    // }

    // courses.forEach(displayCourse);


    // courses.forEach((course, index, array) => {
    //     console.log(`${typeof course}, Value: ${course}`);
    //     console.log(`${typeof index},  Index: ${index}`);
    //     console.log(`${typeof array},  Array: ${array}`);

    //     // if(index === 0){    //  Can't use break statement, Solution??
    //     //     break;
    //     // }
    // });


    // Solution: Every Function

    // courses.every((course, index, array) => {
    //     console.log(`${typeof course}, Value: ${course}`);
    //     console.log(`${typeof index},  Index: ${index}`);
    //     console.log(`${typeof array},  Array: ${array}`);

    //     if(index === 0){    //  Try commenting it
    //         return false;
    //     }

    //     return true;    //  if do not return a truthy value loop will stop
    // });

*/


/*
    ╔═════════════════════════════════════════════╗
     ➡️➡️➡️➡️➡️ Handle API Responses ➡️➡️➡️➡️➡️
    ╚═════════════════════════════════════════════╝

    let allCourses = [
        {
            courseName: "Javascript",
            hrm: "JS",
            coursePrice: 4999
        },
        {
            courseName: "Data Science",
            hrm: "DS",
            coursePrice: 5999
        },
        {
            courseName: "Machine Learning",
            hrm: "ML",
            coursePrice: 7999
        }
    ]

    allCourses.forEach(course => {
        // let {courseName,, coursePrice} = course; //  Can't use like this, it used for array destructuring.
        let {courseName, coursePrice} = course;
        console.log(`Course: ${courseName} ---> Price: ${coursePrice}`);
    });

*/