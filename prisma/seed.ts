import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // t_user_info
  await prisma.userInfo.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      email: '392999354@qq.com',
      nickname: 'Leslie',
      avatar: '',
      intro: '',
      website: 'https://dev-toys.vercel.app/',
      isDisable: false,
      createTime: new Date(),
    },
  });

  // t_user_auth
  await prisma.userAuth.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      userInfoId: 1,
      username: 'leslie',
      password: 'a941c56f63bf11db29816d2d9e377749',
      loginType: 1,
      createTime: new Date(),
    },
  });
}

// async function main() {
//   // t_about
//   await prisma.about.upsert({
//     where: {
//       id: 1,
//     },
//     update: {},
//     create: {
//       id: 1,
//       content: '{"content":"this is about"}',
//       createTime: new Date(),
//     },
//   });
//   console.log('t_about data init success');

//   // t_menu
//   const menus = [
//     {
//       id: 1,
//       name: '首页',
//       path: '/',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 1,
//       prantId: null,
//       isHidden: 0,
//     },
//     {
//       id: 2,
//       name: '文章管理',
//       path: '/article-submenu',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 2,
//       prantId: null,
//       isHidden: 0,
//     },
//     {
//       id: 3,
//       name: '消息管理',
//       path: '/message-submenu',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 3,
//       prantId: null,
//       isHidden: 0,
//     },
//     {
//       id: 4,
//       name: '系统管理',
//       path: '/system-submenu',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 5,
//       prantId: null,
//       isHidden: 0,
//     },
//     {
//       id: 5,
//       name: '个人中心',
//       path: '/setting',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 7,
//       prantId: null,
//       isHidden: 0,
//     },
//     {
//       id: 6,
//       name: '发布文章',
//       path: '/articles',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 1,
//       prantId: 2,
//       isHidden: 0,
//     },
//     {
//       id: 7,
//       name: '修改文章',
//       path: '/articles/*',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 2,
//       prantId: 2,
//       isHidden: 0,
//     },
//     {
//       id: 8,
//       name: '文章列表',
//       path: '/article-list',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 3,
//       prantId: 2,
//       isHidden: 0,
//     },
//     {
//       id: 9,
//       name: '分类管理',
//       path: '/categories',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 4,
//       prantId: 2,
//       isHidden: 0,
//     },

//     {
//       id: 10,
//       name: '标签管理',
//       path: '/tags',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 5,
//       prantId: 2,
//       isHidden: 0,
//     },
//     {
//       id: 11,
//       name: '评论管理',
//       path: '/comments',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 1,
//       prantId: 3,
//       isHidden: 0,
//     },
//     {
//       id: 13,
//       name: '用户列表',
//       path: '/users',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 1,
//       prantId: 202,
//       isHidden: 0,
//     },
//     {
//       id: 14,
//       name: '角色管理',
//       path: '/roles',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 2,
//       prantId: 213,
//       isHidden: 0,
//     },
//     {
//       id: 15,
//       name: '接口管理',
//       path: '/resources',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 2,
//       prantId: 213,
//       isHidden: 0,
//     },
//     {
//       id: 16,
//       name: '菜单管理',
//       path: '/menus',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 2,
//       prantId: 213,
//       isHidden: 0,
//     },
//     {
//       id: 17,
//       name: '友链管理',
//       path: '/links',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 3,
//       prantId: 4,
//       isHidden: 0,
//     },
//     {
//       id: 18,
//       name: '关于我',
//       path: '/about',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 4,
//       prantId: 4,
//       isHidden: 0,
//     },
//     {
//       id: 19,
//       name: '日志管理',
//       path: '/log-submenu',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 6,
//       prantId: 0,
//       isHidden: 0,
//     },
//     {
//       id: 20,
//       name: '操作日志',
//       path: '/operation/log',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 1,
//       prantId: 19,
//       isHidden: 0,
//     },
//     {
//       id: 201,
//       name: '在线用户',
//       path: '/online/users',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 7,
//       prantId: 202,
//       isHidden: 0,
//     },
//     {
//       id: 202,
//       name: '用户管理',
//       path: '/users-submenu',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 4,
//       prantId: null,
//       isHidden: 0,
//     },
//     {
//       id: 205,
//       name: '相册管理',
//       path: '/album-submenu',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 5,
//       prantId: null,
//       isHidden: 0,
//     },
//     {
//       id: 206,
//       name: '相册列表',
//       path: '/album',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 1,
//       prantId: 205,
//       isHidden: 0,
//     },

//     {
//       id: 208,
//       name: '照片管理',
//       path: '/albums/:albumId',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 2,
//       prantId: 205,
//       isHidden: 0,
//     },
//     {
//       id: 209,
//       name: '定时任务',
//       path: '/quartz',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 2,
//       prantId: 4,
//       isHidden: 0,
//     },
//     {
//       id: 210,
//       name: '照片回收站',
//       path: '/albums/trash',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 3,
//       prantId: 205,
//       isHidden: 0,
//     },
//     {
//       id: 213,
//       name: '权限管理',
//       path: '/permission-submenu',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 4,
//       prantId: null,
//       isHidden: 0,
//     },
//     {
//       id: 214,
//       name: '网站管理',
//       path: '/website',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 1,
//       prantId: 4,
//       isHidden: 0,
//     },

//     {
//       id: 220,
//       name: '定时任务日志',
//       path: '/quartz/log/:quartzId',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 2,
//       prantId: 19,
//       isHidden: 0,
//     },
//     {
//       id: 221,
//       name: '说说管理',
//       path: '/talk-submenu',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 3,
//       prantId: null,
//       isHidden: 0,
//     },
//     {
//       id: 222,
//       name: '说说列表',
//       path: '/talk-list',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 1,
//       prantId: 221,
//       isHidden: 0,
//     },
//     {
//       id: 223,
//       name: '发布说说',
//       path: '/talks',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 2,
//       prantId: 221,
//       isHidden: 0,
//     },
//     {
//       id: 224,
//       name: '修改说说',
//       path: '/talks/:talkId',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 3,
//       prantId: 221,
//       isHidden: 0,
//     },
//     {
//       id: 225,
//       name: '异常日志',
//       path: '/exception/log',
//       component: '',
//       icon: '',
//       createTime: new Date(),
//       orderNum: 1,
//       prantId: 19,
//       isHidden: 0,
//     },
//   ];

//   menus.forEach(async (menu) => {
//     await prisma.menu.upsert({
//       where: {
//         id: menu.id,
//       },
//       update: {},
//       create: {
//         ...menu,
//       },
//     });
//   });
// }

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
