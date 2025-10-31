// import React, { useReducer, useEffect } from "react";

// //  Step: Reducer function
// function dataReducer(state, action) {
//   switch (action.type) {
//     case "FETCH_START":
//       return { ...state, loading: true, error: null };
//     case "FETCH_SUCCESS":
//       return { ...state, loading: false, data: action.payload };
//     case "FETCH_ERROR":
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// }

// // Step: Initial state
// const initialState = {
//   data: null,
//   loading: false,
//   error: null,
// };

// //Step: Component
// function Users() {
//   // const [data, setData] = useState(null);
//   // const [loading, setLoading] = useState(false);
//   // const [error, setError] = useState(null);
//   const [state, dispatch] = useReducer(dataReducer, initialState);

//   useEffect(() => {
//     // Fetching data from API
//     dispatch({ type: "FETCH_START" });

//     fetch("https://randomuser.me/api/?results=5")
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch data!");
//         return res.json();
//       })
//       .then((data) => dispatch({ type: "FETCH_SUCCESS", payload: data.results }))
//       .catch((err) => dispatch({ type: "FETCH_ERROR", payload: err.message }));
//   }, []);

  
//   if (state.loading) return <p>Loading data...</p>;
//   if (state.error) return <p>Error: {state.error}</p>;

//   return (
//     <div>
//       <h2>Users:</h2>
//       <ul>
//         {state.data?.map((user) => (
//           <li key={user.login.uuid}>{user.name.first} {user.name.last}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Users;














// import React from "react";
// import ErrorBoundary from "./ErrorBoundary";
// import BuggyComponent from "./BuggyComponent";

// function App() {
//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         gap: "1rem",
//         backgroundColor: "#f3f4f6",
//       }}
//     >
//       <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#111827" }}>
//          React Functional Error Boundary Example
//       </h1>

//       <ErrorBoundary>
//         <BuggyComponent />
//       </ErrorBoundary>
//     </div>
//   );
// }

// export default App;











// import UserList from "./UserList";

// function App() {
//   return (
//     <div>
//       <h1>React Query Example</h1>
//       <UserList />
//     </div>
//   );
// }

// export default App;






// import AnimatedContent from "./components/AnimatedContent";


// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 space-y-40 p-10">
//       <h1 className="text-4xl font-bold text-center text-blue-600">
//         Scroll Down 
//       </h1>

//       <AnimatedContent>
//         <div className="bg-white p-10 rounded-2xl shadow-xl text-center text-lg">
//           First Section — I’ll fade and slide into view!
//         </div>
//       </AnimatedContent>

//       <AnimatedContent direction="horizontal" distance={150}>
//         <div className="bg-pink-200 p-10 rounded-2xl shadow-xl text-center text-lg">
//            I slide in horizontally!
//         </div>
//       </AnimatedContent>

//       <AnimatedContent reverse>
//         <div className="bg-green-200 p-10 rounded-2xl shadow-xl text-center text-lg">
//            I come from the bottom!
//         </div>
//       </AnimatedContent>
//     </div>
//   );
// }

// export default App;












// import React, {useReducer } from "react";


// function formReducer(state, action) {
//     switch (action.type) {
//         case "SET_NAME":
//         return{...state, name:action.payload};
//         case "SET_EMAIL":
//             return{...state, email:action.payload};
//             case "SUBMIT_START":
//                 return{...state, isSubmitting: true};
//                 case "SUBMIT_SUCCESS":
//                     return{...state, isSubmitting: false, name:"", email: ""};
//                     default:
//                         return state;
//     }
// }
// function Form() {
//     const initialState = {
//         name: "",
//         email: "",
//         isSubmitting: false,
//     };
//     const [state, dispatch] = useReducer(formReducer, initialState);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch({type: "SUBMIT_START"});
    
//     setTimeout(() => {
//         dispatch({ type: "SUBMIT_SUCCESS"});
//         alert("Form Submitted!");
//     });
//     };


// return(
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-4 mt-10 border border-gray-200">
//     <h2 className="text-2xl font-semibold text-gray-700 text-center">User Form</h2>
//     <div>
//       <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
//       <input value={state.name} onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })} placeholder="Enter your name" className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"/>
//     </div>
  
//     <div>
//       <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
//       <input type="email" value={state.email} onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })} placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" />
//     </div>
  
//     <button type="submit" disabled={state.isSubmitting}  className={`w-full py-2 rounded-xl text-white font-semibold transition-all ${ state.isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}>{state.isSubmitting ? "Submitting..." : "Submit"}
//  </button>
//   </form>
  
// );
// }


// export default Form;






























// import React from "react";
// import { ThemeProvider } from "./context/ThemeContext";
// import Navbar from "./components/Navbar";

// // function App(){
// //   return (
// //     <ThemeProvider>
// //       <Navbar />
// //     </ThemeProvider>
// //   );
// // }
// //  export default App;

// import { useState, useEffect } from "react";

// function useFetch(url) {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     useEffect (() => {
//         fetch(url)
//         .then((response) => response.json())
//         .then((data)=> {
//             setData(data);
//             setLoading(false);
//         });
//     }, [url]);
//     return { data, loading};
// }
// function DataComponent(){
//     const{ data, loading} = useEffect("https://jsonplaceholder.typicode.com/todos");
//     return(
//         <div>
//         {loading ? <p>Loading...</p>: <p>Data:{JSON.stringify(data)}</p> }
//         </div>
//     );
// }
//  export default DataComponent;
 



// import { useState } from "react";

// import Welcome from "./components/Welcome";
// import PropsDemo from './components/propsDemo';
// import Counter from './components/Counter';
// // import Parent from "./components/Parent";
// import EffectDemo from "./components/EffectDemo";
// import ClockApp from "./components/ClockApp";
// import StudentList from "./components/StudentList"

// // ====================== Simple Component ===========================
// function Comp() {
//   return (
//     <div>
//       <Welcomes />
//     </div>
//   );
// }
// // ====================== Component With Props ===========================
// function Apps() {
//   return (
//     <div>
//       <Welcome name="Ajwa" language="JavaScript" />
//       <Welcome name="Ayesha" language="TypeScript" />
//       <Welcome name="Ali" language="Python" />
//     </div>
//   );
// }

// // ====================== Props ===========================

// function Demo() {
//   const handleGreet = () => alert("Hello from App Component!");

//   return (
//     <div>
//       <PropsDemo
//         name="Ajwa"
//         age={21}
//         isStudent={true}
//         hobbies={["Coding", "Drawing", "Music"]}
//         info={{ city: "Faisalabad", country: "Pakistan" }}
//         greet={handleGreet}
//       >
//         <p>This is passed as children props</p>
//       </PropsDemo>
//     </div>
//   );
// }

// // ====================== State ===========================
// function Countes() {
//   return (
//     <div>
//       <h1>React State Example</h1>
//       <Counter />
//     </div>
//   );
// }


// // ====================== prop drilling ===========================

// // function PropDrilling() {
// //   const user = { name: "Ajwa", age: 21 };

// //   return (
// //     <div>
// //       <h1>Prop Drilling Example</h1>
// //       <Parent user={user} />
// //     </div>
// //   );
// // }
// // ====================== Hooks in Use  State ===========================

// function State() {
//   return (
//     <div>
//       <EffectDemo />
//     </div>
//   );
// }
// // ====================== Hooks in Use  Effect ===========================


// function Effect() {
//   return (
//     <div className="app">
//       <ClockApp />
//     </div>
//   );
// }

// // ====================== List ===========================

// // function App() {
// //   return (
// //     <div className="App">
// //       <h1>Welcome to My App</h1>
// //       <StudentList /> {}
// //     </div>
// //   );
// // }
// // function App() {
// //   const user = "Ayesha";
// //   return <Parent user={user} />;
// // }

// // function Parent({ user }) {
// //   return <Child user={user} />;
// // }

// // function Child({ user }) {
// //   return <GrandChild user={user} />;
// // }

// // function GrandChild({ user }) {
// //   return <h2>Welcome, {user}</h2>;
// // }



// // function App() {
// //   const [user, setUser] = useState("Ayesha");
// //   return <Parent user={user} />;
// // }

// // function Parent({ user }) {
// //   return <Child user={user} />;
// // }

// // function Child({ user }) {
// //   return <GrandChild user={user} />;
// // }

// // function GrandChild({ user }) {
// //   return <h2>Welcome, {user}</h2>;
// // }



// // const App = () =>{
// //   return <Parent/>
// // } 

// // const Parent = () =>{
// //   return <Child/>
// // } 
// // const Child = () =>{
// //   return <h2>ajwa</h2> 
// // } 

// // const App = () => {
// //   return <Hello />;
// // };

// // const Hello = () => {
// //   return <h2>Welcome Ajwa!</h2>;
// // };




// function App() {
//   const user = "Ajwa"; // Data yahan hai (Top Level)

//   // App → Dashboard
//   return <Dashboard user={user} />;
// }

// function Dashboard({ user }) {
//   // Dashboard → Products
//   return <Products user={user} />;
// }

// function Products({ user }) {
//   // Products → Cart
//   return <Cart user={user} />;
// }

// function Cart({ user }) {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 border-2 border-solid">
//       <h2> Shopping Cart</h2>
//       <p>Welcome, <b>{user}</b>!</p>
//       <p>Your items are ready for checkout.</p>
//     </div>
//   );
// }



// export default App;



