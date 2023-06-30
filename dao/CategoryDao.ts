import prisma from '@/lib/db';

export const countCategoryByName = async (name: string) => {
  return await prisma.category.count({
    where: {
      categoryName: name,
    },
  });
};

export const createCategory = async (name: string) => {
  return await prisma.category.create({
    data: {
      categoryName: name,
      createTime: new Date(),
    },
  });
};

export const searchCategoryAsPage = async (req: SearchPageRequest) => {
  const { keyword, page, limit } = req;
  const offset = (page - 1) * limit;

  const count = await prisma.category.count({
    where: {
      categoryName: {
        contains: keyword,
      },
    },
  });

  const data = await prisma.category.findMany({
    where: {
      categoryName: {
        contains: keyword,
      },
    },
    skip: offset,
    take: limit,
  });

  return {
    count,
    data,
  };
};

export const deleteCategoryById = async (id: number) => {
  return await prisma.category.delete({
    where: {
      id,
    },
  });
};
