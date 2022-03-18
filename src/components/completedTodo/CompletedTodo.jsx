import "./completedTodo.css";

const CompletedTodo = ({ completedTodos }) => {
  return (
    <table className="todo-tabe">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Level</th>
          <th>Content</th>
          <th>Date</th>
        </tr>
        {completedTodos.map((todo) => (
          <tr key={todo.id}>
            <td className="table-name">{todo.name}</td>
            <td className="table-level">{todo.level}</td>
            <td className="table-content">{todo.content}</td>
            <td className="table-date">{todo.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CompletedTodo;
