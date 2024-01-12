interface Props {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: Props) => {
  return (
    <div className={`shadow-md p-6 border-slate-100 rounded-lg border  ${className}`}>
      {children}
    </div>
  );
};

export default Card;
