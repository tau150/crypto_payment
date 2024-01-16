import type { Currency } from "@/domain/Currency";

import { useState, SyntheticEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import Card from "@/components/UI/Card/Card";
import Input from "@/components/UI/Input/Input";
import ErrorSection from "@/components/ErrorSection/ErrorSection";
import SelectModal from "@/components/UI/SelectModal/SelectModal";
import { getCurrencies } from "@/services/currencies";
import { createOrder } from "@/services/orders";
import { formatCurrenciesForSelect } from "@/utils/pages";
import Button from "@/components/UI/Button/Button";
interface Props {
  currencies: Currency[];
  isError?: boolean;
}

const AMOUNT_ID = "amount";
const CURRENCY_ID = "currency";
const CONCEPT_ID = "concept";

export default function Home({ currencies, isError }: Props) {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies?.[0]);
  const [amount, setAmount] = useState("");
  const [isErrorSettingOrder, setIsErrorSettingOrder] = useState(false);
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: createOrder,
    onSuccess: (data) => router.push(`/orders/${data.identifier}`),
    onError: () => setIsErrorSettingOrder(true),
  });

  const handleSelectCurrency = (value: string) => {
    const selection = currencies.find((currency) => currency.symbol === value);

    setSelectedCurrency(selection as Currency);
  };

  const handleSubmitForm = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    const concept = (e.target as HTMLFormElement)[CONCEPT_ID].value;

    mutate({
      expected_output_amount: Number(amount),
      input_currency: selectedCurrency.symbol,
      notes: concept,
    });
  };

  if (isError || isErrorSettingOrder) {
    return (
      <div className="flex w-full justify-center">
        <div className="w-80">
          <ErrorSection />
        </div>
      </div>
    );
  }

  const currencyOptions = formatCurrenciesForSelect(currencies);
  const minAmount = Number(selectedCurrency.min_amount);
  const maxAmount = Number(selectedCurrency.max_amount);

  const isValidationError =
    amount === "" || Number(amount) < minAmount || Number(amount) > maxAmount;

  const helpText =
    isValidationError && amount !== "" && amount !== "0"
      ? `min: ${selectedCurrency.min_amount} - max: ${selectedCurrency.max_amount} `
      : undefined;

  return (
    <main className="flex justify-center pt-10 md:pt-0">
      <Card className="min-w-80 w-1/2">
        <h1 className="font-bold text-3xl text-brand-primary pb-8 text-center">Crear pago</h1>
        <form onSubmit={handleSubmitForm}>
          <div className="mt-2">
            <Input
              helpText={helpText}
              label="Importe a pagar"
              max={maxAmount}
              min={minAmount}
              name={AMOUNT_ID}
              placeholder="Añade import a pagar"
              type="number"
              value={amount}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
            />
          </div>
          <div className="mt-8">
            <SelectModal
              label="Seleccionar moneda"
              name={CURRENCY_ID}
              options={currencyOptions}
              tooltipText="Some helpful text"
              value={currencyOptions[0].value}
              onSelect={handleSelectCurrency}
            />
          </div>
          <div className="mt-8">
            <Input
              label="Concepto"
              name={CONCEPT_ID}
              placeholder="Añade descripción del pago"
              type="text"
            />
          </div>
          <Button
            isDisabled={isValidationError || isPending}
            isLoading={isPending}
            text="Continuar"
            type="submit"
          />
        </form>
      </Card>
    </main>
  );
}

export async function getStaticProps() {
  try {
    const currencies = await getCurrencies();

    return {
      props: {
        currencies,
      },
    };
  } catch (error) {
    return {
      props: {
        isError: true,
      },
    };
  }
}
