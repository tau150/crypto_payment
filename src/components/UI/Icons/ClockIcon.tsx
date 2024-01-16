import { MdOutlineTimer } from "react-icons/md";

interface Props {
  className?: string;
}

const ClockIcon = ({ className }: Props) => {
  return <MdOutlineTimer className={className} />;
};

export default ClockIcon;
