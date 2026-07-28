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
  title: "NOUS INFOTECH | Technology Partner for Digital Growth",
  description:
    "Long-term technology partner helping businesses digitalize, automate workflows, and unify scattered operations—with custom software, AI integration, and modern digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M3DTHRNM');
          `}
        </Script>

        {/* Microsoft Clarity */}
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

      <body className="antialiased bg-background text-foreground transition-colors duration-300">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M3DTHRNM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={true}
        >
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
