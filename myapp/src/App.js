// import logo from './logo.svg';
// import './App.css';

// import About from './About';
// import Page from './Page';
// import {useState} from 'react';

// function App(){
//   const[name,setname]=useState(
//     [
//       {
//         student:"vignesh",
//         grade:"A"
//       },
//       {
//         student:"harish",
//         grade:"B"
//       },
//       {
//         student:"janani",
//         grade:"C"
//       },
//       {
//         student:"suguna",
//         grade:"D"
//       },
//       {
//         student:"suganya",
//         grade:"D"
//       },
//       {
//         student:"vidhya",
//         grade:"D"
//       },
//     ]
//   )
//   return (
//     <div className="container">
//       <div className="row">
//         {name.map(
//           (student )=>
//           {return <About data={student } /> })}
//       </div>
//     </div>  
//   );
// }


// export default App;


// import React, { useEffect, useState } from "react"

// const UsingFetch = () => {
//   const [users, setUsers] = useState([])

//   const fetchData = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         setUsers(data)
//       })
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//   return (
//     <div>
//       {users.length > 0 && (
//         <ul>
//           {users.map(user => (
//             <li key={user.id}>{user.name}
//             <p>Age: {25} years</p> {/* Mocking age as 25 */}
//               <p>Phone: {user.phone}</p>
//               <p>City: {user.address.city}</p>
//               <p>State: {user.address.state || "N/A"}</p> {/* State may not exist */}
//               <p>Zip Code: {user.address.zipcode}</p>
//               </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// export default UsingFetch

// import React, { useEffect, useState } from "react";

// const UsingFetch = () => {
//   const [users, setUsers] = useState([]);

//   const fetchData = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(data => {
//         setUsers(data);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {users.length > 0 && (
//         <ul>
//           {users.map(user => (
//             <li key={user.id}>
//               <h3>{user.name}</h3>
//               <p>Age: {25} years</p> {/* Mocking age as 25 */}
//               <p>Phone: {user.phone}</p>
//               <p>City: {user.address.city}</p>
//               <p>State: {user.address.state || "N/A"}</p> {/* State may not exist */}
//               <p>Zip Code: {user.address.zipcode}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default UsingFetch

