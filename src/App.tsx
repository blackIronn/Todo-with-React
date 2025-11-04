import { Routes, Route, NavLink } from "react-router-dom";

import Todos from "./pages/Todos";
import InProgress from "./pages/InProgress";
import Closed from "./pages/Closed";
import CreateTodo from "./pages/CreateTodo";

function App() {

  const classes: string[] = [
    "text-center text-xl pt-20 flex justify-center gap-20",
    "px-4 py-2 rounded-full border border-white transition",
    "bg-gray-700",
    "bg-[#181818] hover:bg-gray-700"
  ];

  const [headerClass, linkClass, active, deactive] = classes;

  return (
    <>
      <div>
        <nav className={headerClass}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? active : deactive}`
            }
          >
            Create Todo
          </NavLink>

          <NavLink
            to="/todos"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? active : deactive}`
            }
          >
            Todos
          </NavLink>

          <NavLink
            to="/inProgress"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? active : deactive}`
            }
          >
            In Progress
          </NavLink>

          <NavLink
            to="/closed"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? active : deactive}`
            }
          >
            Closed
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<CreateTodo />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/inProgress" element={<InProgress />} />
          <Route path="/closed" element={<Closed />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
