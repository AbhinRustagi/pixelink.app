import { GlobalStyles } from "@/theme/global.style";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { ThemeContextProvider } from "@/context/ThemeContext";

const cache = createCache({ key: "pi" });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <ThemeContextProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeContextProvider>
    </CacheProvider>
  );
}
