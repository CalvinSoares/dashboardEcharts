import axios from "axios";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { User } from "next-auth";

type TypeJWT = {
  sub: string;
  id: number;
  email: string;
  token: string;
  iat: number;
  exp: number;
  jti: string;
};

type TypeUser = {
  id: number;
  email: string;
  access_token: string;
};

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials, req) {
        try {
          const response = await axios.post(
            "http://localhost:3001/auth/login",
            {
              email: credentials?.email,
              password: credentials?.password,
            }
          );

          const user = response.data;

          if (user) {
            return user;
          }

          return null;
        } catch (error) {
          console.error("Error during login:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({
      token,
      user,
    }: {
      token: JWT;
      user: User;
    }): Promise<TypeJWT | JWT> => {
      if (user) {
        token.id = user.id;
      }
      if (user) {
        const data: TypeUser = user as unknown as any;
        return {
          ...token,
          id: data.id,
          email: data.email,
          token: data.access_token,
        } as TypeJWT;
      }
      return token as JWT;
    },
    session: async ({ session, token }: any) => {
      if (token) {
        return {
          ...session,
          user: {
            token: token.token,
          },
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
