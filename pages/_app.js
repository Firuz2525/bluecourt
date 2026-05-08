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
// import "../styles/globals.css";
// import { createContext, useState } from "react";
// import { useRouter } from "next/router";
// import { NextIntlClientProvider } from "next-intl";
// import Head from "next/head";

// export const StatusAdmin = createContext();

// function MyApp({ Component, pageProps }) {
//   const router = useRouter();
//   const [ok, setOk] = useState(false);

//   // If messages are missing for some reason, provide an empty object
//   // to prevent the Provider from crashing.
//   const messages = pageProps.messages || {};

//   return (
//     <NextIntlClientProvider
//       locale={router.locale || "en"}
//       messages={messages}
//       // This prop helps prevent the specific error you are seeing
//       onError={(error) => console.error("intl error:", error)}
//     >
//       <StatusAdmin.Provider value={{ ok, setOk }}>
//         <Head>
//           <title>Bluecourt</title>
//           <meta
//             name="viewport"
//             content="width=device-width, initial-scale=1.0"
//           />
//           <meta name="description" content="Bluecourt hotel" />
//         </Head>
//         <Component {...pageProps} />
//       </StatusAdmin.Provider>
//     </NextIntlClientProvider>
//   );
// }
// export default MyApp;
