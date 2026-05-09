import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./ModalWithContext.module.css";
import { ModalContext } from ".";

interface Props {
  children: ReactNode;
  onClose: () => void;
  isVisible: boolean;
}

const ModalWithContext = ({ children, onClose, isVisible }: Props) => {
  useEffect(() => {
    if (isVisible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "initial";
    return () => {
      document.body.style.overflow = "initial";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div className={styles.modalWrapper} onClick={onClose}>
        <div className={styles.container} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.body
  );
};

export default ModalWithContext;
