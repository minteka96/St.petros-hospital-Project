/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { addUser } from "../../../Util/api/api";

const AddUserForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addUser({ username, password });
      setUsername("");
      setPassword("");
      // Optionally, you can trigger a refresh of the user list here
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add User</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
