interface Props {
  className?: string;
  innerFill?: string;
  outerFill?: string;
  datatestId?: string;
}

const DEFAULT_OUTER_FILL = "#f1a8a8";
const DEFAULT_INNER_FILL = "#dc2627";

const ErrorIcon = ({
  className,
  datatestId,
  innerFill = DEFAULT_INNER_FILL,
  outerFill = DEFAULT_OUTER_FILL,
}: Props) => {
  return (
    <svg
      className={className}
      data-testid={datatestId}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <path
          d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
          fill={outerFill}
        />
        <path
          d="M8.96967 8.96967C9.26256 8.67678 9.73744 8.67678 10.0303 8.96967L12 10.9394L13.9697 8.96969C14.2626 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0304L13.0607 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0304 15.0303C9.73746 15.3232 9.26258 15.3232 8.96969 15.0303C8.6768 14.7374 8.6768 14.2626 8.96969 13.9697L10.9394 12L8.96967 10.0303C8.67678 9.73744 8.67678 9.26256 8.96967 8.96967Z"
          fill={innerFill}
        />
      </g>
    </svg>
  );
};

export default ErrorIcon;
