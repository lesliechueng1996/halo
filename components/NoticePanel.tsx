import CardLayout from './CardLayout';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

function NoticePanel() {
  return (
    <div className="w-80">
      <CardLayout
        icon={<InformationCircleIcon className="w-6 h-6" />}
        title="公告"
      >
        <div className="text-content-main text-sm">
          博客项目已完成，代码已开源，开源地址在上方的github地址
        </div>
      </CardLayout>
    </div>
  );
}

export default NoticePanel;
