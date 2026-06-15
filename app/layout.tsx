import "./globals.css";
import Navbar from "@/components/layout/navbar";

export const metadata = {
  title: "My Portfolio",
  description: "Modern portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
