'use client';

import { useSession } from 'next-auth/react';
import NextImage from 'next/image';
import { useForm } from 'react-hook-form';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { uploadFile } from '@/lib/utils';
import CutAvatar from './CutAvatar';
import useUserInfo from '@/hooks/userUserInfo';

type Inputs = {
  nickname: string;
  info: string;
  website: string;
};

function UserInfoChange() {
  const { data: session } = useSession();

  const { register, handleSubmit, setValue } = useForm<Inputs>();
  const uploadFileRef = useRef<HTMLInputElement | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [imageDataUrl, setImageDataUrl] = useState<string>('');

  const { user, avatarUrl, error } = useUserInfo();

  useEffect(() => {
    setValue('nickname', user?.nickname);
    setValue('info', user?.intro);
    setValue('website', user?.website);
  }, [user, setValue]);

  const onSubmit = async (data: Inputs) => {
    if (!data.nickname) {
      toast.error('昵称不能为空');
      return;
    }

    try {
      const res = await fetch(`/api/user-info/${session?.user.userId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          nickname: data.nickname,
          intro: data.info,
          website: data.website,
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        toast.error(error.msg);
      } else {
        toast.success('修改成功');
      }
    } catch (e) {
      toast.error('系统异常');
    }
  };

  const uploadAvatar = async (file: Blob) => {
    try {
      const fetcher = uploadFile(
        file,
        `/api/user-info/${session?.user.userId}/avatar`
      );
      const res = await fetcher;

      if (!res.ok) {
        const error = await res.json();
        toast.error(error.msg);
      } else {
        toast.success('上传成功');
      }
    } catch (e) {
      toast.error('系统异常');
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageDataUrl(reader.result as string);
        dialogRef.current!.showModal();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDialogClosed = async () => {
    if (dialogRef.current?.returnValue) {
      // base64 to blob
      const dataUrl = dialogRef.current.returnValue;
      const arr = dataUrl.split(',');
      const mime = arr[0].match(/:(.*?);/)![1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      const file = new Blob([u8arr], { type: mime });
      await uploadAvatar(file);
    }
  };

  return (
    <div className="flex items-center">
      <div>
        <NextImage
          src={avatarUrl}
          alt="avatar"
          width={100}
          height={100}
          className="cursor-pointer border-dashed border-[1px] border-neutral-400 p-[0.5px] hover:border-sky-400 hover:border-2"
          onClick={() => {
            uploadFileRef.current!.value = '';
            uploadFileRef.current!.click();
          }}
        />
        <input
          type="file"
          className="hidden"
          ref={uploadFileRef}
          onChange={handleFileChange}
          accept="image/*"
        />
      </div>
      <div>
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center gap-5">
            <label className="block w-32 text-right" htmlFor="nickname">
              昵称
            </label>
            <input
              className="px-3 py-2 outline-none border shadow-sm rounded-md w-96"
              type="text"
              id="nickname"
              {...register('nickname')}
            />
          </div>
          <div className="flex items-center gap-5">
            <label className="block w-32 text-right" htmlFor="info">
              个人简介
            </label>
            <input
              className="px-3 py-2 outline-none border shadow-sm rounded-md w-96"
              type="text"
              id="info"
              {...register('info')}
            />
          </div>
          <div className="flex items-center gap-5">
            <label className="block w-32 text-right" htmlFor="website">
              个人网站
            </label>
            <input
              className="px-3 py-2 outline-none border shadow-sm rounded-md w-96"
              type="text"
              id="website"
              {...register('website')}
            />
          </div>
          <div className="flex items-center gap-5">
            <div className="w-32"></div>
            <button className="px-5 py-2 bg-blue-500 text-white rounded-md">
              修改
            </button>
          </div>
        </form>
      </div>

      <dialog
        ref={dialogRef}
        aria-modal
        onClose={handleDialogClosed}
        className="w-full h-full"
      >
        <CutAvatar imageDataUrl={imageDataUrl} dialogRef={dialogRef} />
      </dialog>
    </div>
  );
}

export default UserInfoChange;
