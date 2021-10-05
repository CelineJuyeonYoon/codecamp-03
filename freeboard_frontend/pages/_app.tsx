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

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

function MyApp({ Component, pageProps }) {
  const uploadLink = createUploadLink({
    uri: "http://backend02.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
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
