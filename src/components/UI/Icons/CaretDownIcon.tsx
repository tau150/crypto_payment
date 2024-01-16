import { RxCaretDown } from "react-icons/rx";

interface Props {
  className?: string;
}

const CaretDownIcon = ({ className }: Props) => {
  return <RxCaretDown className={className} />;
};

export default CaretDownIcon;
