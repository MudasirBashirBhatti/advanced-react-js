import { useContext, type FC, type ReactNode } from "react";
import { RxCross2 } from "react-icons/rx";
import { ModalContext } from "..";

interface HeaderType {
  children: ReactNode;
}
const Header: FC<HeaderType> = ({ children }) => {
  const ctx = useContext(ModalContext);
  return (
    <div>
      {children} <RxCross2 onClick={ctx?.onClose} />
    </div>
  );
};

export default Header;
