import LabelTitle from './LabelTitle';

type Props = {
  children: React.ReactNode;
  title: string;
  contentClass?: string;
};

function ContentLayout({ title, children, contentClass }: Props) {
  return (
    <div className="h-full flex flex-col">
      <LabelTitle title={title} className="mb-3 shrink-0" />
      <div className={`px-5 grow ${contentClass}`}>{children}</div>
    </div>
  );
}

export default ContentLayout;
