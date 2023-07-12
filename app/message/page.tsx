import BreadcrumbTitle from '@/components/BreadcrumbTitle';
import Comment from '@/components/Comment';
import MySelf from '@/components/MySelf';

function MessagePage() {
  return (
    <div className="pt-5">
      <BreadcrumbTitle title="留言" className="mb-5" />
      <div className="flex gap-10 items-start">
        <div className="grow">
          <div className="bg-background p-10 rounded-2xl text-content-main space-y-5 mb-5">
            <p>这是一个留言板</p>
            <p>欢迎大家前来留言💖</p>
          </div>

          <Comment />
        </div>

        <MySelf className="hidden lg:block shrink-0" />
      </div>
    </div>
  );
}

export default MessagePage;
