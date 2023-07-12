type Props = {
  id: string;
  avatarUrl?: string;
  username: string;
  content: string;
  date: string;
};

function ReplyComment({ id, avatarUrl, username, content, date }: Props) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-full bg-white" />
      <div className="bg-deep-background p-5 text-content-main rounded-lg">
        <div className="mb-5">{content}</div>
        <div className="flex items-center justify-between text-sm">
          <div>
            {username} | {date}
          </div>
          <div className="text-label-colorful">回复</div>
        </div>
      </div>
    </div>
  );
}

export default ReplyComment;
