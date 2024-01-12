import React from "react";
import { GoCheckCircleFill } from "react-icons/go";
import { MdCancel } from "react-icons/md";
import Link from "next/link";

import Button from "@/components/UI/Button/Button";
import Card from "@/components/UI/Card/Card";
import { PAYMENT_PROCESS_STATUS } from "@/domain/Payment";
import { ROUTES } from "@/types/routes";
interface Props {
  status: PAYMENT_PROCESS_STATUS;
  title: string;
  children?: React.ReactNode;
}

const PROCESS_STATUS_ICON = {
  [PAYMENT_PROCESS_STATUS.CANCEL]: (
    <MdCancel className="text-rose-400 size-14" data-testid="cancel-icon" />
  ),
  [PAYMENT_PROCESS_STATUS.SUCCESS]: (
    <GoCheckCircleFill className="text-emerald-500 size-14" data-testid="success-icon" />
  ),
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
