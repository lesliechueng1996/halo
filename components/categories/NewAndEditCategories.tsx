'use client';

import { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

type Props = {
  closeModal: (data?: any) => void;
  categoryId?: string;
};

function NewAndEditCategories({ closeModal, categoryId }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [errTip, setErrTip] = useState('');

  if (categoryId) {
    // TODO edit
  }

  const handleCreateCategory = async () => {
    const name = inputRef.current?.value;
    if (!name) {
      setErrTip('分类名不能为空');
      return;
    }

    try {
      const response = await fetch('/api/category', {
        method: 'POST',
        body: JSON.stringify({ name }),
      });
      const body = await response.json();
      if (response.status !== 200) {
        setErrTip(body.msg);
        return;
      }
      toast.success('创建成功');
      closeModal(body);
    } catch (e) {
      toast.error('创建失败');
    }
  };

  return (
    <div>
      <div className="pl-5 mb-10">
        <div className="flex items-center">
          <div className="w-20">分类名</div>
          <input
            type="text"
            className="default-input"
            ref={inputRef}
            onFocus={() => setErrTip('')}
          />
        </div>
        {errTip && (
          <div>
            <span className="pl-20 text-red-500 text-xs">{errTip}</span>
          </div>
        )}
      </div>
      <div className="flex justify-end gap-2">
        <button className="white-button" onClick={() => closeModal()}>
          取消
        </button>
        <button className="blue-button" onClick={handleCreateCategory}>
          确定
        </button>
      </div>
    </div>
  );
}

export default NewAndEditCategories;
