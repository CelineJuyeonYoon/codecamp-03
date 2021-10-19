import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";
import { Dispatch, SetStateAction } from "react";

// 토큰 재발급 // 따로 보내줘야하는 것은 없고, 쿠키에 자동으로 첨부됨
const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;
// 새 accessToken 저장
// 1. refreshToken으로 새로운 accessToken 재발급 받기
export async function getAccessToken(
  setAccessToken: Dispatch<SetStateAction<string>>
) {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend03.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    setAccessToken(newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.log(error.message);
  }
} // try - catch 안에서 에러: refreshToken도 만료되면 여기서 에러남
