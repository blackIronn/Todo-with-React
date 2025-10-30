import { useState } from "react";
import api from "../api/api";

function CreateTodo() {
  const [newTodo, setNewTodo] = useState("");

  const createTodo = async () => {
    if (!newTodo.trim()) return;
    await api.post("/todos", {
      title: newTodo,
      status: "todo",
    });
    setNewTodo("");
  };

  return (
    <div className="flex-col justify-center">
      <div className="mt-20 flex justify-center text-2xl">
        <h1>CREATE TODO</h1>
      </div>

      <div className="flex justify-center mt-20 text-black gap-5">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New Todo..."
          className="rounded-lg w-96 px-3 py-2"
        />
        <button
          onClick={createTodo}
          className="text-white bg-[#181818] px-4 py-2 rounded-lg hover:bg-gray-600 transition"
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default CreateTodo;
