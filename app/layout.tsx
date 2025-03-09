import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import RootHeader from "./header";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { shadesOfPurple } from "@clerk/themes";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  // authors: [
  //   {
  //     name: "",//! our company name
  //     url: "",//! our company website url
  //   },
  // ],
  // creator: "", //! our company name
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{baseTheme:shadesOfPurple}}>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div >
              <div className="grid-background"></div>
              <main className="min-h-screen container" >
                <RootHeader />
                {children}
              </main>
              <div className="p-10 text-center bg-gray-800 mt-10">
                Made with 💗 by Tamilarasan
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
