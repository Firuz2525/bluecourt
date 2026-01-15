import "../styles/globals.css";
import { createContext, useState } from "react";

export const StatusAdmin = createContext();
function MyApp({ Component, pageProps }) {
  const [ok, setOk] = useState(false);
  return (
    <>
      <StatusAdmin.Provider value={{ ok, setOk }}>
        <Component {...pageProps} />
      </StatusAdmin.Provider>
    </>
  );
}

export default MyApp;
