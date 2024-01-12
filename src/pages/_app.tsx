import "@/styles/globals.css";

import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Mulish } from "next/font/google";

import Footer from "@/components/Footer/Footer";

const mulish = Mulish({ weight: ["400", "700"], style: ["normal", "italic"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <div className="relative min-h-screen">
      <style global jsx>{`
        html {
          font-family: ${mulish.style.fontFamily};
        }
      `}</style>
      <div className="px-5 py-0 md:p-20">
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </div>
      <Footer />
    </div>
  );
}
