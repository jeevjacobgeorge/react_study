import React, { useEffect, useState } from 'react';
import './App.css'
import { Link } from 'react-router-dom'


function App() {
  const[userData, setUserData] = useState({
    name:"Jeev Jacob George",
    age:20,
    prefix:"",
  });

  useEffect(()=>{
  
   if (userData.age > 40)
   {
      setUserData({...userData,prefix:"Mr. "})

   } 
   else{
    setUserData({...userData,prefix:""})
   }
  },[userData.age])
  

  return (
    <>
      <div className="header">
        <div className="logo"><Link to="about" className="options">About me</Link></div>
        <div className="logo"><Link to="/" className="options">Register</Link></div>
        <div className="logo"><Link to="quit" className="options">Quit</Link></div>
      </div>
      <div className = "body">
      <input onChange={(e)=>setUserData({...userData, name:e.target.value})} placeholder = 'Enter Name' type="text" />
        <input onChange={(e)=>setUserData({...userData, age:e.target.value})} placeholder='Enter age' type="text" />
        <button onClick={()=>setUserData({...userData,submit:true})}>Submit</button>
      </div>
      <div className="card">
        <h2>Name:{userData.prefix}{userData.name}</h2>
        <h2>Age:{userData.age}</h2>
      </div>
    </>
  )
}
export default App
































// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>I love React {count} times </h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is shown above
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
