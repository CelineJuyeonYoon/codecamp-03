import Head from "next/head";
import { gql, request } from "graphql-request";

export default function MarketPage(props) {
  return (
    <>
      <Head>
        <meta property="og:title" content={props.fetchUseditem.name} />
        <meta property="og:description" content={props.fetchUseditem.remarks} />
        <meta
          property="og:image"
          content={`https://storage.googleapis.com/${props.fetchUseditem.images[0]}`}
        />
      </Head>
      <div>마켓페이지 입니다!</div>
    </>
  );
}

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      images
    }
  }
`;

export const getServerSideProps = async (context) => {
  // 1. graphql 데이터를 요청한다.
  const result = await request(
    "https://backend03.codebootcamp.co.kr/graphql",
    FETCH_USEDITEM,
    { useditemId: context.query.useditemId }
  );

  // 2. 요청받은 데이터를 페이지로 넘겨준다.
  return {
    props: {
      fetchUseditem: result.fetchUseditem,
    },
  };
};
// 이 안에서는 useRouter 사용 못함
// export는 하지 않음!
// yarn build는 최적회해서 실행하는 것
