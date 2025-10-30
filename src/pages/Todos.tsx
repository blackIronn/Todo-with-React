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
    api.get("/todos").then(res => setTodos(res.data));
  }, []);

  return (
    <div>
      {todos
        .filter(item => item.status === "todo")
        .map((item, index) => (
          <p key={index}>{item.title}</p>
        ))}
    </div>
  );
}

export default Todos;
