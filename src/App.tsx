import { Routes, Route, Link } from "react-router-dom";

import Todos from "./pages/Todos";
import InProgress from "./pages/InProgress";
import Closed from "./pages/Closed";
import CreateTodo from "./pages/CreateTodo";




function App() {

  const classes: string[] = [
    "text-center text-2xl pt-20 flex justify-center gap-20",
    "px-4 py-2 rounded-lg bg-[#181818] hover:bg-gray-600 transition"
  ]

  const [headerClass, linkClass] = classes;


  return (
    <>
      <div>
        <nav className= {headerClass}>
          <Link className = {linkClass} to="/">Create Todo</Link>
          <Link className = {linkClass} to="/todos">Todos</Link>
          <Link className = {linkClass} to="/inProgress">In Progress</Link>
          <Link className = {linkClass} to="/closed">Closed</Link>
        </nav>

        <Routes>
          <Route path="/" element={<CreateTodo />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/inProgress" element={<InProgress />} />
          <Route path="/closed" element={<Closed />} />
        </Routes>
    </div>
    </>
  )
}

export default App
