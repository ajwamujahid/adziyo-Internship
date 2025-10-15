"use strict";
// interface Info{
//     name:string;
//     age:number;
//     college:string;
// }
// interface Teacher extends Info{
//     subject:string;
// }
// interface maanger extends Teacher, Info{
//     salary:number;
// }
// var stdObj:Info= {
//    name: 'ajwa',
//    age: 2,
//    college: 'abc'
// }
// var techObj:Teacher= {
//     name: 'ajwa',
//     age: 2,
//     college: 'abc',
//     subject: 'urdu'
//  }
// var mangObj:maanger= {
//     name: 'ajwa',
//     age: 2,
//     college: 'abc',
//     salary:200,
//     subject:'urdu'
//  }
// classes
class Product {
    constructor(name, price, pid) {
        this.inCart = false;
        this.isOrder = false;
        this.name = name;
        this.price = price;
        this.pId = pid;
    }
    addToCart() {
        this.inCart = true;
    }
    buyProduct() {
        if (this.inCart) {
            return `Product ${this.name} is ordered for ${this.price}`;
        }
        else {
            return `product not found`;
        }
    }
}
var product = new Product("Samsung", 10000, 101);
product.addToCart();
console.log(product.buyProduct());
//  console.log(product.name);
var product2 = new Product("IPhone", 10000, 102);
//  product2.addToCart();
//  console.log(product2.buyProduct());
console.log(product2.name);
//  inheritance
// class Student{
//   login(name:string,password:string){
//     if(name && password){
//        return "Student login"
//     }else{
//       return "not login"
//     }
//   }
//   result(marks:number){
//     if(marks>33){
//       return "Pass"
//     }else{
//       return "fail"
//     }
//   }
// }
// var s1= new Student();
// console.log(s1.result(60));
// Generic
function fruits(name) {
    return name;
}
let onlyFruit = fruits("apple");
let onlyNum = fruits(100);
let onlyBool = fruits(true);
// function with array
function printArray(items) {
    items.forEach((item) => console.log(item));
}
printArray([1, 2, 3]);
printArray(["a", "b", "c"]);
// with classes
class Box {
    constructor(value) {
        this.content = value;
    }
    show() {
        console.log(`Box contains: ${this.content}`);
    }
}
const stringBox = new Box("Toys");
const numberBox = new Box(123);
stringBox.show();
numberBox.show();
function greet(person) {
    console.log(`Hello, ${person.name}`);
}
greet({ name: "Ajwa" });
// greet({ age: 25 });            
