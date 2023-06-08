'use client';

import { UserIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

interface ILoginForm {
  username: string;
  password: string;
}

function LoginPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginForm>();
  const router = useRouter();

  const onSubmit = async (data: ILoginForm) => {
    const result = await signIn('credentials', {
      ...data,
      redirect: false,
    });

    if (result && result.ok && !result.error) {
      router.replace('/console');
    } else {
      toast.error('用户名密码错误');
    }
  };

  return (
    <div className="w-screen h-screen bg-[url('/images/background.png')] bg-no-repeat bg-cover">
      <div className="bg-neutral-400/50 w-full md:w-[400px] lg:w-[500px] float-right h-screen shadow-md flex flex-col items-center justify-center">
        <div className="w-96 bg-white p-5 rounded-lg">
          <h1 className="font-bold mb-5">管理员登录</h1>
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
              <div className="relative flex items-center">
                <UserIcon className="absolute w-5 h-5 left-2 text-neutral-500/50" />
                <input
                  {...register('username', { required: true })}
                  className="py-2 pr-3 pl-8 border w-full rounded-md"
                  placeholder="用户名"
                />
              </div>
              {errors.username && (
                <span className="text-red-500">用户名不能为空</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <div className="relative flex items-center">
                <LockClosedIcon className="absolute w-5 h-5 left-2 text-neutral-500/50" />
                <input
                  {...register('password', { required: true })}
                  className="py-2 pr-3 pl-8 border w-full rounded-md"
                  type="password"
                  placeholder="密码"
                />
              </div>
              {errors.password && (
                <span className="text-red-500">密码不能为空</span>
              )}
            </div>
            <div>
              <button className="w-full bg-blue-400 text-white py-2 rounded-md">
                登录
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
