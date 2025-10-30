import { useEffect, useState } from 'react';
import api from "../api/api";


interface Todo {
  id: number;
  title: string;
  status: string;
}

function Todos() {

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    api.get("/todos").then(res => setTodos(res.data));
  }

  const Update = () => {

  }

  const ChangeStatus = () => {
    
  }
  
  const Remove = async (id: number) => {
    const remove = await api.delete(`/todos/${id}`);
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
                className='py-5 px-5 bg-[#6a0a97] mt-5 mx-auto rounded-lg text-2xl'>
                Update
              </button>
              <button 
                className='py-5 px-5 bg-[#138a23] mt-5 mx-auto rounded-lg text-2xl'>
                Change Status
              </button>
              <button 
                className='py-5 px-5 bg-[#831818] mt-5 mx-auto rounded-lg text-2xl'
                onClick={() => Remove(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Todos;
