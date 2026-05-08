import "../styles/globals.css";
import { useState, createContext } from "react";
import { useRouter } from "next/router";
import { NextIntlClientProvider } from "next-intl";

export const StatusAdmin = createContext();

export default function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const [ok, setOk] = useState(false);

  return (
    <NextIntlClientProvider locale={locale} messages={pageProps.messages}>
      <StatusAdmin.Provider value={{ ok, setOk }}>
        <Component {...pageProps} />
      </StatusAdmin.Provider>
    </NextIntlClientProvider>
  );
}
