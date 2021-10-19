// import "../styles/globals.css";
import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error"; // 에러가 났을 때 캐치해주는 기능

import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { initializeApp } from "firebase/app";
import { createUploadLink } from "apollo-upload-client";
import { createContext, useEffect, useState } from "react";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";

// import Head from "next/head";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyBwwf_WStsYftMXrbP2ree31D1TLI56Rf0",
  authDomain: "codecamp-celine.firebaseapp.com",
  projectId: "codecamp-celine",
  storageBucket: "codecamp-celine.appspot.com",
  messagingSenderId: "1071065260459",
  appId: "1:1071065260459:web:c06da6e3f203df61d7b2ee",
  measurementId: "G-9YECM0DQQ6",
});

export const GlobalContext = createContext(null);
function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState("");

  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken") || "";
    // setAccessToken(accessToken);
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
    uri: "https://backend03.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}` }, // Bearer ""하면 비회원으로 처리됨
    credentials: "include", // 중요한 정보들을 포함시켜줘. 이거 해야 쿠키에 저장됨
  }); // 필요한 부분만 따로 만들어서 조립하는 방식

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]), // 순서 중요. errorLink 먼저 넣기
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
