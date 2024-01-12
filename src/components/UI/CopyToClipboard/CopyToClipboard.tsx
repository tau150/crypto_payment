import { FiCopy } from "react-icons/fi";
import classNames from "classnames";

interface Props {
  value: string;
  className?: string;
}

const CopyToClipboard = ({ className, value }: Props) => {
  const iconClass = classNames({
    "size-6 cursor-pointer pb-2 text-blue-500 right-0 ml-1": true,
    className: className !== undefined,
  });

  return (
    <FiCopy
      className={iconClass}
      data-testid="copy-clipboard"
      onClick={() => {
        navigator.clipboard.writeText(value);
      }}
    />
  );
};

export default CopyToClipboard;
