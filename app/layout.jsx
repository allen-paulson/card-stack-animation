import { Space_Grotesk } from "next/font/google";
import "./globals.scss";
import LenisWrapper from "@/components/LenisWrapper/LenisWrapper";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  title: "Stacking Animation",
  description: "Card stacking animation using framer motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased`}>
        <LenisWrapper>{children}</LenisWrapper>
      </body>
    </html>
  );
}
