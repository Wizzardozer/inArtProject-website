import React from "react";
import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();

    if (!content) {
      alert("Please add a task");
      return;
    }

    onAdd({ content, price, color });

    setContent("");
    setPrice("");
    setColor(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Price</label>
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Set color</label>
        <input
          type="checkbox"
          onChange={(e) => setColor(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
