import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';

type Props = {
  id: string;
  name: string;
  time: string;
  avatarUrl?: string;
  commentCount: number;
  content: string;
};

function TalkCard({ id, name, time, avatarUrl, commentCount, content }: Props) {
  return (
    <div className="p-5 bg-background text-content-main rounded-2xl flex items-start gap-5 text-sm shadow-lg">
      <div className="w-10 h-10 rounded-full bg-white" />
      <div>
        <div>{name}</div>
        <div className="text-xs flex items-center gap-3 mb-5">
          <div className="flex gap-1">
            <span>发布于</span>
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <ChatBubbleOvalLeftEllipsisIcon className="h-4 w-4" />
            <span>{commentCount}</span>
          </div>
        </div>
        <div>
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
}

export default TalkCard;
