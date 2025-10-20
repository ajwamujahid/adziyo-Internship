// first we discuss the scope 

// it will difne the acces of the var and func kahn tak possible hai

// Global Scope

let globalVar = "I am a global";

function showGlobal() {
    // console.log(globalVar);
}

showGlobal();
//  console.log(globalVar);

// Function Scope

function myFunc(){
    let localVar = "I am a local Function";
    // console.log(localVar);
}
myFunc();

// Block Scope

 {
    let blockVar = "I am inside the block";
    // console.log(blockVar);
    const block = "i am const block";
    // console.log(block);
}

// console.log(blockVar);





// Closure Function 
function outerFunction() {
    let name = "ajwa";
    // console.log(name);

    function innerFunction() {
        // console.log("hello" + name);
    }

    return innerFunction;
}
  const greet = outerFunction();
  greet();

// Clousre Counter
function counter(){
    let count = 0;
    return function(){
        count++;
        // console.log(count);
    };
}

// const increase = counter();

// increase();
// increase();
// increase();


// Clousre with Array

function makeArrayFunctions() {
    const arr = [];

    for(let i = 0; i < 5; i++){
        arr.push(function(){
            // console.log("Index is:", i);
        });
    }
    return arr;

}
const funcs = makeArrayFunctions();
//  funcs[0]();
//  funcs[1]();
//  funcs[2]();
//  funcs[3]();
//  funcs[4]();

//  setTimeout(() => {
//     console.log("Inside setTimeout");
//   });
//  console.log("Start");
// console.log("End");


// Event Loop Micro Tasks and Macro Tasks

// setTimeout(()=> console.log("Time out!"), 0);
// Promise.resolve().then(() => console.log("Promise!"));
// console.log("sync Code!");


// console.log("1");
// setTimeout(()=> console.log("2 (macrotasks)"), 0);
// Promise.resolve().then(()=>console.log("3 (microtasks)")); 
// console.log("4");



// call back function

// function sum(a, b) {
//     console.log(a+b);
// }

// function calculator(a,b, sumCallback){
//     sumCallback(a,b);
// };

// calculator(1,2, sum);

// // Call Back Hell
function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000)
}

// This is call back hell;
getData(1, ()=>{
getData(2, ()=>{
getData(3, ()=>{
getData(4)});
});
});


// console.log("start");
// setTimeout(()=> 
// {
//     console.log("Macrotasks : set time out");
// });

// Promise.resolve().then(()=> 
// {
//     console.log("Microtasks : Promise");
// });

// console.log("End");

// Another Example


// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));

// console.log("D");




// promise
// let promise = new Promise((resolve, reject) => {
//     console.log("hello");
//     resolve("Success");
// })


// const getPromise = () => {
//     return new Promise((resolve, reject) =>{
//         console.log("i am a promise");
//          resolve("success");
//         //  reject("error");
//     });
// };

// let promise = getPromise();
// promise.then((res)=> {
//  console.log("Promise Fullfilled", res);
// });

// promise.catch((err)=> {
//     console.log("Promise not Fullfilled", err);
//    });


// const myPromise = new Promise((resolve, reject) => {
//     let success = true;
  
//     setTimeout(() => {
//       if (success) {
//         resolve(" Task completed!");
//       } else {
//         reject("Something went wrong!");
//       }
//     }, 2000);
//   });
  
//   myPromise
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error))
//     .finally(() => console.log("Done processing."));


//   let create the promise chain


function asyncFunc1(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");

        }, 1000);
    });
}
    

function asyncFunc2(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");

        }, 2000);
    });
}
function asyncFunc3(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("data3");
            resolve("success");

        }, 3000);
    });
}
  
function asyncFunc4(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("data4");
            resolve("success");

        }, 4000);
    });
}
function asyncFunc5(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("data5");
            resolve("success");

        }, 4000);
    });
}  

console.log("fetching data 1.....");
let p1 = asyncFunc1();
p1.then((res)=>{
    console.log("fetching data 2.....");
    let p2 = asyncFunc2().then((res)=>{
        console.log("fetching data 3.....");
let p3 = asyncFunc3().then((res)=>{
    console.log("fetching data 4.....");
    let p4 = asyncFunc4().then((res)=>{
        console.log("fetching data 5.....");
        let p5 = asyncFunc5();
        p5.then((res)=>{

        });
    });
});
    });
});




// we use the callback in promises

//   function getDataWithCallback(callback) {
//     setTimeout(() => {
//       callback(" Data from callback");
//     }, 1000);
//   }
  

//   function getData() {
//     return new Promise((resolve) => {
//       getDataWithCallback((data) => {
//         resolve(data);
//       });
//     });
//   }
  
//   // Now you can chain it like a normal Promise
//   getData()
//     .then((res) => {
//       console.log(res);
//       return "Step 2 complete";
//     })
//     .then((msg) => {
//       console.log(msg);
//     });
  


    // async await 
// async function hello() {
//     console.log("hello");
// }


function api(){
    return new Promise((resolve, reject) => {
setTimeout(()=>{
    console.log("Weather Data!");
    resolve(200);
}, 2000)
    });
}

async function getWeatherData() {
    await api();
    await api();
}


// another axample

function getData1(dataId){
    return new Promise((resolve, reject) =>{ 
        setTimeout(()=> {
            console.log("data", dataId);
            resolve("succes");
        }, 1000);

})
}

function getData2(dataId){
    return new Promise((resolve, reject) =>{ 
        setTimeout(()=> {
            console.log("data", dataId);
            resolve("succes");
        }, 2000);

})
}
function getData3(dataId){
    return new Promise((resolve, reject) =>{ 
        setTimeout(()=> {
            console.log("data", dataId);
            resolve("succes");
        }, 3000);

})
}
function getData4(dataId){
    return new Promise((resolve, reject) =>{ 
        setTimeout(()=> {
            console.log("data", dataId);
            resolve("succes");
        }, 4000);

})

}
function getData5(dataId){
    return new Promise((resolve, reject) =>{ 
        setTimeout(()=> {
            console.log("data", dataId);
            resolve("succes");
        }, 5000);

})

}

async function getAllData() {
    console.log("Getting data 1....");
    await getData1(1);
    console.log("Getting data 2....");
    await getData2(2);
    console.log("Getting data 3....");
    await getData3(3);
    console.log("Getting data 4....");
    await getData4(4);
    console.log("Getting data 5....");
    await getData5(5);
    console.log("data are completed");
}


(async function() {
    console.log("Getting data 1....");
    await getData1(1);
    console.log("Getting data 2....");
    await getData2(2);
    console.log("Getting data 3....");
    await getData3(3);
    console.log("Getting data 4....");
    await getData4(4);
    console.log("Getting data 5....");
    await getData5(5);
    console.log("data are completed");
}) ();