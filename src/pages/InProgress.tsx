import api from "../api/api";
import { useEffect, useState } from 'react'


interface Todo {
  id: number;
  title: string;
  status: string;
}

function InProgress() {
 
  const [inProgress, setInProgress] = useState<Todo[]>([]);

  useEffect(() => {
    api.get("/todos").then(res => setInProgress(res.data));
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