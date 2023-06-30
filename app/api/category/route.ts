import { countCategoryByName, createCategory } from '@/dao/CategoryDao';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name } = await request.json();
  if (!name) {
    return NextResponse.json({ msg: '分类名不能为空' }, { status: 400 });
  }

  const count = await countCategoryByName(name);
  if (count > 0) {
    return NextResponse.json({ msg: '分类名已存在' }, { status: 400 });
  }

  const category = await createCategory(name);
  return NextResponse.json(category);
}
