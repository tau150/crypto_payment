import { forwardRef, Ref } from "react";
interface Props {
  children: React.ReactNode;
  className?: string;
}

const Card = forwardRef(({ children, className }: Props, ref: Ref<HTMLDivElement>) => {
  return (
    <div ref={ref} className={`shadow-md p-6 border-slate-100 rounded-lg border ${className}`}>
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;
