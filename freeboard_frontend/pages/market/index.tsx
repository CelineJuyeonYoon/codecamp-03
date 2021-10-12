import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const Wrapper = styled.div``;
const BestProducts = styled.div``;
const ProductList = styled.div``;
const ProductListHeader = styled.div``;
const ProductStatus = styled.div``;
const OnSale = styled.div``;
const SoldOut = styled.div``;
const SearchBar = styled.div``;
const SearchProduct = styled.input``;
const SearchDate = styled.div``;
const SearchBtn = styled.button`
  background-color: black;
`;
const Row = styled.div``;
const ProductImg = styled.img``;
const ProductInfo = styled.div``;
const ProductName = styled.div``;
const ProductRemarks = styled.div``;
const ProductTags = styled.div``;
const SellerAndCount = styled.div`
  padding-top: 24px;
`;
const Seller = styled.div`
  margin-right: 22px;
`;
const Count = styled.div``;
const ProductPrice = styled.div``;
const Price = styled.div``;
const SubmitBtn = styled.button``;
// const ProductList = styled.div``;

const FETCH_USEDITEMS = gql`
  query fetchUseditems {
    fetchUseditems {
      _id
      name
      remarks
      contents
      price
      tags
      seller {
        name
        picture
      }
      pickedCount
    }
  }
`;

export default function MarketMainPage() {
  const { data } = useQuery(FETCH_USEDITEMS);

  return (
    <Wrapper>
      <BestProducts></BestProducts>
      <ProductList>
        <ProductListHeader>
          <ProductStatus>
            <OnSale>판매중상품</OnSale>
            <SoldOut>판매된상품</SoldOut>
          </ProductStatus>
          <SearchBar>
            <SearchProduct placeholder="제품을 검색해주세요."></SearchProduct>
            <SearchDate placeholder="2020.12.02 ~ 2020.12.02"></SearchDate>
            <SearchBtn>검색</SearchBtn>
          </SearchBar>
        </ProductListHeader>
        {data?.fetchUseditems.map((el) => (
          <Row key={el._id}>
            <ProductImg src="/images/phone.png" />
            <ProductInfo>
              <ProductName>{el.name}</ProductName>
              <ProductRemarks>{el.remarks}</ProductRemarks>
              <ProductTags>{el.tags}</ProductTags>
              <SellerAndCount>
                <Seller>
                  <img src="/images/seller.png" />
                  {el.seller.name}
                </Seller>
                <Count>
                  <img src="/images/count.png" />
                  {el.pickedCount}
                </Count>
              </SellerAndCount>
            </ProductInfo>
            <ProductPrice>
              <img src="/images/money.png" />
              <Price>{el.price}</Price>
            </ProductPrice>
          </Row>
        ))}
      </ProductList>
      <SubmitBtn>상품 등록하기</SubmitBtn>
    </Wrapper>
  );
}
