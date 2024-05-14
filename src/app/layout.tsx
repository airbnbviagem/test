import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hospedagens Especiais",
  description: "Voucher especial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`flex flex-col items-center overflow-x-hidden ${inter.className}`}>
        <main >
          {children}
        </main>
      </body>
    </html>
  );
}
