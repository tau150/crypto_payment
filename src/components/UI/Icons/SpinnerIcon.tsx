import { ImSpinner8 } from "react-icons/im";

interface Props {
  className?: string;
}

const SpinnerIcon = ({ className }: Props) => {
  return <ImSpinner8 className={className} />;
};

export default SpinnerIcon;
