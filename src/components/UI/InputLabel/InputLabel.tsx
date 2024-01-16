import { Tooltip } from "react-tooltip";

import InfoTooltipIcon from "../Icons/InfoTooltipIcon";
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
          <InfoTooltipIcon className="ml-1 size-5" tooltipId={name} tooltipText={tooltipText} />
          <Tooltip id={name} />
        </div>
      )}
    </label>
  );
};

export default InputLabel;
