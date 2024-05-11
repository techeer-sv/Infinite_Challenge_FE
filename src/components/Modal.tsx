import ReactDOM from "react-dom";
import Button from "@/components/Button";
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
          <Button variant="dismiss" onClick={onClose}>
            취소
          </Button>

          <Button variant="primary" onClick={onConfirm}>
            확인
          </Button>

          {/* <button
            className="bg-primary text-sm text-white px-8 py-3 rounded-md"
            onClick={onConfirm}
          >
            확인
          </button> */}
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
