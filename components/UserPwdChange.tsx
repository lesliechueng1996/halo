import { getSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

type Inputs = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

function UserPwdChange() {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    if (!data.oldPassword) {
      toast.error('请输入旧密码');
      return;
    }
    if (!data.newPassword) {
      toast.error('请输入新密码');
      return;
    }

    if (data.newPassword !== data.confirmPassword) {
      toast.error('两次密码输入不一致');
      return;
    }

    const session = await getSession();

    try {
      const res = await fetch(`/api/user-auth/${session?.user.authId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          oldPassword: data.oldPassword,
          newPassword: data.newPassword,
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        toast.error(error.msg);
      } else {
        toast.success('修改成功');
        reset();
      }
    } catch (e) {
      toast.error('系统异常');
    }
  };

  return (
    <div>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center gap-5">
          <label className="block w-32 text-right" htmlFor="oldPassword">
            旧密码
          </label>
          <input
            className="px-3 py-2 outline-none border shadow-sm rounded-md w-96"
            type="password"
            id="oldPassword"
            {...register('oldPassword')}
          />
        </div>
        <div className="flex items-center gap-5">
          <label className="block w-32 text-right" htmlFor="newPassword">
            新密码
          </label>
          <input
            className="px-3 py-2 outline-none border shadow-sm rounded-md w-96"
            type="password"
            id="newPassword"
            {...register('newPassword')}
          />
        </div>
        <div className="flex items-center gap-5">
          <label className="block w-32 text-right" htmlFor="confirmPassword">
            确认密码
          </label>
          <input
            className="px-3 py-2 outline-none border shadow-sm rounded-md w-96"
            type="password"
            id="confirmPassword"
            {...register('confirmPassword')}
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
  );
}

export default UserPwdChange;
