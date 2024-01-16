import React from "react";
import Link from "next/link";

import Button from "@/components/UI/Button/Button";
import Card from "@/components/UI/Card/Card";
import { PAYMENT_PROCESS_STATUS } from "@/domain/Payment";
import { ROUTES } from "@/types/routes";
import CheckIcon from "@/components/UI/Icons/CheckIcon";
import ErrorIcon from "@/components/UI/Icons/ErrorIcon";
interface Props {
  status: PAYMENT_PROCESS_STATUS;
  title: string;
  children?: React.ReactNode;
}

const PROCESS_STATUS_ICON = {
  [PAYMENT_PROCESS_STATUS.CANCEL]: <ErrorIcon className="size-14" datatestId="cancel-icon" />,
  [PAYMENT_PROCESS_STATUS.SUCCESS]: <CheckIcon className="size-14" datatestId="success-icon" />,
};

const StatusCard = ({ status, title, children }: Props) => {
  return (
    <main className="flex justify-center pt-10 mt-12 md:pt-0">
      <Card className="min-w-80 w-1/3 ">
        <div className="pt-12 px-4 flex flex-col justify-center items-center">
          {PROCESS_STATUS_ICON[status]}
          <h1 className="mt-4 font-bold ">{title}</h1>
          {children}
          <Link className="w-full" href={ROUTES.ROOT}>
            <Button className="text-sm" text="Crear nuevo pago" />
          </Link>
        </div>
      </Card>
    </main>
  );
};

export default StatusCard;
