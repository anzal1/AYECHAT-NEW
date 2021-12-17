import "../styles/auth.css";
import "../styles/chats.css";
import "../styles/index.css";

import { ContextProvider } from '../context'

{/* <title>ayechat</title> */}

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
     <Component {...pageProps} />
    </ContextProvider>
  );
}
