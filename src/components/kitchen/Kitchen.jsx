import "./kitchen.css";
import { FaPlus } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { db } from "../../firebase-config";
import { addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const Kitchen = ({ todos, todosCollectionRef }) => {
  const [newName, setNewName] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newIsComplete, setNewIsComplete] = useState(false);
  const [newLevel] = useState("kitchen");
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

  return (
    <div className="kitchen-container">
      <div className="kitchen-title">
        <h1>Kitchen</h1>
      </div>
      <div className="kitchen-todos">
        <div className="kitchen-create-todo">
          {!addTodo ? (
            <FaPlus className="add-task" onClick={() => setAddTodo(!addTodo)} />
          ) : (
            // <FaPlus className="add-task" onClick={() => setAddTodo(!addTodo)} />
            <FaMinus className="no-task" onClick={() => setAddTodo(!addTodo)} />
          )}
          {addTodo && (
            <div className="kitchen-add-todo">
              <label className="kitchen-form-item">
                <div>Name:</div>
                <input
                  placeholder="Name"
                  type="text"
                  onChange={(event) => {
                    setNewName(event.target.value);
                  }}
                />
              </label>
              <label className="kitchen-form-item">
                <div>Content:</div>
                <textarea
                  placeholder="Content"
                  type="text"
                  onChange={(event) => {
                    setNewContent(event.target.value);
                  }}
                />
              </label>
              Priority:
              <div className="kitchen-priority">
                <input
                  type="radio"
                  className="kitchen-priority-radio"
                  name="priority"
                  value="high"
                  onChange={(event) => {
                    setNewPriority(event.target.value);
                  }}
                />
                High
                <input
                  type="radio"
                  className="kitchen-priority-radio"
                  name="priority"
                  value="medium"
                  onChange={(event) => {
                    setNewPriority(event.target.value);
                  }}
                />
                Medium
                <input
                  type="radio"
                  className="kitchen-priority-radio"
                  name="priority"
                  value="low"
                  onChange={(event) => {
                    setNewPriority(event.target.value);
                  }}
                />
                Low
              </div>
              <button className="kitchen-button" onClick={createTodo}>
                Submit
              </button>
            </div>
          )}
        </div>
        {todos.map(
          (todo) =>
            todo.level === "kitchen" && (
              <div key={todo.id} className="kitchen-card">
                <div className={`kitchen-card-priority-${todo.priority}`}></div>
                <div className="click">
                  <FaTimes
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  />
                </div>
                <div className="kitchen-card-edit">
                  <FaRegEdit />
                </div>
                <div className="kitchen-card-details">
                  <p>{todo.content}</p>
                </div>
                <p className="kitchen-working-name">{todo.name}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Kitchen;
