import React from "react";

const Admin = () => {
  return (
    <div>
      <form className="grid gap-3 p-14 w-96">
        <input
          className="border-2 border-black border-solid"
          type="text"
          placeholder="add title"
        />
        <input
          className="border-2 border-black border-solid"
          type="text"
          placeholder="description"
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default Admin;
