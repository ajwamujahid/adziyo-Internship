import { useState } from "react";

import Welcome from "./components/Welcome";
import PropsDemo from './components/propsDemo';
import Counter from './components/Counter';
// import Parent from "./components/Parent";
import EffectDemo from "./components/EffectDemo";
import ClockApp from "./components/ClockApp";
import StudentList from "./components/StudentList"

// ====================== Simple Component ===========================
function Comp() {
  return (
    <div>
      <Welcomes />
    </div>
  );
}
// ====================== Component With Props ===========================
function Apps() {
  return (
    <div>
      <Welcome name="Ajwa" language="JavaScript" />
      <Welcome name="Ayesha" language="TypeScript" />
      <Welcome name="Ali" language="Python" />
    </div>
  );
}

// ====================== Props ===========================

function Demo() {
  const handleGreet = () => alert("Hello from App Component!");

  return (
    <div>
      <PropsDemo
        name="Ajwa"
        age={21}
        isStudent={true}
        hobbies={["Coding", "Drawing", "Music"]}
        info={{ city: "Faisalabad", country: "Pakistan" }}
        greet={handleGreet}
      >
        <p>This is passed as children props</p>
      </PropsDemo>
    </div>
  );
}

// ====================== State ===========================
function Countes() {
  return (
    <div>
      <h1>React State Example</h1>
      <Counter />
    </div>
  );
}


// ====================== prop drilling ===========================

// function PropDrilling() {
//   const user = { name: "Ajwa", age: 21 };

//   return (
//     <div>
//       <h1>Prop Drilling Example</h1>
//       <Parent user={user} />
//     </div>
//   );
// }
// ====================== Hooks in Use  State ===========================

function State() {
  return (
    <div>
      <EffectDemo />
    </div>
  );
}
// ====================== Hooks in Use  Effect ===========================


function Effect() {
  return (
    <div className="app">
      <ClockApp />
    </div>
  );
}

// ====================== List ===========================

// function App() {
//   return (
//     <div className="App">
//       <h1>Welcome to My App</h1>
//       <StudentList /> {}
//     </div>
//   );
// }
// function App() {
//   const user = "Ayesha";
//   return <Parent user={user} />;
// }

// function Parent({ user }) {
//   return <Child user={user} />;
// }

// function Child({ user }) {
//   return <GrandChild user={user} />;
// }

// function GrandChild({ user }) {
//   return <h2>Welcome, {user}</h2>;
// }



// function App() {
//   const [user, setUser] = useState("Ayesha");
//   return <Parent user={user} />;
// }

// function Parent({ user }) {
//   return <Child user={user} />;
// }

// function Child({ user }) {
//   return <GrandChild user={user} />;
// }

// function GrandChild({ user }) {
//   return <h2>Welcome, {user}</h2>;
// }



// const App = () =>{
//   return <Parent/>
// } 

// const Parent = () =>{
//   return <Child/>
// } 
// const Child = () =>{
//   return <h2>ajwa</h2> 
// } 

// const App = () => {
//   return <Hello />;
// };

// const Hello = () => {
//   return <h2>Welcome Ajwa!</h2>;
// };




function App() {
  const user = "Ajwa"; // Data yahan hai (Top Level)

  // App → Dashboard
  return <Dashboard user={user} />;
}

function Dashboard({ user }) {
  // Dashboard → Products
  return <Products user={user} />;
}

function Products({ user }) {
  // Products → Cart
  return <Cart user={user} />;
}

function Cart({ user }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 border-2 border-solid">
      <h2> Shopping Cart</h2>
      <p>Welcome, <b>{user}</b>!</p>
      <p>Your items are ready for checkout.</p>
    </div>
  );
}



export default App;



