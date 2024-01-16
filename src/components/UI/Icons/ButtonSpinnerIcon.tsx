import { FaSpinner } from "react-icons/fa";

interface Props {
  className?: string;
}

const ButtonSpinnerIcon = ({ className }: Props) => {
  return <FaSpinner className={className} />;
};

export default ButtonSpinnerIcon;
