import "./todo.css";
import Farm from "../../components/farm/Farm";
// import AddTask from "../../components/addtask/AddTask";
import Kitchen from "../../components/kitchen/Kitchen";
import Festival from "../../components/festival/Festival";
// import kitchen from "../../components/kitchen/kitchen";
// import { useState } from "react";

const Todo = ({ todos, todosCollectionRef }) => {
  return (
    <div>
      <div className="todo-container">
        <Farm
          className="farm-cards"
          todos={todos}
          todosCollectionRef={todosCollectionRef}
        />
        <Kitchen
          className="kitchen-cards"
          todos={todos}
          todosCollectionRef={todosCollectionRef}
        />
        <Festival
          className="festival-cards"
          todos={todos}
          todosCollectionRef={todosCollectionRef}
        />
      </div>
      <div className="completed-container">
        {/* <div>completed stuff</div> */}
      </div>
    </div>
  );
};

export default Todo;
