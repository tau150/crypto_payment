import classNames from "classnames";
interface Props {
  isActive: boolean;
  text: string;
  className?: string;
  onClick?: VoidFunction;
}

const Label = ({ text, isActive, className, onClick }: Props) => {
  const labelClass = classNames({
    "cursor-pointer rounded-2xl": true,
    "bg-blue-800 text-white": isActive,
    "bg-slate-100 text-gray-500": !isActive,
  });

  return (
    <span className={`${labelClass} ${classNames(className)}`} onClick={onClick}>
      {text}
    </span>
  );
};

export default Label;
