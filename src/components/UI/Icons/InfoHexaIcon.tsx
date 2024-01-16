import { TbInfoHexagonFilled } from "react-icons/tb";

interface Props {
  className?: string;
}

const InfoHexaIcon = ({ className }: Props) => {
  return <TbInfoHexagonFilled className={className} />;
};

export default InfoHexaIcon;
