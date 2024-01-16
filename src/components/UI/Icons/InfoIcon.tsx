import { CiCircleInfo } from "react-icons/ci";

interface Props {
  className?: string;
}

const InfoIcon = ({ className }: Props) => {
  return <CiCircleInfo className={className} />;
};

export default InfoIcon;
