import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/lib/ThemeProvider";
import { IntroAnimation } from "@/components/animation/IntroAnimation";
import { SmoothScroll } from "@/components/animation/SmoothScroll";
import { FloatingActions } from "@/components/common/FloatingActions";
 

export const metadata: Metadata = {
  title: "NOUS INFOTECH | Premium Creative Agency",
  description: "High-performance digital experiences and strategic branding.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={true}>
          <IntroAnimation>
          <SmoothScroll>
            <Navbar /> 
            <main>{children}</main>
            <Footer />
            <FloatingActions />
          </SmoothScroll>
          </IntroAnimation>
        </ThemeProvider>
      </body>
    </html>
  );
}
