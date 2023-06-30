import { countArticleByCategoryId } from '@/dao/ArticleDao';
import { searchCategoryAsPage } from '@/dao/CategoryDao';
import { NextRequest, NextResponse } from 'next/server';
import dayjs from 'dayjs';

interface CategoryPageItem extends BasePageItem {
  name: string;
  articleCount: number;
  createTime: string;
}

export async function GET(request: NextRequest) {
  const keyword = request.nextUrl.searchParams.get('keyword') || '';
  const page = Number(request.nextUrl.searchParams.get('page') || 1);
  const limit = Number(request.nextUrl.searchParams.get('limit') || 10);

  const { count, data } = await searchCategoryAsPage({ keyword, page, limit });
  const categoryIds = data.map((item) => item.id);

  const articleCountsByCategoryId = await countArticleByCategoryId(categoryIds);
  const tempMap: { [key: number]: number } = {};
  articleCountsByCategoryId.forEach((item) => {
    if (item.categoryId !== null) {
      tempMap[item.categoryId] = item._count._all;
    }
  });

  const list: CategoryPageItem[] = data.map((item) => {
    return {
      id: String(item.id),
      name: item.categoryName,
      articleCount: tempMap[item.id] || 0,
      createTime: dayjs(item.createTime).format('YYYY-MM-DD HH:mm:ss'),
    };
  });

  return NextResponse.json({ total: count, list });
}
