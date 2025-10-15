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
   name: string;
   price: number;
   pId: number;
   inCart = false;
   isOrder = false;
 
   constructor(name: string, price: number, pid: number) {
     this.name = name;
     this.price = price;
     this.pId = pid;
   }
 
   addToCart(): void {
     this.inCart = true;
   }
 
   buyProduct(): string {
     if (this.inCart) {
      return `Product ${this.name} is ordered for ${this.price}`;

     } else {
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
function fruits<T>(name:T):T{
       return name
}

let onlyFruit=fruits("apple")
let onlyNum=fruits(100)
let onlyBool=fruits(true) 


// function with array
function printArray<T>(items: T[]): void {
  items.forEach((item) => console.log(item));
}

printArray<number>([1, 2, 3]);      
printArray<string>(["a", "b", "c"]);


// with classes
class Box<T> {
  content: T;

  constructor(value: T) {
    this.content = value;
  }

  show() {
    console.log(`Box contains: ${this.content}`);
  }
}

const stringBox = new Box<string>("Toys");
const numberBox = new Box<number>(123);

stringBox.show(); 
numberBox.show(); 


// with etend function
interface Person {
  name: string;
}

function greet<T extends Person>(person: T) {
  console.log(`Hello, ${person.name}`);
}

greet({ name: "Ajwa" });          
// greet({ age: 25 });            
