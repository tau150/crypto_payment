import { FaCircleCheck } from "react-icons/fa6";
import { RxCaretRight } from "react-icons/rx";
import Image from "next/image";
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
        <FaCircleCheck className="text-blue-400" />
      ) : (
        <RxCaretRight className="size-7 text-gray-400" />
      )}
    </div>
  );
};

export default Option;
