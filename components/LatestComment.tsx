import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';
import CardLayout from './CardLayout';

type Comment = {
  id: string;
  iconUrl?: string;
  username: string;
  date: string;
  content: string;
};

const comments: Comment[] = [
  {
    id: '1',
    username: 'John Doe',
    date: '2021-01-01',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.',
  },
  {
    id: '2',
    username: 'John Doe',
    date: '2021-01-01',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.',
  },
  {
    id: '3',
    username: 'John Doe',
    date: '2021-01-01',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.',
  },
  {
    id: '4',
    username: 'John Doe',
    date: '2021-01-01',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.',
  },
  {
    id: '5',
    username: 'John Doe',
    date: '2021-01-01',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.',
  },
  {
    id: '6',
    username: 'John Doe',
    date: '2021-01-01',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.',
  },
  {
    id: '7',
    username: 'John Doe',
    date: '2021-01-01',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.',
  },
];

function CommentItem({
  comment: { id, username, date, content },
}: {
  comment: Comment;
}) {
  return (
    <div className="flex items-center bg-background p-2 gap-2">
      <div>
        <div className="rounded-full w-8 h-8 bg-white" />
      </div>
      <div className="text-xs">
        <div className="text-label-colorful">{username}</div>
        <div className="text-content-sub">{date}</div>
        <div className="text-label overflow-hidden text-ellipsis line-clamp-1">
          {content}
        </div>
      </div>
    </div>
  );
}

function LatestComment() {
  return (
    <div className="w-80">
      <CardLayout
        icon={<ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6" />}
        title="最近评论"
      >
        <div className="flex flex-col gap-3">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      </CardLayout>
    </div>
  );
}

export default LatestComment;
