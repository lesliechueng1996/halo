import prisma from '@/lib/db';

export const getUserInfoById = (id: number) => {
  return prisma.userInfo.findUnique({
    where: {
      id,
    },
  });
};

export const updateNicknameAndIntroAndWebsiteById = (
  data: {
    nickname: string;
    intro?: string;
    website?: string;
  },
  id: number
) => {
  return prisma.userInfo.update({
    where: {
      id,
    },
    data: {
      nickname: data.nickname,
      intro: data.intro,
      website: data.website,
      updateTime: new Date(),
    },
  });
};

export const updateAvatarById = (avatar: string, id: number) => {
  return prisma.userInfo.update({
    where: {
      id,
    },
    data: {
      avatar,
      updateTime: new Date(),
    },
  });
};
