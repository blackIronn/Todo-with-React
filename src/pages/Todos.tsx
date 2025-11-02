import { useEffect, useState } from 'react';
import api from "../api/api";
import Modal from './Modal';


interface Todo {
  id: number;
  title: string;
  status: string;
}

function Todos() {

  const [isModal, setIsModal] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo>();
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    await api.get("/todos").then(res => setTodos(res.data));
  }

  const getTodoById = async (id: number) => {
    const todo = await api.get(`/todos/${id}`);
    setSelectedTodo(todo.data);
    return todo.data;
  }

  const Update = async (id: number) => {
    const todo = await getTodoById(id);
    
    setIsModal(true);
  }

  // const ChangeStatus = () => {
    
  // }
  
  const Remove = async (id: number) => {
    await api.delete(`/todos/${id}`);
    getTodos();
  }

  return (
    <div className='flex-col justify-center text-center pt-20'>
      {todos
        .filter(item => item.status === "todo")
        .map((item) => (
          <div className='flex justify-center'>
            <div className=' py-5 px-5 bg-[#181818] mt-5 w-4/5 mx-auto rounded-lg text-2xl'>
              <p key={item.id}>{item.title}</p>
            </div>
            <div className='flex justify-center gap-5 pl-5'>
              <button 
                className='py-5 px-5 bg-[#138a23] mt-5 mx-auto rounded-lg text-2xl'
                onClick={() => Update(item.id)}>
                Update
              </button>
              {/* <button 
                className='py-5 px-5 bg-[#138a23] mt-5 mx-auto rounded-lg text-2xl'>
                Change
              </button> */}
              <button 
                className='py-5 px-5 bg-[#831818] mt-5 mx-auto rounded-lg text-2xl'
                onClick={() => Remove(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
        {isModal && selectedTodo && (
          <Modal todo={selectedTodo} onClose={() => setIsModal(false)} />
        )}

    </div>
  );
}

export default Todos;
