import { MdVerified } from "react-icons/md";
interface Props {
  className?: string;
}

const VerifiedIcon = ({ className }: Props) => {
  return <MdVerified className={className} />;
};

export default VerifiedIcon;
