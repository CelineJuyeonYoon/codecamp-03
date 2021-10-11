import { gql, useQuery } from "@apollo/client";
import { Tooltip } from "antd";
import { useRouter } from "next/router";
import {
  Header,
  WriterWrapper,
  WriterProfile,
  WriteInfo,
  WriterName,
  WriteDate,
  Icons,
  LinkImg,
  LocaImg,
} from "../../src/components/units/board/read/BoardRead.styles";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      createdAt
    }
  }
`;

export default function ProductDetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.id },
  });

  return (
    // <form>
    //   <Header>
    //     <WriterWrapper>
    //       <WriterProfile src="../../images/profile.png" />
    //       <WriteInfo>
    //         <WriterName>{data?.fetchUseditem.writer}</WriterName>
    //         <WriteDate>
    //           Date: {data?.fetchUseditem.createdAt.slice(0, 10)}
    //         </WriteDate>
    //       </WriteInfo>
    //     </WriterWrapper>
    //     <Icons>
    //       <LinkImg src="../../images/link.png" />
    //       <Tooltip
    //         title={`${data?.fetchUseditem.boardAddress?.address} ${data?.fetchBoard.boardAddress?.addressDetail}`}
    //       >
    //         <LocaImg src="../../images/loca.png" />
    //       </Tooltip>
    //     </Icons>
    //   </Header>
    // </form>
    <div>여기는 상품조회페이지!</div>
  );
}
