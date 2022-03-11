import "./festival.css";
import { FaPlus } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { db } from "../../firebase-config";
import { addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
const Festival = ({ todos, todosCollectionRef }) => {
  const [newName, setNewName] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newIsComplete, setNewIsComplete] = useState(false);
  const [newLevel] = useState("festival");
  const [addTodo, setAddTodo] = useState();
  const [newPriority, setNewPriority] = useState("low");

  const createTodo = async () => {
    await addDoc(todosCollectionRef, {
      name: newName,
      content: newContent,
      isComplete: newIsComplete,
      level: newLevel,
      priority: newPriority,
    });
    window.location.reload();
  };

  const deleteTodo = async (id) => {
    const todoDoc = doc(db, "todos", id);
    await deleteDoc(todoDoc);
    window.location.reload();
  };

  //todo finish this

  // const updateTodo = async (id, name, content) => {
  //   const todoDoc = (db, "todos", id);
  //   const newFields = { name: name };
  //   await updateDoc(userDoc,newFields);
  // };

  return (
    <div className="festival-container">
      <div className="festival-title">
        <h1>Festival</h1>
      </div>
      <div className="festival-todos">
        <div className="festival-create-todo">
          {!addTodo ? (
            <FaPlus className="add-task" onClick={() => setAddTodo(!addTodo)} />
          ) : (
            <FaMinus className="no-task" onClick={() => setAddTodo(!addTodo)} />
          )}
          {addTodo && (
            <div className="festival-add-todo">
              <label className="festival-form-item">
                <div>Name:</div>
                <input
                  placeholder="Name"
                  type="text"
                  onChange={(event) => {
                    setNewName(event.target.value);
                  }}
                />
              </label>
              <label className="festival-form-item">
                <div>content:</div>
                <textarea
                  placeholder="Content"
                  type="text"
                  onChange={(event) => {
                    setNewContent(event.target.value);
                  }}
                />
              </label>
              Priority:
              <div className="festival-priority">
                <input
                  type="radio"
                  className="festival-priority-radio"
                  name="priority"
                  value="high"
                  onChange={(event) => {
                    setNewPriority(event.target.value);
                  }}
                />
                High
                <input
                  type="radio"
                  className="festival-priority-radio"
                  name="priority"
                  value="medium"
                  onChange={(event) => {
                    setNewPriority(event.target.value);
                  }}
                />
                Medium
                <input
                  type="radio"
                  className="festival-priority-radio"
                  name="priority"
                  value="low"
                  onChange={(event) => {
                    setNewPriority(event.target.value);
                  }}
                />
                Low
              </div>
              <button className="festival-button" onClick={createTodo}>
                Submit
              </button>
            </div>
          )}
        </div>
        {todos.map(
          (todo) =>
            todo.level === "festival" && (
              <div key={todo.id} className="festival-card">
                <div
                  className={`festival-card-priority-${todo.priority}`}
                ></div>
                <div className="click">
                  <FaTimes
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  />
                </div>
                <div className="festival-card-edit">
                  <FaRegEdit />
                </div>
                <div className="festival-card-details">
                  <p>{todo.content}</p>
                </div>
                <p className="festival-working-name">{todo.name}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Festival;
