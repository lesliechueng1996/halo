import {
  getUserInfoById,
  updateNicknameAndIntroAndWebsiteById,
} from '@/dao/UserInfoDao';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { userInfoId: number } }
) {
  const userInfo = await getUserInfoById(Number(params.userInfoId));
  if (!userInfo) {
    return NextResponse.json({ msg: '未找到用户' }, { status: 404 });
  }
  return NextResponse.json(userInfo);
}

export async function PATCH(
  request: Request,
  { params }: { params: { userInfoId: string } }
) {
  const body = await request.json();
  const { nickname, intro, website } = body;
  if (!nickname) {
    return NextResponse.json({ msg: '昵称不可为空' }, { status: 400 });
  }

  try {
    await updateNicknameAndIntroAndWebsiteById(
      { nickname, intro, website },
      Number(params.userInfoId)
    );
    return NextResponse.json(null);
  } catch (e: any) {
    if (e.code === 'P2025') {
      return NextResponse.json({ msg: '找不到用户' }, { status: 404 });
    }
    return NextResponse.json({ msg: '更新失败' }, { status: 500 });
  }
}
