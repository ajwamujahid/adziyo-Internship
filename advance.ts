// partial

interface User {
    id: number;
    name: string;
    email: string;
  }
  
  type PartialUser = Partial<User>;
  
  const u: PartialUser = { name: "Ali" }; 
  
//   Pick

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
  }
  type PublicUser = Pick<User, "id" | "name" | "email">;
  
//   Readonly

interface Point { x: number; y: number; }
const p: Readonly<Point> = { x: 0, y: 0 };

// p.x = 1; // Error: cannot assign to 'x' because it is a read-only property.

// Record
type Roles = "admin" | "editor" | "viewer";

// har role ke liye permission level (number)
const rolePriority: Record<Roles, number> = {
  admin: 3,
  editor: 2,
  viewer: 1,
};

type PartialReadonlyUser = Readonly<Partial<User>>;



// ENUMS
enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
  }
  
  function login(role: Role) {
    if (role === Role.Admin) {
      console.log("Welcome Admin!");
    } else {
      console.log("Welcome User!");
    }
  }
  
  login(Role.Admin); //  sahi
//   login("ADMN");     // compiler kahega yeh galat hai
  


// Type narrowing (typeof, instanceof, type guards)

function print(id: string | number){
    console.log(id);
}

// We Using Type Narrowing

function printId(id: string | number) {
    if(typeof id === "string"){
        console.log(id.toUpperCase());
    } else{
        console.log(id.toFixed(2));
    }
    
}
// printId(55);




class Dog { 
    bark() { 
      console.log("Woof!"); 
    } 
  }
  
  class Cat { 
    meow() { 
      console.log("Meow!"); 
    } 
  }
  
  function speak(pet: Dog | Cat) {
    if (pet instanceof Dog) {
      pet.bark(); 
    } else {
      pet.meow(); 
    }
  }
  const myDog = new Dog();
  const myCat = new Cat();

  speak(myDog);
  speak(myCat);


//   const myDog = new Dog();
// console.log(myDog instanceof Dog);
// console.log(myDog instanceof Object); 


// // custom type guard 
// type Fish = { swim: () => void };
// type Bird = { fly: () => void };

// function isFish(animal: Fish | Bird): animal is Fish {
//   return (animal as Fish).swim !== undefined;
// }



// api 

interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }
  
  async function getTodo(): Promise<Todo> {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/2");
    const data: Todo = await res.json();
    return data;
  }
  
  getTodo().then(todo => {
    console.log("Title:", todo.title);
    console.log("Title:", todo.id);
    console.log("Completed:", todo.completed ? "Yes" : "No");
  });
  