type Props = {
  title: string;
  className?: string;
};

function LabelTitle({ title, className }: Props) {
  return (
    <div className={`pl-5 border-l-4 border-sky-500 ${className}`}>
      <h1 className="font-bold">{title}</h1>
    </div>
  );
}

export default LabelTitle;
