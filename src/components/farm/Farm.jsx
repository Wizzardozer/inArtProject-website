import "./farm.css";
import { FaPlus } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { db } from "../../firebase-config";
import { addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const Farm = ({ todos, todosCollectionRef }) => {
  const [newName, setNewName] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newIsComplete, setNewIsComplete] = useState(false);
  const [newLevel] = useState("farm");
  const [addTodo, setAddTodo] = useState(false);
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
    <div className="farm-container">
      <div className="farm-Title">
        <h1>Farm</h1>
      </div>
      <div className="farm-todos">
        <div className="farm-create-todo">
          {!addTodo ? (
            <FaPlus className="add-task" onClick={() => setAddTodo(!addTodo)} />
          ) : (
            <FaMinus className="no-task" onClick={() => setAddTodo(!addTodo)} />
          )}
          {addTodo && (
            <div className="farm-add-todo">
              <label className="farm-form-item">
                <div>Name:</div>
                <input
                  className="input"
                  placeholder="Name"
                  type="text"
                  onChange={(event) => {
                    setNewName(event.target.value);
                  }}
                />
              </label>
              <label className="farm-form-item">
                <div>Content:</div>
                <textarea
                  placeholder="Content"
                  onChange={(event) => {
                    setNewContent(event.target.value);
                  }}
                />
              </label>
              Priority:
              <div className="farm-priority">
                <input
                  type="radio"
                  className="farm-priority-radio"
                  name="priority"
                  value="high"
                  onChange={(event) => {
                    setNewPriority(event.target.value);
                  }}
                />
                High
                <input
                  type="radio"
                  className="farm-priority-radio"
                  name="priority"
                  value="medium"
                  onChange={(event) => {
                    setNewPriority(event.target.value);
                  }}
                />
                Medium
                <input
                  type="radio"
                  className="farm-priority-radio"
                  name="priority"
                  value="low"
                  onChange={(event) => {
                    setNewPriority(event.target.value);
                  }}
                />
                Low
              </div>
              <button className="farm-button" onClick={createTodo}>
                Submit
              </button>
            </div>
          )}
        </div>
        {todos.map(
          (todo) =>
            todo.level === "farm" && (
              <div key={todo.id} className="farm-card">
                <div className={`farm-card-priority-${todo.priority}`}></div>
                <div className="click">
                  <FaTimes
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  />
                </div>
                <div className="farm-card-edit">
                  <FaRegEdit />
                </div>
                <div className="farm-card-details">
                  <p>{todo.content}</p>
                  <p className="farm-working-name">{todo.name}</p>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Farm;
