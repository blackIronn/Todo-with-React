import axios from 'axios';
import { useEffect, useState } from 'react'


interface Todo {
  id: number;
  title: string;
  status: string;
}



function Closed() {
  const BASE_URL = "http://localhost:3001";
  const [closed, setClosed] = useState<Todo[]>([]);

  useEffect(() => {
    axios.get(BASE_URL + "/todos").then(res => setClosed(res.data));
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