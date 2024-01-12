import StatusCard from "@/components/StatusCard/StatusCard";
import { PAYMENT_PROCESS_STATUS } from "@/domain/Payment";

export default function Success() {
  return (
    <main className="flex justify-center pt-10 mt-12 md:pt-0">
      <StatusCard status={PAYMENT_PROCESS_STATUS.SUCCESS} title="¡Pago completado!">
        <p className="text-center mt-2 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus molestias minus
          architecto in harum veniam, nobis odit, eveniet delectus.
        </p>
      </StatusCard>
    </main>
  );
}
