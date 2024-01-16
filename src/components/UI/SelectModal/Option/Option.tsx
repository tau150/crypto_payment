import Image from "next/image";

import CaretRightIcon from "@/components/UI/Icons/CaretRightIcon";
import CheckIcon from "@/components/UI/Icons/CheckIcon";

const IMAGE_WIDTH = "36";

interface Props {
  value: string;
  onSelect: (value: string) => void;
  label: string | React.ReactNode;
  imageSrc?: string;
  selected?: boolean;
}

const Option = ({ value, label, imageSrc, selected, onSelect }: Props) => {
  return (
    <div
      className="flex items-center justify-between h-10 mb-4 px-2 py-6 hover:bg-slate-100 rounded-md cursor-pointer"
      onClick={() => onSelect(value)}
    >
      <div className="flex">
        {imageSrc && (
          <div className="self-center flex items-center">
            <Image alt={"test"} height={IMAGE_WIDTH} src={imageSrc} width={IMAGE_WIDTH} />
          </div>
        )}
        {label}
      </div>
      {selected ? (
        <CheckIcon className="size-5" innerFill="#fff" opacity="1" outerFill="#70b0fd" />
      ) : (
        <CaretRightIcon className="size-7 text-gray-400" />
      )}
    </div>
  );
};

export default Option;
