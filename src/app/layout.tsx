import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const generalSans = localFont({
  src: [
    {
      path: "./fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Designer Portfolio",
  description: "Swiss-inspired designer portfolio landing page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${generalSans.variable} ${generalSans.className} antialiased`}
        suppressHydrationWarning
      >
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
  if (typeof c[a] !== "function") {
    c[a]=function(){(c[a].q=c[a].q||[]).push(arguments)};
  }
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "vfppfaj1qm");`}
        </Script>
        {children}
      </body>
    </html>
  );
}
