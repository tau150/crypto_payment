import { TbInfoHexagonFilled } from "react-icons/tb";
import { useQRCode } from "next-qrcode";

import { CURRENCY_CODE } from "@/domain/Currency";
import CopyToClipboard from "@/components/UI/CopyToClipboard/CopyToClipboard";
import { PAYMENT_METHOD } from "@/domain/Payment";
import MetamaskConnector from "@/components/MetamaskConnector/MetamaskConnector";
import { generateQRCode } from "@/utils/payment";

interface Props {
  amount: number;
  symbol: CURRENCY_CODE;
  address: string;
  tag?: string;
  method: PAYMENT_METHOD;
}

const PaymentMethod = ({ method, amount, symbol, address, tag }: Props) => {
  const { Canvas } = useQRCode();

  return (
    <>
      <div className="mt-8 text-center h-[200px]">
        {method === PAYMENT_METHOD.QR ? (
          <div className="flex justify-center">
            <div className="shadow-md rounded-lg" data-testid="qr-payment-container">
              <Canvas
                options={{
                  errorCorrectionLevel: "M",
                  margin: 3,
                  scale: 4,
                  width: 200,
                  color: {
                    dark: "#000",
                    light: "#fff",
                  },
                }}
                text={generateQRCode({ address, amount, symbol, tag })}
              />
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="border-2 py-20 px-5 rounded-xl">
              <MetamaskConnector address={address} amount={String(amount)} />
            </div>
          </div>
        )}
      </div>
      <div className="mt-8 flex items-center flex-col">
        <p className="text-sm flex items-center">
          Enviar
          <span className="text-lg ml-1 font-bold">
            {amount} {symbol}
          </span>
          <CopyToClipboard value={String(amount)} />
        </p>
        <p className="flex justify-center items-start text-xs break-all w-full text-center mt-2 md:text-sm md:w-4/6">
          {address}
          <CopyToClipboard value={address} />
        </p>
        {tag && (
          <p className="flex justify-center items-start text-xs break-all w-4/6 text-center mt-4 md:text-sm">
            <TbInfoHexagonFilled className="size-7 cursor-pointe pb-2 ml-1 text-yellow-500" />
            Etiqueta de destino: {tag}
            <CopyToClipboard value={tag} />
          </p>
        )}
      </div>
    </>
  );
};

export default PaymentMethod;
