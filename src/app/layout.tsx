import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import BlurFade from "@/components/magicui/blur-fade";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const BLUR_FADE_DELAY = 0.04;

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-slate-950 font-sans antialiased max-w-6xl mx-auto py-12 sm:py-24 md:px-6 relative",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            {children}

            <section id="contact" className="mt-10 pb-20">
              <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
                <BlurFade delay={BLUR_FADE_DELAY * 16}>
                  <div className="space-y-5">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      Get in Touch
                    </h2>
                    <div className="flex gap-4 justify-around flex-wrap text-sm text-pretty text-muted-foreground">
                      <div>
                        {/* <Mail className="w-[20px]" /> */}
                        <a
                          href="mailto:patel.nishant21@gmail.com"
                          className="hover:text-blue-500 transition-all"
                        >
                          patel.nishant21@gmail.com
                        </a>
                      </div>
                      <div>
                        {/* <Phone className="w-[20px]" /> */}
                        <a
                          href="http://wa.me/+919039625322"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-500 transition-all"
                        >
                          +91 9039625322
                        </a>
                      </div>
                      <div>
                        {/* <Github className="w-[20px]" /> */}
                        <a
                          href="https://github.com/Nishant251993"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-500 transition-all"
                        >
                          Github
                        </a>
                      </div>
                      <div>
                        {/* <Linkedin className="w-[20px]" /> */}
                        <a
                          href="https://www.linkedin.com/in/nishant-patel-80a48113b/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-500 transition-all"
                        >
                          Linkedin
                        </a>
                      </div>
                      <div>
                        {/* <Globe className="w-[20px]" /> */}
                        <a
                          href="https://webexpe.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-500 transition-all"
                        >
                          Webexpe
                        </a>
                      </div>
                    </div>
                  </div>
                </BlurFade>
              </div>
            </section>
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
