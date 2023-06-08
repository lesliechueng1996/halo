import prisma from '@/lib/db';

export const getUserInfoById = (id: number) => {
  return prisma.userInfo.findUnique({
    where: {
      id,
    },
  });
};
