// import "../styles/globals.css";
import "antd/dist/antd.css";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { Global } from "@emotion/react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error"; // 에러가 났을 때 캐치해주는 기능

import Layout from "../src/components/commons/layout";
import { createUploadLink } from "apollo-upload-client";
import { createContext, useEffect, useState } from "react";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

export const GlobalContext = createContext(null);

function MyApp({ Component, pageProps }: any) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const value: any = {
    accessToken,
    setAccessToken,
    userInfo,
    setUserInfo,
  };

  useEffect(() => {
    // const token = localStorage.getItem("accessToken") || "";
    // setAccessToken(token);
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
  }, []);

  const errorLink = onError(
    // 객체 구조분해할당 graphQL 에러, 실행했던 쿼리, 재전송(요청)할 forward
    ({ graphQLErrors, operation, forward }) => {
      if (graphQLErrors) {
        for (const err of graphQLErrors) {
          if (err.extensions?.code === "UNAUTHENTICATED") {
            // 기존의 header 정보 operation.getContext().headers
            // header에 authorization 관련부분만 바꾸기
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                authorization: `Bearer ${getAccessToken(setAccessToken)}`,
              },
            });
            // 실패한 쿼리 재요청
            return forward(operation);
          }
        }
      }
    }
  );

  const uploadLink = createUploadLink({
    uri: "https://backend03.codebootcamp.co.kr/graphql15",
    headers: { authorization: `Bearer ${accessToken}` },
    credentials: "include", // 중요한 정보들을 포함시켜줘. 이거 해야 쿠키에 저장됨
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
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
