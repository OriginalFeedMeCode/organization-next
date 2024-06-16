import { Raleway } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "AuthProvider";

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
