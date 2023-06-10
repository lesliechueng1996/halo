import prisma from '@/lib/db';

export const getUserAuthByUsername = async (username: string) => {
  return await prisma.userAuth.findUnique({
    where: {
      username,
    },
  });
};

export const getUserAuthById = async (id: number) => {
  return await prisma.userAuth.findUnique({
    where: {
      id,
    },
  });
};

export const updatePasswordById = async (id: number, password: string) => {
  return await prisma.userAuth.update({
    where: {
      id,
    },
    data: {
      password,
    },
  });
};
