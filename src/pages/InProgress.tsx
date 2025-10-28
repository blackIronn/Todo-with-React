import axios from 'axios';
import { useEffect, useState } from 'react'


interface Todo {
  id: number;
  title: string;
  status: string;
}

function InProgress() {
  const BASE_URL = "http://localhost:3001";
  const [inProgress, setInProgress] = useState<Todo[]>([]);

  useEffect(() => {
    axios.get(BASE_URL + "/todos").then(res => setInProgress(res.data));
  }, []);

  return (
    <div>
      {inProgress
        .filter(item => item.status === "inProgress")
        .map((item, index) => (
          <p key={index}>{item.title}</p>
        ))}
    </div>
  );
}

export default InProgress