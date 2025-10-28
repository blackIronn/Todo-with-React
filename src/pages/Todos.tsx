import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Todo {
  id: number;
  title: string;
  status: string;
}

function Todos() {
  const BASE_URL = "http://localhost:3001";
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios.get(BASE_URL + "/todos").then(res => setTodos(res.data));
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
