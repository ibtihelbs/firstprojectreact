import React from "react";

const Admin = () => {
  return (
    <div>
      <form className="grid gap-3">
        <input
          className="border-1 border-black border-solid"
          type="text"
          placeholder="add title"
        />
        <input
          className="border-1 border-black border-solid"
          type="text"
          placeholder="description"
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default Admin;
