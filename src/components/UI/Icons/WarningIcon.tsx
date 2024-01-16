import { MdError } from "react-icons/md";

interface Props {
  className?: string;
}

const WarningIcon = ({ className }: Props) => {
  return <MdError className={className} />;
};

export default WarningIcon;
