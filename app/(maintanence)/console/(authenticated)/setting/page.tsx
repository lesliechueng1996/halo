'use client';

import UserInfoChange from '@/components/UserInfoChange';
import UserPwdChange from '@/components/UserPwdChange';
import { useState } from 'react';

function SettingPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="space-x-5 mb-2">
        <span
          className={`cursor-pointer ${
            activeIndex === 0 ? 'text-sky-500' : ''
          }`}
          onClick={() => handleTabClick(0)}
        >
          修改信息
        </span>
        <span
          className={`cursor-pointer ${
            activeIndex === 1 ? 'text-sky-500' : ''
          }`}
          onClick={() => handleTabClick(1)}
        >
          修改密码
        </span>
      </div>
      <div className="w-full bg-slate-300 h-[2px]">
        <div
          className="w-16 bg-sky-500 h-[2px] transition-all duration-300 ease-in-out"
          style={{ transform: `translate(${activeIndex * 5.25}rem)` }}
        ></div>
      </div>
      <div className="mt-5">
        {activeIndex === 0 ? <UserInfoChange /> : <UserPwdChange />}
      </div>
    </div>
  );
}

export default SettingPage;
