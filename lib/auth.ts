import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getUserAuthByUsername } from '@/dao/UserAuthDao';
import md5 from 'md5';

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
        const encryptPwd = md5(`${password}{${username}}`);

        if (encryptPwd === userAuth?.password) {
          console.log('login success');
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
};
