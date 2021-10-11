// import "../styles/globals.css";
import "antd/dist/antd.css";
import { globalStyles } from "./src/commons/styles/globalStyles";
import { Global } from "@emotion/react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import Layout from "./src/components/commons/layout";
import { createUploadLink } from "apollo-upload-client";
import { createContext, useEffect, useState } from "react";

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
export const GlobalContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState("");

  const value = {
    accessToken,
    setAccessToken,
    userInfo,
    setUserInfo,
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken") || "";
    setAccessToken(token);
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={value}>
      <Global styles={globalStyles} />
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
