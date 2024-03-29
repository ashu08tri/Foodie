import { Inter } from "next/font/google";
import Notification from "@/components/Notification";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import Providers from "@/redux/Providers";
import QueryProvider from "@/components/QueryProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Foodie",
  description: "Welcome to THE FOODIE RESTURANT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ overflowX: 'hidden' }}>
        <AuthProvider>
          <Notification />
          <Providers>
            <QueryProvider>
              <NavBar />
              {children}
              <Footer />
            </QueryProvider>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
