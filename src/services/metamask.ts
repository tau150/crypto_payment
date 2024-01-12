import { ethers } from "ethers";

import { getMetamaskErrorMessage } from "./utils/error";

export const requestAccount = async (
  address: string,
  amount: string,
  onError: (message: string) => void,
  onSuccess: (message: string) => void,
) => {
  if (window.ethereum) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      ethers.utils.getAddress(address);

      await signer.sendTransaction({
        to: address,
        value: ethers.utils.parseEther(amount),
      });

      onSuccess("Transacción realizada con éxito, aguarde mientras se termina de procesar");
    } catch (error) {
      const errorMessage = getMetamaskErrorMessage((error as Error).message);

      onError(errorMessage);
    }
  } else {
    onError("Metamask no se encuentra en su navegador");
  }
};
