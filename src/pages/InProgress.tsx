import { useEffect, useState } from "react";
import api from "../api/api";
import Modal from "./Modal";

import type { Todo } from "../types";

function InProgress() {
  const [isModal, setIsModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo>();
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const res = await api.get("/todos");
    setTodos(res.data);
  };

  const getTodoById = async (id: string) => {
    const res = await api.get(`/todos/${id}`);
    setSelectedTodo(res.data);
    return res.data;
  };

  const Update = async (id: string) => {
    await getTodoById(id);
    setIsModal(true);
  };

  const updateTodo = async (id: string, data: Partial<Todo>) => {
    await api.patch(`/todos/${id}`, data);
    await getTodos();
    setIsModal(false);
  };

  const Remove = async (id: string) => {
    await api.delete(`/todos/${id}`);
    getTodos();
  };

  return (
    <div className="p-8 text-center">
      {todos
        .filter((item) => item.status === "inProgress")
        .map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-[#181818] text-white rounded-lg p-4 mb-4 w-4/5 mx-auto"
          >
            <p className="text-xl">{item.title}</p>
            <div className="flex gap-3">
              <button
                onClick={() => Update(item.id)}
                className="bg-green-700 hover:bg-green-800 px-4 py-2 rounded-md"
              >
                Update
              </button>
              <button
                onClick={() => Remove(item.id)}
                className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded-md"
              >
                Remove
              </button>
            </div>
          </div>
        ))}

      {isModal && selectedTodo && (
        <Modal
          todo={selectedTodo}
          onClose={() => setIsModal(false)}
          update={updateTodo}
        />
      )}
    </div>
  );
}

export default InProgress;
