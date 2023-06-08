import prisma from '@/lib/db';

export const getUserAuthByUsername = async (username: string) => {
  return await prisma.userAuth.findUnique({
    where: {
      username,
    },
  });
};
