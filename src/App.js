import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./pages/todo/Todo";
import React, { useEffect } from "react";
import { useState } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong</h1>;
    }

    return this.props.children;
  }
}

function App() {
  const [todos, setTodos] = useState([]);
  const todosCollectionRef = collection(db, "todos");

  useEffect(() => {
    const getTodos = async () => {
      const data = await getDocs(todosCollectionRef);
      setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getTodos();
  }, []);

  // const [showAddTask, setShowAddTask] = useState(false);
  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     content: "Buy milk",
  //     price: "$20",
  //     color: false,
  //   },
  //   {
  //     id: 2,
  //     content: "Buy sugar",
  //     price: 10,
  //     color: true,
  //   },
  // ]);

  // //Add Task
  // const addTask = (task) => {
  //   const id = Math.floor(Math.random() * 1000) + 1;
  //   const newTask = { id, ...task };
  //   setTasks([...tasks, newTask]);
  // };

  // //delete task
  // const deleteTask = (id) => {
  //   setTasks(tasks.filter((task) => task.id !== id));
  // };

  // //toggle reminder
  // const toggleReminder = (id) => {
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === id ? { ...task, color: !task.color } : task
  //     )
  //   );
  // };

  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/todo"
            element={
              <Todo
                // tasks={tasks}
                // onDelete={deleteTask}
                // toggleReminder={toggleReminder}
                // onAdd={addTask}
                // showAddTask={showAddTask}
                todosCollectionRef={todosCollectionRef}
                todos={todos}
              />
            }
          />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
