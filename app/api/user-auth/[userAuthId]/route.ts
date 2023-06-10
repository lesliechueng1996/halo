import { getUserAuthById, updatePasswordById } from '@/dao/UserAuthDao';
import { NextResponse } from 'next/server';
import { encryptPwd } from '@/lib/utils';

export async function PATCH(
  request: Request,
  { params }: { params: { userAuthId: string } }
) {
  const body = await request.json();
  if (!body.oldPassword) {
    return NextResponse.json({ msg: '旧密码不能为空' }, { status: 400 });
  }
  if (!body.newPassword) {
    return NextResponse.json({ msg: '新密码不能为空' }, { status: 400 });
  }

  const userAuth = await getUserAuthById(Number(params.userAuthId));
  if (!userAuth) {
    return NextResponse.json({ msg: '未找到用户' }, { status: 404 });
  }

  const encryptedPwd = encryptPwd(body.oldPassword, userAuth.username);
  if (encryptedPwd !== userAuth.password) {
    return NextResponse.json({ msg: '旧密码错误' }, { status: 400 });
  }

  try {
    await updatePasswordById(
      Number(params.userAuthId),
      encryptPwd(body.newPassword, userAuth.username)
    );
    return NextResponse.json(null);
  } catch (e: any) {
    if (e.code === 'P2025') {
      return NextResponse.json({ msg: '找不到用户' }, { status: 404 });
    }
    return NextResponse.json({ msg: '修改密码失败' }, { status: 500 });
  }
}
