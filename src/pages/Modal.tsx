interface ModalProps {
  todo: any;
  onClose: () => void;
}

function Modal({ todo, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="bg-white text-black rounded-lg p-6 w-96">
        <h2 className="text-2xl mb-4">Update Todo</h2>
        <p><b>ID:</b> {todo?.id}</p>
        <p><b>Title:</b> {todo?.title}</p>
        <p><b>Status:</b> {todo?.status}</p>

        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;