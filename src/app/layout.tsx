import type { Metadata } from "next";
import { Onest, Golos_Text } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
const onest = Onest({ variable: "--font-onest", subsets: ["latin", "cyrillic"], display: "swap", weight: ["400","500","600","700","800"] });
const golos = Golos_Text({ variable: "--font-golos", subsets: ["latin", "cyrillic"], display: "swap", weight: ["400","500","600","700"] });
export const metadata: Metadata = {
  title: "СТУДИЯ ДЕНТ — Стоматологическая клиника · Санкт-Петербург · с 2010",
  description: "Стоматологическая клиника «СТУДИЯ ДЕНТ» в Санкт-Петербурге с 2010 года. 2 филиала, рейтинг 577, 725 отзывов.",
  keywords: ["СТУДИЯ ДЕНТ", "стоматология Санкт-Петербург"],
  authors: [{ name: "Клиника «СТУДИЯ ДЕНТ»" }],
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
  openGraph: { title: "СТУДИЯ ДЕНТ — Стоматологическая клиника в Петербурге с 2010 года", description: "2 филиала · рейтинг 577 · 725 отзывов.", siteName: "СТУДИЯ ДЕНТ", type: "website" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (<html lang="ru" suppressHydrationWarning><body className={`${onest.variable} ${golos.variable} antialiased bg-arkadia-mist text-arkadia-graphite`}>{children}<Toaster /><SonnerToaster position="top-center" theme="light" toastOptions={{ style: { background: "#FFFFFF", color: "#1F2937", border: "1px solid #B45309", borderRadius: "14px", fontFamily: "var(--font-golos)" } }} /></body></html>);
}
