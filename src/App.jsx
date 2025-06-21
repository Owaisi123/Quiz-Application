// import React, { useEffect, useState } from "react";

// const App = () => {
//   const getseconds = () =>
//     new Date().toLocalesecondsString("en-US", {
//       hour: "numeric",
//       minute: "numeric",
//       second: "numeric",
//       hour12: true,
//     });

//   const [seconds, setseconds] = useState(getseconds());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setseconds(getseconds());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <div className="flex justify-center items-center flex-col">
//         <h1 className="text-4xl text-red-400 mt-16">Watch</h1>
//         <div className="flex justify-around items-center mt-6 border-2 border-r-amber-600 border-l-blue-600 border-b-green-600 border-t-yellow-600 shadow-2xl shadow-amber-200 px-16 py-3">
//           <h3 className="text-3xl font-mono">{seconds}</h3>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [seconds, setSeconds] = useState(0);
//   const [timer, setTimer] = useState(null);

//   const start = () => {
//     if (!timer) {
//       const interval = setInterval(() => {
//         setSeconds(prev => prev + 1);
//       }, 1000);
//       setTimer(interval);
//     }
//   };

//   const stop = () => {
//     clearInterval(timer);
//     setTimer(null);
//   };

//   const reset = () => {
//     clearInterval(timer);
//     setTimer(null);
//     setSeconds(0);
//   };

//   const formatTime = (totalSeconds) => {
//     const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
//     const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
//     const secs = String(totalSeconds % 60).padStart(2, "0");
//     return `${hrs}:${mins}:${secs}`;
//   };

//   return (
//     <div className="flex justify-center items-center flex-col mt-20 font-mono">
//       <h1 className="text-4xl text-purple-500 mb-6">Stopwatch</h1>
//       <div className="text-5xl mb-8 text-blue-600 font-bold">
//         {formatTime(seconds)}
//       </div>
//       <div className="flex gap-4">
//         <button
//           onClick={start}
//           className="bg-green-500 text-white px-4 py-2 rounded"
//         >
//           Start
//         </button>
//         <button
//           onClick={stop}
//           className="bg-red-500 text-white px-4 py-2 rounded"
//         >
//           Stop
//         </button>
//         <button
//           onClick={reset}
//           className="bg-yellow-500 text-white px-4 py-2 rounded"
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;





// import React, { useState } from "react";

// const App = () => {
//   const [sum, setSum] = useState("");

//   // Handle number and operator button clicks
//   const btnClick = (value) => {
//     setSum(sum + value);
//   };

//   // Handle '=' button click
//   const calculateResult = () => {
//     try {
//       setSum(eval(sum).toString());
//     } catch (error) {
//       setSum("Error" , error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center flex-col min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">Calculator</h1>

//       <input
//         type="text"
//         value={sum}
//         onChange={(e) => setSum(e.target.value)}
//         className="w-60 h-12 border-2 border-black text-right px-2 text-lg"
//         readOnly
//       />

//       <div className="h-96 w-60 bg-gray-200 mt-4 rounded p-2">
//         <div className="flex justify-around mb-2">
//           <button onClick={() => setSum("")}>AC</button>
//           <button onClick={() => btnClick("%")}>%</button>
//           <button onClick={() => btnClick("/")}>/</button>
//           <button onClick={() => btnClick("*")}>X</button>
//         </div>

//         <div className="flex justify-around mb-2">
//           <button onClick={() => btnClick("7")}>7</button>
//           <button onClick={() => btnClick("8")}>8</button>
//           <button onClick={() => btnClick("9")}>9</button>
//           <button onClick={() => btnClick("-")}>-</button>
//         </div>

//         <div className="flex justify-around mb-2">
//           <button onClick={() => btnClick("4")}>4</button>
//           <button onClick={() => btnClick("5")}>5</button>
//           <button onClick={() => btnClick("6")}>6</button>
//           <button onClick={() => btnClick("+")}>+</button>
//         </div>

//         <div className="flex justify-around mb-2">
//           <button onClick={() => btnClick("1")}>1</button>
//           <button onClick={() => btnClick("2")}>2</button>
//           <button onClick={() => btnClick("3")}>3</button>
//           <button onClick={calculateResult}>=</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;





import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup/Signup'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import Quiz from './Pages/Quiz/Quiz'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>} />
    <Route path='/quiz' element={<Quiz/>} />
  </Routes>
  </>
  )
}

export default App