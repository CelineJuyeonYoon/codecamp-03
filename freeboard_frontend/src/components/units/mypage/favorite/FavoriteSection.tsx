import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const FETCH_USEDITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String) {
    fetchUseditemsIPicked(search: $search) {
      _id
      name
      price
      images
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Product = styled.div`
  margin: 5px;
  cursor: pointer;
`;
const ProductImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;
const ProductName = styled.div`
  padding-top: 5px;
`;
const ProductPrice = styled.div`
  font-weight: bold;
`;

export default function FavoriteSection() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEMS_I_PICKED, {
    variables: { search: "" },
  });

  function onClickItem(event: any) {
    router.push(`/market/${event.currentTarget.id}`);
  }
  console.log(data);

  return (
    <Wrapper>
      {data?.fetchUseditemsIPicked.map((el: any) => (
        <Product key={el._id} onClick={onClickItem} id={el._id}>
          <ProductImg src={`https://storage.googleapis.com/${el.images[0]}`} />
          <ProductName>{el.name}</ProductName>
          <ProductPrice>KRW {el.price.toLocaleString()}</ProductPrice>
        </Product>
      ))}
    </Wrapper>
  );
}
