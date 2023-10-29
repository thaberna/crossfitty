import { Josefin_Sans } from "next/font/google";
import Header from "../components/Header";
import Infobar from "../components/Infobar";
import "./globals.css";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Crossfitty",
  description: "Crossfit Benchmarks Workouts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#202939] ${josefin.className}`}>
        <Header />
        <Infobar />
        <main>{children}</main>
      </body>
    </html>
  );
}
