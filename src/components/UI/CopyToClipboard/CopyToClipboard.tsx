import classNames from "classnames";

import CopyClipboardIcon from "@/components/UI/Icons/CopyClipboardIcon";
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
    <CopyClipboardIcon
      className={iconClass}
      datatestId="copy-clipboard"
      onClick={() => {
        navigator.clipboard.writeText(value);
      }}
    />
  );
};

export default CopyToClipboard;
