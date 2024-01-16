import { RxCaretRight } from "react-icons/rx";

interface Props {
  className?: string;
}

const CaretRightIcon = ({ className }: Props) => {
  return <RxCaretRight className={className} />;
};

export default CaretRightIcon;
