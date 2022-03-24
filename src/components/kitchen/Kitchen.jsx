import "./kitchen.css";
import { FaPlus } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaMinus, FaCheck } from "react-icons/fa";
import { db } from "../../firebase-config";
import { addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const Kitchen = ({ todos, todosCollectionRef, completedTodosRef, user }) => {
  const [newName, setNewName] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newIsComplete] = useState(false);
  const [newLevel] = useState("kitchen");
  const [addTodo, setAddTodo] = useState();
  const [newPriority, setNewPriority] = useState("");
  const [isEdit] = new useState(false);

  const createTodo = async () => {
    if (newPriority) {
      await addDoc(todosCollectionRef, {
        name: newName,
        content: newContent,
        isComplete: newIsComplete,
        level: newLevel,
        priority: newPriority,
        isEdit: isEdit,
      });
      window.location.reload();
    } else alert("Select a Priority");
  };

  const updateTodo = async (id, name, content, priority) => {
    console.log(priority);
    const todoDoc = doc(db, "todos", id);
    const newFields = {
      name: newName ? newName : name,
      content: newContent ? newContent : content,
      priority: newPriority ? newPriority : priority,
    };
    await updateDoc(todoDoc, newFields);
    window.location.reload();
  };

  const deleteTodo = async (id) => {
    const todoDoc = doc(db, "todos", id);
    await deleteDoc(todoDoc);
    window.location.reload();
  };

  const allowEdit = async (id, edit) => {
    const todoDoc = doc(db, "todos", id);
    const newFields = { isEdit: !edit };
    await updateDoc(todoDoc, newFields);
    window.location.reload();
  };

  const completeTodo = async (todo) => {
    const d = new Date();
    const mm = String(d.getMonth() + 1);
    const dd = String(d.getDate());
    const yyyy = String(d.getFullYear());
    const date = `${mm}/${dd}/${yyyy}`;

    console.log(completedTodosRef);
    await addDoc(completedTodosRef, {
      name: todo.name,
      level: todo.level,
      content: todo.content,
      date: date,
    });

    deleteTodo(todo.id);
  };

  return (
    <div className="kitchen-container">
      <div className="kitchen-title">
        <h1>Kitchen</h1>
      </div>
      <div className="kitchen-todos">
        {user && (
          <div className="kitchen-create-todo">
            {!addTodo ? (
              <FaPlus
                className="add-task"
                onClick={() => setAddTodo(!addTodo)}
              />
            ) : (
              // <FaPlus className="add-task" onClick={() => setAddTodo(!addTodo)} />
              <FaMinus
                className="no-task"
                onClick={() => setAddTodo(!addTodo)}
              />
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
        )}
        {todos.map(
          (todo) =>
            todo.level === "kitchen" && (
              <div key={todo.id} className="kitchen-card">
                <div className={`kitchen-card-priority-${todo.priority}`}></div>
                {user && (
                  <div className="click">
                    <FaTimes
                      onClick={() => {
                        deleteTodo(todo.id);
                      }}
                    />
                  </div>
                )}
                {user && (
                  <div className="farm-card-check">
                    <FaCheck
                      onClick={() => {
                        completeTodo(todo);
                      }}
                    />
                  </div>
                )}
                {user && (
                  <div className="kitchen-card-edit">
                    <FaRegEdit
                      onClick={() => {
                        allowEdit(todo.id, todo.isEdit);
                      }}
                    />
                  </div>
                )}
                {todo.isEdit ? (
                  <div className="farm-add-todo">
                    <label className="farm-form-item">
                      <div>Name:</div>
                      <input
                        className="input"
                        placeholder="Name"
                        type="text"
                        defaultValue={todo.name}
                        onChange={(event) => {
                          setNewName(event.target.value);
                        }}
                      />
                    </label>
                    <label className="farm-form-item">
                      <div>Content:</div>
                      <textarea
                        defaultValue={todo.content}
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
                        defaultChecked={todo.priority === "high" && "checked"}
                        Value="high"
                        onChange={(event) => {
                          setNewPriority(event.target.value);
                        }}
                      />
                      High
                      <input
                        type="radio"
                        className="farm-priority-radio"
                        name="priority"
                        defaultChecked={todo.priority === "medium" && "checked"}
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
                        defaultChecked={todo.priority === "low" && "checked"}
                        value="low"
                        onChange={(event) => {
                          setNewPriority(event.target.value);
                        }}
                      />
                      Low
                    </div>
                    <button
                      className="farm-button"
                      onClick={() => {
                        updateTodo(
                          todo.id,
                          todo.name,
                          todo.content,
                          todo.priority
                        );
                        allowEdit(todo.id, todo.isEdit);
                      }}
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div className="farm-card-details">
                    <p>{todo.content}</p>
                    <p className="farm-working-name">{todo.name}</p>
                  </div>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Kitchen;
