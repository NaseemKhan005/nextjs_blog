import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: `${process.env.NEXT_PUBLIC_AUTH_GOOGLE_ID}`,
			clientSecret: `${process.env.NEXT_PUBLIC_AUTH_GOOGLE_SECRET}`,
		}),
		GithubProvider({
			clientId: `${process.env.GITHUB_ID}`,
			clientSecret: `${process.env.GITHUB_SECRET}`,
		}),
	],
};
