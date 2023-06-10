import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getUserAuthByUsername, getUserAuthById } from '@/dao/UserAuthDao';
import { encryptPwd } from '@/lib/utils';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials) {
          return null;
        }
        const { username, password } = credentials;
        const userAuth = await getUserAuthByUsername(username);
        const encryptedPwd = encryptPwd(password, username);

        if (encryptedPwd === userAuth?.password) {
          console.log('登陆成功');
          return {
            id: `${userAuth.id}`,
          };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const userAuthId = user.id;
        const userAuth = await getUserAuthById(Number(userAuthId));

        token.authId = userAuthId;
        token.userId = userAuth!.userInfoId;
      }
      return token;
    },
    async session({ session, user, token }) {
      session.user!.authId = token.authId as number;
      session.user!.userId = token.userId as number;
      return session;
    },
  },
  pages: {
    signIn: '/console/login',
  },
};
