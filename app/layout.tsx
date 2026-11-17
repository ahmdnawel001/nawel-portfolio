import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahammed Nawel | Cloud & DevOps Portfolio",
  description: "Portfolio of Ahammed Nawel — aspiring Cloud and DevOps professional.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}