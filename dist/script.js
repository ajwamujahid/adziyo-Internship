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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
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
exports.Product = Product;
//  var product = new Product("Samsung", 10000, 101);
// //  product.addToCart();
// //  console.log(product.buyProduct());
// console.log(product.name);
//  var product2 = new Product("IPhone", 10000, 102);
// //  product2.addToCart();
// //  console.log(product2.buyProduct());
//  console.log(product2.name);
