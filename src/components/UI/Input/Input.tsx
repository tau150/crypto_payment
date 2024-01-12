import React, { ReactElement, JSXElementConstructor } from "react";
import classNames from "classnames";

import InputLabel from "../InputLabel/InputLabel";

interface Props {
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactElement<any, string | JSXElementConstructor<any>>;
  value?: string;
  tooltipText?: string;
  placeholder?: string;
  min?: number;
  max?: number;
  type?: string;
  label?: string;
}

const Input = ({
  name,
  label,
  tooltipText,
  value,
  min,
  max,
  placeholder,
  icon,
  onChange,
  type = "text",
}: Props) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  const inputClass = classNames({
    "border w-full p-3 rounded-md h-[56px]": true,
    "pl-8": icon !== undefined,
  });

  return (
    <div className="relative">
      {label && <InputLabel name={name} text={label} tooltipText={tooltipText} />}
      <div className="absolute top-1/4 pl-2">
        {icon && React.cloneElement(icon, { className: "size-6" })}
      </div>
      <input
        className={inputClass}
        id={name}
        max={max}
        min={min}
        name={name}
        placeholder={placeholder}
        step="0.01"
        type={type}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Input;
