import {
  Wrapper,
  ProductListWrapper,
  ProductList,
  ProductListHeader,
  ProductStatus,
  OnSale,
  SoldOut,
  Row,
  ProductImg,
  NoImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  SubmitBtn,
} from "./ProductList.styles";
import InfiniteScroll from "react-infinite-scroller";
import SearchBars02 from "../../../commons/searchbars/Searchbars02";

export default function MarketMainUI(props: any) {
  return (
    <Wrapper>
      <ProductListHeader>
        <ProductStatus>
          <OnSale onClick={props.onClickOnSale} sale={props.onSale}>
            판매중상품
          </OnSale>
          <SoldOut onClick={props.onClickSoldOut} sold={props.soldOut}>
            판매된상품
          </SoldOut>
        </ProductStatus>
        <SearchBars02
          refetch={props.refetch}
          onChangeKeyword={props.onChangeKeyword}
        />
        <SubmitBtn onClick={props.onClickToWrite}>상품 등록하기</SubmitBtn>
      </ProductListHeader>
      <ProductListWrapper>
        {props.data?.fetchUseditems && (
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadProductMore}
            hasMore={true}
            useWindow={false}
          >
            <ProductList>
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
                    <ProductPrice>{el.price?.toLocaleString()}원</ProductPrice>
                  </ProductInfo>
                </Row>
              ))}
            </ProductList>
          </InfiniteScroll>
        )}
      </ProductListWrapper>
    </Wrapper>
  );
}
