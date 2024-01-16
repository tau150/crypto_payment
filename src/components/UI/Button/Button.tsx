import ButtonSpinnerIcon from "@/components/UI/Icons/ButtonSpinnerIcon";
interface Props {
  text: string;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  isLoading?: boolean;
  className?: string;
  onClick?: VoidFunction;
}

const Button = ({ text, type = "button", isDisabled, isLoading, onClick, className }: Props) => {
  return (
    <button
      className={`p-4 mt-8 w-full rounded-md bg-brand-background flex justify-center text-white disabled:opacity-55 ${className}`}
      disabled={isDisabled}
      type={type}
      onClick={onClick}
    >
      {isLoading ? <ButtonSpinnerIcon className="animate-spin size-6" /> : text}
    </button>
  );
};

export default Button;
