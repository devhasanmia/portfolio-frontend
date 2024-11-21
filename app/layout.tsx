import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Spotlight } from "@/components/ui/Spotlight";

export const metadata: Metadata = {
  title: "MD. HASAN MIA || PORTFOLIO",
  description: "MD. HASAN MIA's portfolio showcasing my work and experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body className="overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div>
            <div>
              <Spotlight
                className="absolute -top-40 -left-10 md:-left-32 md:-top-20 h-screen md:h-[60vh] lg:h-[80vh]"
                fill="white"
              />
              <Spotlight
                className="absolute h-[80vh] w-[50vw] top-10 left-full md:left-[50vw] lg:left-[40vw]"
                fill="purple"
              />
              <Spotlight
                className="absolute left-80 top-28 h-[80vh] w-[50vw] md:left-[30vw] lg:left-[25vw]"
                fill="blue"
              />
              <div className="bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-5 md:px-10">
                <div className="max-w-7xl w-full">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
