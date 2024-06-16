import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const { userId, name, email, role, loginId, specialId } = credentials;
                const user = { userId: userId, name: name, email: email, role: role, loginId: loginId, specialId: specialId };
                return user;
            }
        })
    ],

    callbacks: {
        async jwt({ token, user, }) {
            if (user) {
                token.userId = user.userId;
                token.role = user.role;
                token.loginId = user.loginId;
                token.specialId = user.specialId;
            }
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user.userId = token.userId;
                session.user.role = token.role;
                session.user.loginId = token.loginId;
                session.user.specialId = token.specialId;
            }
            return session;
        }
    },

    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/"
    }

};