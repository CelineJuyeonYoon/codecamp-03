import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const FETCH_USEDITEMS_I_BOUGHT = gql`
  query fetchUseditemsIBought($search: String) {
    fetchUseditemsIBought(search: $search) {
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

export default function CollectionSection() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEMS_I_BOUGHT, {
    variables: { search: "" },
  });

  function onClickItem(event: any) {
    router.push(`/market/${event.currentTarget.id}`);
  }

  return (
    <Wrapper>
      {data?.fetchUseditemsIBought.map((el: any) => (
        <Product key={el._id} onClick={onClickItem} id={el._id}>
          <ProductImg src={`https://storage.googleapis.com/${el.images[0]}`} />
          <ProductName>{el.name}</ProductName>
          <ProductPrice>{el.price}</ProductPrice>
        </Product>
      ))}
    </Wrapper>
  );
}
