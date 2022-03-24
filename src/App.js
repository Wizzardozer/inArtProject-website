import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./pages/todo/Todo";
import React, { useEffect } from "react";
import { useState } from "react";
import { db, auth } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Changelog from "./pages/changelog/Changelog";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

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
  const [completedTodos, setCompletedTodos] = useState([]);
  const completedTodosRef = collection(db, "completedTodo");
  const [user, setUser] = useState({});
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const getTodos = async () => {
      const data = await getDocs(todosCollectionRef);
      setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getTodos();
  }, [todosCollectionRef]);

  useEffect(() => {
    const getCompletedTodos = async () => {
      const data = await getDocs(completedTodosRef);
      setCompletedTodos(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getCompletedTodos();
  }, [completedTodosRef]);

  return (
    <ErrorBoundary>
      <Router>
        <Navbar
          user={user}
          login={login}
          logout={logout}
          setLoginEmail={setLoginEmail}
          setLoginPassword={setLoginPassword}
        />
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
                user={user}
                todosCollectionRef={todosCollectionRef}
                todos={todos}
                completedTodos={completedTodos}
                completedTodosRef={completedTodosRef}
              />
            }
          />
          <Route exact path="/changelog" element={<Changelog />}></Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
