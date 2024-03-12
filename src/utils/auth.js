import NextAuth, {getServerSession} from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../libs/mongodb";


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    })
    // ...add more providers here
  ],
  adapter: MongoDBAdapter(clientPromise),
}
export default NextAuth(authOptions);

export const getAuthSession = () => getServerSession(authOptions);


