import { useEffect, type ReactNode } from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

const Modal = ({
  children,
  onClose,
  isVisible,
}: {
  children: ReactNode;
  onClose: () => void;
  isVisible: boolean;
}) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }

    return () => {
      document.body.style.overflow = "initial";
    };
  }, [isVisible]);

  useEffect(() => {
    const handleEscap = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscap);

    return () => {
      document.removeEventListener("keydown", handleEscap);
    };
  }, [onClose]);

  if (!isVisible) return null;

  return createPortal(
    <div className={styles.modalWrapper} onClick={onClose}>
      <div
        className={styles.container}
        onClick={(e) => {
          e.stopPropagation();
        }}
        role="dialog"
        aria-modal
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

// Optional to make it compound
const ModalHeader = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

const ModalBody = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;

export default Modal;
