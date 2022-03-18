import "./todo.css";
import Farm from "../../components/farm/Farm";
import Kitchen from "../../components/kitchen/Kitchen";
import Festival from "../../components/festival/Festival";
import CompletedTodo from "../../components/completedTodo/CompletedTodo";

const Todo = ({
  todos,
  todosCollectionRef,
  completedTodos,
  completedTodosRef,
}) => {
  return (
    <div>
      {console.log(completedTodosRef)}

      <div className="todo-container">
        <Farm
          className="farm-cards"
          todos={todos}
          todosCollectionRef={todosCollectionRef}
          completedTodosRef={completedTodosRef}
        />
        <Kitchen
          className="kitchen-cards"
          todos={todos}
          todosCollectionRef={todosCollectionRef}
          completedTodosRef={completedTodosRef}
        />
        <Festival
          className="festival-cards"
          todos={todos}
          todosCollectionRef={todosCollectionRef}
          completedTodosRef={completedTodosRef}
        />
      </div>
      <div className="completed-container">
        <CompletedTodo completedTodos={completedTodos} />
      </div>
    </div>
  );
};

export default Todo;
