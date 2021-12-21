import {
  Wrapper,
  BestProducts,
  ProductList,
  ProductListHeader,
  ProductStatus,
  OnSale,
  SoldOut,
  SearchBar,
  SearchProduct,
  SearchDate,
  SearchBtn,
  Row,
  ProductImg,
  NoImage,
  ProductInfo,
  ProductName,
  ProductRemarks,
  ProductTags,
  SellerAndCount,
  Seller,
  SellerName,
  Count,
  PickedCount,
  ProductPrice,
  Price,
  SubmitBtn,
  Buttons,
} from "./ProductList.styles";
import InfiniteScroll from "react-infinite-scroller";
import SearchBars02 from "../../../commons/searchbars/Searchbars02";

export default function MarketMainUI(props: any) {
  return (
    <Wrapper>
      {/* <BestProducts></BestProducts> */}
      <ProductListHeader>
        <ProductStatus>
          <OnSale onClick={props.onClickOnSale} sale={props.onSale}>
            판매중상품
          </OnSale>
          <SoldOut onClick={props.onClickSoldOut} sold={props.soldOut}>
            판매된상품
          </SoldOut>
        </ProductStatus>
        {/* <SearchBar>
          <SearchProduct placeholder="제품을 검색해주세요."></SearchProduct>
          <SearchDate placeholder="2020.12.02 ~ 2020.12.02"></SearchDate>
          <SearchBtn>검색</SearchBtn>
        </SearchBar> */}
        <SearchBars02
          refetch={props.refetch}
          onChangeKeyword={props.onChangeKeyword}
        />
      </ProductListHeader>
      <ProductList style={{ overflow: "auto", height: 1000 }}>
        {props.data?.fetchUseditems && (
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadProductMore}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchUseditems.map((el: any) => (
              <Row key={el._id}>
                {el.images[0] ? (
                  <ProductImg
                    src={`https://storage.googleapis.com/${el.images?.[0]}`}
                  />
                ) : (
                  <NoImage src="/images/noimage.png" />
                )}
                <ProductInfo>
                  <ProductName id={el._id} onClick={props.onClickToDetail}>
                    {el.name}
                  </ProductName>
                  <ProductRemarks>{el.remarks}</ProductRemarks>
                  <ProductTags>
                    {el.tags.length ? el.tags.map((el: any) => `#${el} `) : "#"}
                  </ProductTags>
                  <SellerAndCount>
                    <Seller>
                      <img src="/images/seller.png" />
                      <SellerName>{el.seller.name}</SellerName>
                    </Seller>
                    <Count>
                      <img src="/images/count.png" />
                      <PickedCount>{el.pickedCount}</PickedCount>
                    </Count>
                  </SellerAndCount>
                </ProductInfo>
                <ProductPrice>
                  <img src="/images/currency.png" />
                  <Price>{el.price?.toLocaleString()}원</Price>
                </ProductPrice>
              </Row>
            ))}
          </InfiniteScroll>
        )}
      </ProductList>
      <Buttons>
        <SubmitBtn onClick={props.onClickToWrite}>상품 등록하기</SubmitBtn>
      </Buttons>
    </Wrapper>
  );
}
