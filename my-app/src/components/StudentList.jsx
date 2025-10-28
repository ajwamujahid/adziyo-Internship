function StudentList() {
    const students = ["Ayesha", "Ali", "Zara", "Ahmed", "Sara"];
  
    return (
      <div>
        <h2>Students List</h2>
        
          {students.map((student, index) => (
            <li>{student}</li>
          ))}
        
      </div>
    );
  }
  
  export default StudentList;
  
// function StudentList() {
//     const students = [
//       { id: 1, name: "Ayesha" },
//       { id: 2, name: "Ali" },
//       { id: 3, name: "Zara" },
//       { id: 4, name: "Ahmed" },
//       { id: 5, name: "Sara" },
//     ];
  
//     return (
//       <div>
//         <h2>Students List (with unique id key)</h2>
//         <ol>
//           {students.map((student) => (
//             <li key={student.id}>{student.name}</li> 
//           ))}
//         </ol>
//       </div>
//     );
//   }
  
//   export default StudentList;
  