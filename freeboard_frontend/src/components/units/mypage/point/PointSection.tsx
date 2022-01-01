import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      balance
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
`;

export default function PointSection() {
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  function onClickAddPoint() {
    createPointTransactionOfLoading({
      variables: {
        impUid: "",
      },
    });
  }

  return (
    <Wrapper>
      <div>Select Point</div>
      <Select>
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
