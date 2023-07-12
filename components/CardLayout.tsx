type Props = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

function CardLayout({ title, icon, children }: Props) {
  return (
    <div className="bg-deep-background rounded-2xl p-10">
      <div className="mb-5">
        <div className="flex gap-3 items-center text-label mb-2">
          <div>{icon}</div>
          <div className="text-xl">{title}</div>
        </div>
        <div className="h-1.5 w-20 gradient-bg" />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default CardLayout;
