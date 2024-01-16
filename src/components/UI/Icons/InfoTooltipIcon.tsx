import InfoIcon from "./InfoIcon";

interface Props {
  tooltipText: string;
  tooltipId: string;
  className?: string;
}

const InfoTooltipIcon = ({ tooltipId, tooltipText, className }: Props) => {
  return (
    <span data-tooltip-content={tooltipText} data-tooltip-id={tooltipId}>
      <InfoIcon className={className} data-tooltip-content={tooltipText} />
    </span>
  );
};

export default InfoTooltipIcon;
