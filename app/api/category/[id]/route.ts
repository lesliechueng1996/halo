import { removeSpecifiedCategory } from '@/dao/ArticleDao';
import { deleteCategoryById } from '@/dao/CategoryDao';
import { NextResponse } from 'next/server';

type ParamsType = { id: string };

export async function DELETE(
  request: Request,
  { params }: { params: ParamsType }
) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ msg: 'id 必须是数字' }, { status: 400 });
  }

  await deleteCategoryById(id);
  await removeSpecifiedCategory(id);

  return NextResponse.json({ msg: '删除成功' });
}
