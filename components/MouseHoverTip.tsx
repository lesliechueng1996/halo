type Props = {
  text: string;
};

function MouseHoverTip({ text }: Props) {
  return (
    <div className="flex items-center">
      <div className="w-0 h-0 border-[8px] border-transparent border-r-black"></div>
      <div className="bg-black rounded-lg h-8 text-neutral-400 leading-8 text-center px-3">
        {text}
      </div>
    </div>
  );
}

export default MouseHoverTip;
