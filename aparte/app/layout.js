import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  SignUp,
  UserButton,
} from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aparte",
  description: "A Real Estate Web App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Provider>
            <Toaster />
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
