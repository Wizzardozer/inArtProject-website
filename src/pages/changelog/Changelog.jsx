import "./changelog.css";

const Changelog = () => {
  return (
    <div className="testtt">
      <table>
        <tr>
          <th>Version</th>
          <th>Description</th>
          <th>Date</th>
        </tr>
        <tr>
          <td>1.01</td>
          <td>
            Todo can now be edited, and marked as complete. Changelog added to
            keep note of changes made on the website. A table of completed todo
            has been added.
          </td>
          <td>3/14/2022</td>
        </tr>
        <tr>
          <td>1.02</td>
          <td>
            Authentication added so only user that are logged in are able to
            create,edit,delete, and mark as complete in the todo.
          </td>
          <td>3/24/2022</td>
        </tr>
      </table>
    </div>
  );
};

export default Changelog;
