import { useQuery } from "@tanstack/react-query";

function RandomUsers() {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ["randomUsers"],
    queryFn: async () => {
      const res = await fetch("https://randomuser.me/api/?results=5");
      if (!res.ok) throw new Error("Failed to fetch users");
      return res.json();
    },
  });

  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p style={{ color: "red" }}>{error.message}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Random Users</h2>
      <button onClick={() => refetch()}>
        {isFetching ? "Refreshing..." : "Refresh"}
      </button>
      <ul>
        {data.results.map((user) => (
          <li key={user.login.uuid}>
            <img
              src={user.picture.thumbnail}
              alt={user.name.first}
              style={{ borderRadius: "50%", marginRight: 8 }}
            />
            <strong>{user.name.first} {user.name.last}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RandomUsers;



















// import { useState, useEffect } from "react";
// import axios from "axios";

// function UserList() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

 
//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//       setUsers(response.data);
//     } catch (err) {
//       setError("Failed to fetch users 😢");
//     } finally {
//       setLoading(false); 
//     }
//   };

  
//   useEffect(() => {
//     fetchUsers();
//   }, []);


//   if (loading) return <p>Loading users...</p>;
//   if (error) return <p style={{ color: "red" }}>{error}</p>;

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>User List (Axios + async/await)</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             <strong>{user.name}</strong> — {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default UserList;







// import { useState, useEffect } from "react";
// import axios from "axios";

// function UserList() {
//   const [users, setUsers] = useState([]); 
//   const [loading, setLoading] = useState(true); 
//   const [error, setError] = useState(null);

//   useEffect(() => {
    
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         setUsers(response.data); 
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError("Failed to fetch users");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading users...</p>;
//   if (error) return <p style={{ color: "red" }}>{error}</p>;

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>User List</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             <strong>{user.name}</strong> — {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default UserList;
