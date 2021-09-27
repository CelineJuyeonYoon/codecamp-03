// import "../styles/globals.css";
import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { initializeApp } from "firebase/app";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyBwwf_WStsYftMXrbP2ree31D1TLI56Rf0",
  authDomain: "codecamp-celine.firebaseapp.com",
  projectId: "codecamp-celine",
  storageBucket: "codecamp-celine.appspot.com",
  messagingSenderId: "1071065260459",
  appId: "1:1071065260459:web:c06da6e3f203df61d7b2ee",
  measurementId: "G-9YECM0DQQ6"
});

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <Global styles={globalStyles} />
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
