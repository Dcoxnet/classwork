// // import logo from "./logo.svg";
// // import "./App.css";
// // import React from "react";
// // import { Message } from "./Message";
// import { useState } from "react";

// // function Welcome(){
// //   return <h1>Привет,мир!</h1>
// // }

// // function Greeting(props) {
// //   const [greeting, setGreeting] = React.useState("Привет, мир!");
// //   return (
// //     <div>
// //       <h1>{props.message || greeting}</h1>
// //       <button onClick={() => setGreeting("Привет, React!")}>
// //         Изменить приветсвие
// //       </button>
// //     </div>
// //   );
// // }

// // useState
// // function Counter() {
// //   const [count, setCount] = useState(0);
// //   const incrementCount = () => {
// //     setCount(count + 1);
// //   };
// //   return (
// //     <div>
// //       <p>Текущее значение: {count}</p>
// //       <button onClick={incrementCount}>Увеличить</button>
// //     </div>
// //   );
// // }
// // export default Counter;

// // function App() {
// //   console.log("App");
// //   return <p>Привет</p>;
// // }

// // export default App;
// function Mycomponent() {
//   // const [inputValue, setInputValue] = useState("");

//   // const handleInputChange = (event) => {
//   //   setInputValue(event.target.value);
//   // };
//   function TaskList() {
//     const [tasks, setTasks] = useState([]);
//     const [newTask, setNewTask] = useState("");

//     const addTask = () => {
//       if (newTask.trim()) {
//         setTasks([...tasks, { text: newTask, completed: false }]);
//         setNewTask("");
//       }
//     };
//     const toggleTask = (index) => {
//       setTasks(
//         tasks.map((task, i) =>
//           i === index ? { ...task, completed: !task.completed } : task
//         )
//       );
//     };

//     const deleteTask = (index) => {
//       setTasks(tasks.filter((_, i) => i !== index));
//     };
//   }

//   return (
//     <ul>
//       {task.map((task, index) => {
//         <li key={index}>
//           <div>
//             <input
//               type="checkbox"
//               checked={task.done}
//               onChange={() => toggleTask(index)}
//             />
//           </div>
//         </li>;
//       })}
//     </ul>
//   );
// }

// export default Mycomponent;
