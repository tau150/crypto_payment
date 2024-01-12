import type { Option as OptionInterface } from "./SelectModal.types";

import React from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCaretDown } from "react-icons/rx";
import Image from "next/image";

import Input from "@/components/UI/Input/Input";
import Modal from "@/components/UI/Modal/Modal";

import InputLabel from "../InputLabel/InputLabel";

import { generateOptions } from "./SelectModal.utils";

const IMAGE_WIDTH = "30";

export interface Props {
  name: string;
  options: OptionInterface[];
  onSelect?: (selection: string) => void;
  value?: string;
  label?: string;
  tooltipText?: string;
}

const SelectModal = ({ name, label, value, onSelect, tooltipText, options }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [availableOptions, setAvailableOptions] = useState<OptionInterface[]>(options);
  const [selectedOption, setSelectedOption] = useState<OptionInterface | undefined>(() =>
    options.find((option) => option.value === value),
  );

  const handleOnSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setAvailableOptions(
      options.filter((option) => option.value.toLowerCase().includes(value.toLowerCase())),
    );
  };

  const handleSelectOption = (value: string) => {
    const pickedOption = options.find((option) => option.value === value);

    setSelectedOption(pickedOption);
    pickedOption && onSelect?.(pickedOption?.value);
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setAvailableOptions(options);
  };

  return (
    <div>
      {label && <InputLabel name={name} text={label} tooltipText={tooltipText} />}
      <div
        className="border pr-2 p-3 rounded-md mt-2 relative flex items-center cursor-pointer h-[56px]"
        onClick={() => setIsOpen(true)}
      >
        {selectedOption?.imageSrc && (
          <Image
            alt="Bitnovo logo"
            height={IMAGE_WIDTH}
            src={selectedOption?.imageSrc}
            width={IMAGE_WIDTH}
          />
        )}
        <div className="[&>div]:flex [&>div]:items-end  [&>div>p]:mr-1 [&>div>p]:font-normal [&>div>p]:text-sm [&>div>p]:text-brand-primary">
          {selectedOption?.label}
        </div>
        <RxCaretDown className="absolute right-3 text-gray-400 size-7" />
      </div>
      <Modal handleClose={handleCloseModal} isOpen={isOpen}>
        {label && <InputLabel name={name} text={label} />}
        <div className="mt-4">
          <Input
            icon={<CiSearch />}
            name="concept"
            placeholder="Buscar"
            type="text"
            onChange={handleOnSearchChange}
          />
        </div>
        <div className="mt-10">
          {generateOptions(availableOptions, selectedOption, handleSelectOption)}
        </div>
      </Modal>
    </div>
  );
};

export default SelectModal;
