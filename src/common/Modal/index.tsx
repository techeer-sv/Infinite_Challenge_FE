import classNames from "classnames/bind";
import style from "./index.module.scss";

const cx = classNames.bind(style);

interface ModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function Modal({ isOpen, onCancel, onConfirm }: ModalProps) {
  return (
    <div className={cx("modal-overlay")}>
      <dialog open={isOpen ? true : undefined} className={cx("modal-container")}>
        <label>즐겨찾기에서 제거하시겠습니까?</label>
        <menu className={cx("menu-container")}>
          <button className={cx(["button-container", "cancel-button"])} onClick={onCancel}>
            취소
          </button>
          <button className={cx(["button-container", "ok-button"])} onClick={onConfirm}>
            확인
          </button>
        </menu>
      </dialog>
    </div>
  );
}
