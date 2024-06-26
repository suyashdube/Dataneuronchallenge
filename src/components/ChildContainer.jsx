// ChildContainer.jsx

import React, { useState } from "react";
import axios from "axios";

const ChildContainer = ({ name, number }) => {
  const [data, setData] = useState({ name: "", age: "" });

  const handleAddData = async () => {
    try {
      await axios.post("/api/add", data);
      // Clear input fields after successful addition
      setData({ name: "", age: "" });
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const handleUpdateData = async (id) => {
    try {
      await axios.put(`/api/update/${id}`, data);
      // Clear input fields after successful update
      setData({ name: "", age: "" });
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className={`child ${name}`}>
      <h1>Box {number}</h1>
      <input
        type="text"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="number"
        value={data.age}
        onChange={(e) => setData({ ...data, age: e.target.value })}
        placeholder="Age"
      />
      <button onClick={handleAddData}>Add Data</button>
      <button onClick={() => handleUpdateData(id)}>Update Data</button>
      <h2>Hello React</h2>
      <p>React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.</p>
    </div>
  );
};

export default ChildContainer;



