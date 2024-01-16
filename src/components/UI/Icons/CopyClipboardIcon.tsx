import { FiCopy } from "react-icons/fi";

interface Props {
  onClick: VoidFunction;
  datatestId?: string;
  className?: string;
}

const CopyClipboardIcon = ({ className, datatestId, onClick }: Props) => {
  return <FiCopy className={className} data-testid={datatestId} onClick={onClick} />;
};

export default CopyClipboardIcon;
