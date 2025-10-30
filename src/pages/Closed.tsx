import api from "../api/api";
import { useEffect, useState } from 'react'


interface Todo {
  id: number;
  title: string;
  status: string;
}



function Closed() {

  const [closed, setClosed] = useState<Todo[]>([]);

  useEffect(() => {
    api.get("/todos").then(res => setClosed(res.data));
  }, []);

  return (
    <div>
      {closed
        .filter(item => item.status === "closed")
        .map((item, index) => (
          <p key={index}>{item.title}</p>
        ))}
    </div>
  );
}

export default Closed