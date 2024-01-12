import type { Option as OptionInterface } from "./SelectModal.types";

import React from "react";

import Option from "./Option/Option";

export const generateOptions = (
  availableOptions: OptionInterface[],
  selectedOption: OptionInterface | undefined,
  handleSelectOption: (value: string) => void,
): React.ReactNode => {
  return availableOptions.map((option) => (
    <Option
      key={option.value}
      imageSrc={option.imageSrc}
      label={option.label}
      selected={selectedOption?.value === option.value}
      value={option.value}
      onSelect={handleSelectOption}
    />
  ));
};
