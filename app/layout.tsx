import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/lib/ThemeProvider";
import { IntroAnimation } from "@/components/animation/IntroAnimation";
import { SmoothScroll } from "@/components/animation/SmoothScroll";
import { FloatingActions } from "@/components/common/FloatingActions";
import Script from "next/script";
 

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
      <head>
      <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "uvbgix6l49");
            `,
          }}
        />
      </head>
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
