import { Inter } from "next/font/google";
import "../globals.css";
import Provider from "@components/Provider";
import TopBar from '@components/TopBar';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome Chat-bot",
  description: "Nex.js 14 Chat App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
            <TopBar/>
             {children}</Provider>
       </body>
    </html>
  );
}
