// Step 1: Select elements

const message = document.querySelector('#message');
const button = document.querySelector('#changeBtn');

// Step 2: Handle click using onclick property
button.onclick = function () {
  if (message.innerHTML === 'Hello! I am learning JavaScript DOM') {
    message.innerHTML = 'You clicked the button!';
    message.style.color = 'white';
    message.style.backgroundColor = 'teal';
    message.style.padding = '10px';
    message.style.borderRadius = '8px';
  } else {
    message.innerHTML = 'Hello! I am Ajwa';
    message.style.color = 'black';
    message.style.backgroundColor = 'transparent';
  }
};




let modeBtn = document.querySelector("#mode");
let currMode = "light";
modeBtn.addEventListener("click", () => {
  // console.log("you are trying to chnage the mode.")
  if(currMode === "light")
  {
    currMode = "Dark";
    document.querySelector("body").style.backgroundColor = "black";
  } else{
    currMode = "light";
    document.querySelector("body").style.backgroundColor = "white";
  }
 
});
 console.log(currMode);

// Forms and Validation
const form = document.querySelector('#userForm');
const nameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const errorMesg = document.querySelector('#error');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
    errorMesg.innerHTML = "Please fill the all input fields !";
  } else if (!emailInput.value.includes('@')) {
     errorMesg.innerHTML = "invalid email !";
  } else {
       errorMesg.innerHTML = "Form Subbmittted Successfully !";
        errorMesg.style.color = 'green';
  }
});

// Local Storage

const input = document.querySelector("#nameInput");
    const saveBtn = document.querySelector("#saveBtn");
    const showBtn = document.querySelector("#showBtn");
    const clearBtn = document.querySelector("#clearBtn");
    const msg = document.querySelector("#message");

    // Save data
    saveBtn.addEventListener("click", () => {
      const name = input.value.trim();

      if (name === "") {
        msg.innerHTML = "Please enter your name!";
        msg.style.color = "red";
        return;
      }

      localStorage.setItem("username", name);
      msg.innerHTML = `Name saved: ${name}`;
      msg.style.color = "green";
    });

    // Show data
    showBtn.addEventListener("click", () => {
      const savedName = localStorage.getItem("username");

      if (savedName) {
        msg.innerHTML = `Saved name is: ${savedName}`;
        msg.style.color = "blue";
      } else {
        msg.innerHTML = "No name found in LocalStorage!";
        msg.style.color = "red";
      }
    });

    // Clear data
    clearBtn.addEventListener("click", () => {
      localStorage.removeItem("username");
      msg.innerHTML = "Name removed from LocalStorage!";
      msg.style.color = "gray";
    });



  // document.body.childNodes[1].innerText= "ajwa";

  let newbtn = document.createElement("button");
  newbtn.innerText = "click me!"
   let p = document.querySelector("p");
   p.before(newbtn);


  // //  append child 
  // let container = document.getElementById('container');
  // let newpara = document.createElement('p');
  // newpara.textContent = "Hello I was added using appendChild();"
  // container.appendChild(newpara);

  // Person.prototype.sayHello = function() {
  //   console.log(`Hello, my name is ${this.name}`);
  // }
  
  // const p1 = new Person("Ali");
  // p1.sayHello(); // Hello, my name is Ali
  

//   function Person(name) {
//     this.name = name;
//   }
  
//   console.log(Person.prototype);
  

//   Person.prototype.sayHello = function() {
//   console.log(`Hello, my name is ${this.name}`);
// }

// const p1 = new Person("Ali");
// p1.sayHello(); // Hello, my name is Ali
// const personPrototype = {
//   greet() {
//     console.log(`hello, my name is ${this.name}!`);
//   },
// };

// function Person(name) {
//   this.name = name;
// }

// Object.assign(Person.prototype, personPrototype);
// or
// Person.prototype.greet = personPrototype.greet;


// function Person() {}
// console.dir(Person)



// btoa() — Encode karna (binary to ASCII)
let text = "Hello Ajwa";
let encoded = btoa(text);
console.log(encoded);

// atob() — Encode karna (ASCII to binary)
let texted = "SGVsbG8gQWp3YQ==";
let decoded = atob(texted);
console.log(decoded);


class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    console.log("Getter called!");
    return this._name;
  }

  set name(newName) {
    console.log("Setter called!");
    this._name = newName;
  }
}

const p1 = new Person("Ajwa");
console.log(p1.name); // ← yahaan () nahi lagaye, phir bhi getter call hua
p1.name = "Hina";     // ← yahaan bhi setter call hua, bina function likhe




// without  static method 

// class Student{
//   sayHi() {
//     console.log("Hello Student!");
//   }
// }
// const s1 = new Student();
// s1.sayHi();

//With Static Mehthod
class Students{
  static sayHi() {
    console.log("hello Students!")
  }
}
Students.sayHi();



// static method 
class Student {
  constructor(name, stdname) {
    this.name = name;
    this.std = stdname;
  }

  sayHi() {
    console.log(`all the students are study in ${this.name}`);
  }

  static schoolinfo(stdobj){
    console.log(`hello, i am ${stdobj.Student}`)
  }

}

const s1 = new Student('example','ajwa' );

s1.sayHi();


Student.schoolinfo(s1);




// class ke andar koi static property bana


// class Stud {
//   static schoolName = "city school";

//   static schoolinfo() {
//     console.log(`welcome to the ${this.schoolName}`);

//   }
// }
// Stud.schoolinfo();



// getter and setter 
