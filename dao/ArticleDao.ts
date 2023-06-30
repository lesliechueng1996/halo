import prisma from '@/lib/db';

export async function countArticleByCategoryId(categoryIds?: number[]) {
  if (!categoryIds) {
    return await prisma.article.groupBy({
      by: ['categoryId'],
      _count: {
        _all: true,
      },
    });
  }

  return await prisma.article.groupBy({
    by: ['categoryId'],
    _count: {
      _all: true,
    },
    having: {
      categoryId: {
        in: categoryIds,
      },
    },
  });
}

export async function removeSpecifiedCategory(categoryId: number) {
  await prisma.article.updateMany({
    where: {
      categoryId,
    },
    data: {
      categoryId: null,
    },
  });
}
