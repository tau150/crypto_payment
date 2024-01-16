import "react-toastify/dist/ReactToastify.css";
import type { OrderDetailsResponse } from "@/services/types/order.types";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { ToastContainer } from "react-toastify";

import ClockIcon from "@/components/UI/Icons/ClockIcon";
import VerifiedIcon from "@/components/UI/Icons/VerifiedIcon";
import { getIconUrlBasedOnSymbol, formatSymbolName } from "@/utils/pages/order";
import { PAYMENT_METHOD } from "@/domain/Payment";
import Label from "@/components/UI/Label/Label";
import PaymentMethod from "@/components/PaymentMethod/PaymentMethod";
import Card from "@/components/UI/Card/Card";
import { getOrderDetails } from "@/services/orders";
import { formatDateTime, getExpireTime } from "@/utils/datetimes";
import Countdown from "@/components/Countdown/Countdown";
import { useWebSocket } from "@/hooks/useWebSocket";
import { PAYMENT_STATUS } from "@/domain/Payment";
import { ROUTES } from "@/types/routes";
import ErrorSection from "@/components/ErrorSection/ErrorSection";
import LoadingSection from "@/components/LoadingSection/LoadingSection";

const IMAGE_WIDTH = 25;

export default function Order() {
  const [method, setMethod] = useState(PAYMENT_METHOD.QR);
  const params = useParams();
  const router = useRouter();

  const { data, isLoading, isError } = useQuery<OrderDetailsResponse>({
    queryKey: ["order", params?.id],
    queryFn: () => getOrderDetails(params?.id as string),
    enabled: !!params?.id,
  });

  const { isError: isSocketError, message } = useWebSocket(data?.[0]?.identifier as string);

  const status = data?.[0]?.status;

  useEffect(() => {
    if (
      (message?.status || status) === PAYMENT_STATUS.CO ||
      (message?.status || status) === PAYMENT_STATUS.AC
    ) {
      router.push(ROUTES.SUCCESS);
    }
    if (
      (message?.status || status) === PAYMENT_STATUS.EX ||
      (message?.status || status) === PAYMENT_STATUS.OC
    ) {
      router.push(ROUTES.CANCEL);
    }
  }, [message?.status, router, status]);

  const handleOnFinish = useCallback(() => {
    router.push(ROUTES.CANCEL);
  }, [router]);

  if (isLoading || !data) {
    return <LoadingSection />;
  }

  if (isError || isSocketError) {
    return (
      <div className="flex justify-center">
        <div>
          <ErrorSection />
        </div>
      </div>
    );
  }

  const order = data?.[0];
  const currencySymbol = formatSymbolName(order.currency_id);
  const { minutes, seconds } = getExpireTime(order.expired_time);

  return (
    <main className="flex flex-col mt-12 md:justify-center md:flex-row md:gap-8">
      <ToastContainer
        closeOnClick
        draggable
        pauseOnFocusLoss
        pauseOnHover
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        position="top-right"
        rtl={false}
        theme="light"
      />
      <div className="text-brand-primary font-bold md:w-1/2">
        <h1 className="text-lg">Resumen del pedido</h1>
        <Card className="min-w-80 mt-4 bg-gray-50 shadow-none">
          <div className="flex px-2  justify-between text-lg">
            <span>Importe:</span>
            <span>
              {order.fiat_amount} {order.fiat}
            </span>
          </div>
          <hr className="mt-4" />
          <div className="mt-6 px-2 flex justify-between">
            <span>Moneda seleccionada:</span>
            <span className="flex">
              <Image
                alt={`${order.currency_id} logo`}
                className="flex-none mr-1"
                height={IMAGE_WIDTH}
                src={getIconUrlBasedOnSymbol(order.currency_id)}
                width={IMAGE_WIDTH}
              />
              {currencySymbol}
            </span>
          </div>
          <hr className="mt-4" />
          <div className="mt-6 px-2 flex justify-between">
            <span>Comercio:</span>
            <span className="flex px-2 justify-center font-semibold text-right md:text-left">
              <VerifiedIcon className=" text-blue-300 ml-4 md:ml-0 md:mr-1 mt-1" /> Comercio de
              pruebas de Semega
            </span>
          </div>
          <div className="mt-6 px-2 flex justify-between">
            <span>Fecha:</span>
            <span className="font-semibold">
              {formatDateTime(order.created_at, order.language)}
            </span>
          </div>
          <hr className="mt-4 text-color" />
          <div className="mt-6 px-2 flex justify-between">
            <span>Concepto:</span>
            <span className="font-semibold">{order.notes}</span>
          </div>
        </Card>
      </div>
      <div className="mt-8 pb-24 md:mr-8 md:mt-0 md:pb-0 md:w-1/2">
        <h1 className="font-bold text-lg">Realiza un pago</h1>
        <Card className="min-w-80 mt-4">
          <div className="text-center flex justify-center items-center">
            <ClockIcon className="size-6 mr-2" />
            <span className="text-sm">
              <Countdown minutes={minutes} seconds={seconds} onFinish={handleOnFinish} />
            </span>
          </div>
          <div className="mt-8 flex justify-center gap-3">
            <Label
              className="px-4 text-sm py-1.5"
              isActive={method === PAYMENT_METHOD.QR}
              text="Smart QR"
              onClick={() => setMethod(PAYMENT_METHOD.QR)}
            />
            <Label
              className="px-4 text-sm py-1.5"
              isActive={method === PAYMENT_METHOD.WEB3}
              text=" Web3"
              onClick={() => setMethod(PAYMENT_METHOD.WEB3)}
            />
          </div>
          <PaymentMethod
            address={order.address}
            amount={order.crypto_amount}
            method={method}
            symbol={currencySymbol}
            tag={order.tag_memo}
          />
        </Card>
      </div>
    </main>
  );
}
