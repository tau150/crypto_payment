import { useRef } from "react";

import Portal from "@/components/UI/Portal/Portal";
import Card from "@/components/UI/Card/Card";
import CloseIcon from "@/components/UI/Icons/CloseIcon";
import { useClickOutside } from "@/hooks/useClickOutside";

interface Props {
  isOpen: boolean;
  handleClose: VoidFunction;
  children: React.ReactNode;
}

const Modal = ({ children, isOpen, handleClose }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, handleClose);

  if (!isOpen) return null;

  return (
    <Portal>
      <div className="w-full h-full absolute bottom-0 top-0 z-10 flex justify-center items-center">
        <Card
          ref={modalRef}
          className={`w-full h-full bg-white relative z-20 md:w-6/12 md:min-h-[80%] md:h-fit animate-fadeIn`}
        >
          <CloseIcon
            className="absolute right-5 size-6 cursor-pointer"
            datatestId="close-icon"
            onClick={handleClose}
          />
          {children}
        </Card>
      </div>
    </Portal>
  );
};

export default Modal;
