import CardLayout from './CardLayout';
import { ComputerDesktopIcon } from '@heroicons/react/24/outline';

function WebInfor() {
  return (
    <div className="w-80">
      <CardLayout
        icon={<ComputerDesktopIcon className="w-6 h-6" />}
        title="网站信息"
      >
        <div className="text-content-main text-sm grid grid-cols-3">
          <span>运行时间:</span>
          <span className="col-span-2 justify-self-end">325天9时28分23秒</span>
          <span>总访问量:</span>
          <span className="col-span-2 justify-self-end">699747</span>
        </div>
      </CardLayout>
    </div>
  );
}

export default WebInfor;
