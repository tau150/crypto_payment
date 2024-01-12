import { CiCircleInfo } from "react-icons/ci";
import { Tooltip } from "react-tooltip";

interface Props {
  name: string;
  text: string;
  tooltipText?: string;
}

const InputLabel = ({ name, text, tooltipText }: Props) => {
  return (
    <label
      className="font-semibold text-md mb-2 flex items-center text-brand-primary"
      htmlFor={name}
    >
      {text}
      {tooltipText && (
        <div>
          <CiCircleInfo
            className="ml-1"
            data-tooltip-content={tooltipText}
            data-tooltip-id={name}
          />
          <Tooltip id={name} />
        </div>
      )}
    </label>
  );
};

export default InputLabel;
