import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import Head from "next/head";
import { useState } from "react";

declare const window: typeof globalThis & {
  IMP: any;
};

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      balance
      _id
      amount
      status
    }
  }
`;

const Wrapper = styled.div``;
const Select = styled.select`
  border-style: none;
  border-bottom: 1px solid black;
`;
const AddBtn = styled.button`
  border-style: none;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export default function PointSection() {
  const [amount, setAmount] = useState("");
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  function onChangeAmount(event: any) {
    setAmount(event.target.value);
  }

  function onClickAddPoint() {
    if (!amount) {
      alert("포인트를 선택해주세요.");
      return;
    }
    var IMP = window.IMP;
    IMP.init("imp25002470");
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "포인트 충전",
        amount: 100,
      },
      function (rsp: any) {
        if (rsp.success) {
          console.log(rsp);
          createPointTransactionOfLoading({
            variables: {
              impUid: String(rsp.imp_uid),
            },
          });
        } else {
          alert("충전을 실패했습니다.");
        }
      }
    );
  }

  return (
    <Wrapper>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <div>Select Point</div>
      <Select onChange={onChangeAmount} defaultValue="포인트 선택">
        <option disabled>포인트 선택</option>
        <option value="5000">5000</option>
        <option value="10000">10000</option>
        <option value="30000">30000</option>
        <option value="50000">50000</option>
        <option value="100000">100000</option>
      </Select>
      <AddBtn onClick={onClickAddPoint}>충전하기</AddBtn>
    </Wrapper>
  );
}
