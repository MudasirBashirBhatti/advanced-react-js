import { createContext } from "react";

interface contextType {
  onClose: () => void;
}
export const ModalContext = createContext<contextType | undefined>(undefined);
