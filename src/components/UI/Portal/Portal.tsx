import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
  id?: string;
}

const Portal = ({ children, id = "#modal-root" }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.querySelector(id) as HTMLElement) : null;
};

export default Portal;
