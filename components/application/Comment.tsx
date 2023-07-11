import ReplyComment from './ReplyComment';

const comments = [
  {
    id: '1',
    avatarUrl: '',
    username: '小明',
    date: '2021-10-10',
    content: '这个人很懒，什么也没有留下',
  },
  {
    id: '2',
    avatarUrl: '',
    username: '小明',
    date: '2021-10-10',
    content: '这个人很懒，什么也没有留下',
  },
];

function Comment() {
  return (
    <div className="bg-background rounded-2xl px-14 py-10">
      <div className="mb-3">
        <span className="text-label text-xl">评论区</span>
        <div className="w-16 h-1 gradient-bg" />
      </div>

      <div className="flex items-start gap-3 mb-5">
        <div className="w-10 h-10 rounded-full bg-white shrink-0" />
        <div className="grow space-y-5">
          <textarea
            className="rounded-xl w-full h-48 bg-deep-background text-content-main outline-none p-5 resize-none"
            placeholder="添加评论..."
          ></textarea>
          <div className="text-right">
            <button className="gradient-bg py-2 px-3 rounded-lg text-label items-end">
              添加评论
            </button>
          </div>
          <div className="h-1 bg-content-main w-full" />
        </div>
      </div>

      <div className="space-y-5">
        {comments.map((comment) => (
          <ReplyComment key={comment.id} {...comment} />
        ))}
      </div>
    </div>
  );
}

export default Comment;
