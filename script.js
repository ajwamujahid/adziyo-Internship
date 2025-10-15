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
var Product = /** @class */ (function () {
    function Product(name, price, pid) {
        this.inCart = false;
        this.isOrder = false;
        this.name = name;
        this.price = price;
        this.pId = pid;
    }
    Product.prototype.addToCart = function () {
        this.inCart = true;
    };
    Product.prototype.buyProduct = function () {
        if (this.inCart) {
            return "Product ".concat(this.name, " is ordered for ").concat(this.price);
        }
        else {
            return "product not found";
        }
    };
    return Product;
}());
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
var onlyFruit = fruits("apple");
var onlyNum = fruits(100);
var onlyBool = fruits(true);
// function with array
function printArray(items) {
    items.forEach(function (item) { return console.log(item); });
}
printArray([1, 2, 3]);
printArray(["a", "b", "c"]);
// with classes
var Box = /** @class */ (function () {
    function Box(value) {
        this.content = value;
    }
    Box.prototype.show = function () {
        console.log("Box contains: ".concat(this.content));
    };
    return Box;
}());
var stringBox = new Box("Toys");
var numberBox = new Box(123);
stringBox.show();
numberBox.show();
function greet(person) {
    console.log("Hello, ".concat(person.name));
}
greet({ name: "Ajwa" });
// greet({ age: 25 });            
