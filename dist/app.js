"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// js_practice/app.ts
const script_js_1 = require("./script.js");
const product = new script_js_1.Product("Samsung", 10000, 101);
console.log(product.name);
// union type
// {
// let person: string | number | boolean;
// person = "ajwa";
// console.log(person);
// person = 22;
// console.log(person);
// person = true;
// console.log(person);
// }
// // intersection Type
// {
//     type Student = {
//          name: string;
//          age: number;
//     }
//     type Employee = {
//         companyname: string;
//         salary: number;
//     }
//     let Person: Student & Employee = {
//             name: "ajwa",
//             age: 22,
//             companyname: "abc",
//             salary: 12345,
//     };
// console.log(Person);
// }
// // Touples Array & destructing
// {
// let person: [string, number, boolean] = ["Ajwa", 22, true];
// let [name, age, isActive]= person;
// console.log(name);     
// console.log(age);      
// console.log(isActive); 
// }
// // touples
// // {
// //     let numbers: number[] = [1, 2, 3, 4, 5];
// // let names: string[] = ["Ajwa", "Mujahid", "Ali"];
// // let flags: boolean[] = [true, false, true];
// // console.log(numbers);
// // array in ts 
// // let numbers: number[] = [1, 2, 3, 4, 5];
// // let names: string[] = ["Ajwa", "Mujahid", "Ali"];
// // let flags: boolean[] = [true, false, true];
// // arrays in ts
// // let numbers:Array<number> = [1,2,3,4,5,6,7,8,9];
// // let names: readonly string[] = ["Dylan"];
// // names.push("jack"); // no error
// // // names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
// // console.log(names);
// // read only
// // const names: readonly string[] = ["Dylan", "Jack"];
// // // Read karna allowed
// // console.log(names[0]); // "Dylan"
// // //  Loop lagana allowed
// // for (let n of names) {
// //   console.log(n);
// // }
// // // Filter/map return new array (but readonly array khud change nahi hoti)
// // const upper = names.map(n => n.toUpperCase());
// // console.log(upper); // ["DYLAN", "JACK"]
// // }
// // {
// //     let value: any = true;
// //     value = "string";
// //     console.log(Math.round(value));
// // }
// // {
// //     const user = {
// //         name: "Alice",
// //         age: 30,
// //         isAdmin: true
// //       };
// //       console.log(user.name); 
// // }
// // {
// //     let name: string = "ajwa";
// //     let age:  number = 22;
// //     let isstudent: boolean = true;
// // }
// // // use of any
// // {
// // let value: any = 10;
// // value = "string";
// // value.toUpperCase(); 
// // }
// // user of unknown
// // {
// //     let value: unknown = "ajwa";
// //     if (typeof value === "string"){
// //         console.log(value.toUpperCase())
// //     }
// // }
// // basic method of arrays 
// // map
//  {
//     let numbers: number[] = [10, 20, 30, 40];
//     let double = numbers.map(num => num * 2);
//     console.log(double);
//  }
//  {
//     let fruits: string[] = ["apple", "mango", "cherry"];
//     let fruit = fruits.map(fruits => fruits.toUpperCase());
//     console.log(fruit);
//  }
//  {
//     let ages: number[] = [12, 18, 25, 40, 60];
// let adults = ages.filter(age => age >= 18);
// console.log(adults); // [18, 25, 40, 60]
// // let firstAdult = ages.find(age => age >= 18);
// // console.log(firstAdult); // 18
// let total = ages.reduce((sum, age) => sum + age, 0);
// console.log(total); // 155
//  }
// //  strings method
// {
// let name: string = "Ajwa Mujahid";
// console.log(name.toUpperCase());  // "AJWA MUJAHID"
// console.log(name.toLowerCase());  // "ajwa mujahid"
// console.log(name.length);         // 12
// console.log(name.charAt(0));      // "A"
// // console.log(name.includes(M));  // true
// console.log(name.slice(0, 4));    // "Ajwa"
// }
// {
// //     let city: string = "Lahore";
// // console.log(city.toFixed(2)); //  Error
// }
// {
//     let firstName: string = "Ajwa";
// let lastName: string = "Mujahid";
// let fullName = firstName.concat(" ", lastName);
// console.log(fullName); 
// // or modern way:
// let sentence = `My name is ${firstName} ${lastName}`;
// console.log(sentence); 
// }
