import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "FOCO - Screen Time Control & App Blocker | Take Back Control",
    description: "FOCO is your personal screen time management app. Set daily limits, block distracting apps, and take back control of your time. Stay focused and improve productivity by regulating app usage.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider attribute="class">
                    <Navbar />
                    <div>{children}</div>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
