import { IoMdClose } from "react-icons/io";

interface Props {
  onClick: VoidFunction;
  datatestId?: string;
  className?: string;
}

const CloseIcon = ({ onClick, datatestId, className }: Props) => {
  return <IoMdClose className={className} data-testid={datatestId} onClick={onClick} />;
};

export default CloseIcon;
