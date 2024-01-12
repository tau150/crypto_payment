import Image from "next/image";
import { toast } from "react-toastify";
import Metamask from "public/images/metamask.png";

import { requestAccount } from "@/services/metamask";

interface Props {
  address: string;
  amount: string;
  width?: number;
  height?: number;
}

export const MetamaskConnector = ({ width = 150, height = 150, address, amount }: Props) => {
  const handleError = (message: string) => {
    toast.error(message);
  };

  const handleSuccess = (message: string) => {
    toast.success(message);
  };

  const handleConnection = () => {
    requestAccount(address, amount, handleError, handleSuccess);
  };

  return (
    <Image
      alt="metamask logo"
      className="cursor-pointer"
      height={height}
      src={Metamask}
      width={width}
      onClick={handleConnection}
    />
  );
};

export default MetamaskConnector;
