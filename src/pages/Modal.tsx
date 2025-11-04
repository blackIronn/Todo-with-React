import { useState } from "react";

import type { Todo } from "../types";


interface ModalProps {
  todo: Todo;
  onClose: () => void;
  update: (id: number, updatedData: { title: string; status: string }) => void;
}

function Modal({ todo, onClose, update }: ModalProps) {
  const [title, setTitle] = useState(todo.title);
  const [status, setStatus] = useState(todo.status);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="bg-[#181818] text-white rounded-lg p-6 w-96">
        <h2 className="text-2xl mb-4 text-center">Update Todo</h2>

        <label className="block mb-3">
          <span className="text-sm">Title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-1 p-2 rounded bg-gray-700 text-white outline-none"
          />
        </label>

        <label className="block mb-3">
          <span className="text-sm">Status</span>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as Todo[`status`])}
            className="w-full mt-1 p-2 rounded bg-gray-700 text-white outline-none"
          >
            <option value="todo">Todo</option>
            <option value="inProgress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
        </label>

        <div className="flex justify-between mt-5">
          <button
            onClick={onClose}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
          >
            Close
          </button>
          <button
            onClick={() => update(todo.id, { title, status })}
            className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
