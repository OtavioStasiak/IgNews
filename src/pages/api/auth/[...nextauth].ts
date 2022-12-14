import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET_ID,
      authorization: { params: { scope: "openid your_custom_scope" } },

    }),
  ],
  callbacks: {
  },
  secret: "process.env.NEXTAUTH_SECRET",
})