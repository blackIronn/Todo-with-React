import { useEffect, useState } from "react";
import api from "../api/api";
import Modal from "../pages/Modal";
import type { Todo } from "../types";

interface TodoListProps {
  status: "todo" | "inProgress" | "closed";
}

function TodoList({ status }: TodoListProps) {
  
  const [isModal, setIsModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo>();
  const [todos, setTodos] = useState<Todo[]>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try{
        setLoading(true);
        const res = await api.get("/todos");
        setTodos(res.data);
    }
    catch (err){
        console.log(err)
    }
    finally{
        setLoading(false);
    }
};

  const getTodoById = async (id: string) => {
    try{
      const res = await api.get(`/todos/${id}`);
      setSelectedTodo(res.data);
    }
    catch (err) {
      console.log(err);
    }
    finally{
      setIsModal(true);
    }
  };

  const updateTodo = async (id: string, data: Partial<Todo>) => {
    try{
      await api.patch(`/todos/${id}`, data);
      await getTodos();
    }
    catch (err){
      console.log(err);
    }
    finally{
      setIsModal(false);
    }
  };

  const removeTodo = async (id: string) => {
    try{
      await api.delete(`/todos/${id}`);
      getTodos();
    }
    catch (err){
      console.log(err);
    }
  };

  if (loading) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-400 text-lg animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-8 text-center">
      {todos
        .filter((item) => item.status === status)
        .map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-[#181818] text-white rounded-lg p-4 mb-4 w-4/5 mx-auto"
          >
            <p className="text-xl">{item.title}</p>
            <div className="flex gap-3">
              <button
                onClick={() => getTodoById(item.id)}
                className="bg-green-700 hover:bg-green-800 px-4 py-2 rounded-md"
              >
                Update
              </button>
              <button
                onClick={() => removeTodo(item.id)}
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

export default TodoList;
