import ReactDOM from "react-dom";

interface IModal {
  title: string;
  onConfirm: () => void;
  onClose: () => void;
  isOpen: boolean;
}

const Modal = ({ title, onConfirm, onClose, isOpen }: IModal) => {
  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 bg-white flex justify-center items-center z-50">
      <div
        className="bg-white rounded-lg p-6 shadow-lg"
        style={{
          width: "406px",
          height: "162px",
        }}
      >
        <p className="text-center text-base">{title}</p>

        <div className="flex justify-around mt-10">
          <button
            className="bg-lightGray text-sm  px-8 py-3 rounded-md"
            onClick={onClose}
          >
            취소
          </button>
          <button
            className="bg-primary text-sm text-white px-8 py-3 rounded-md"
            onClick={onConfirm}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")!
  );
};

export default Modal;
