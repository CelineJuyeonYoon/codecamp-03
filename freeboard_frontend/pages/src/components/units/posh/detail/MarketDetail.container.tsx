import {
  Wrapper,
  UserProfile,
  UserProfile_Image,
  UserInfo,
  UserInfo_ID,
  UserInfo_location,
  ProductImages,
  ProductImage,
  Buttons,
  Buttons_buyer,
  Buttons_seller,
  ProductInfo,
  ProductInfo_name,
  ProductInfo_price,
  ProductInfo_detail,
  ProductInfo_createdAt,
  Comments,
} from "./MarketDetail.styles";

export default function MarketDetail() {
  return (
    <Wrapper>
      <UserProfile>
        <UserProfile_Image src="/images/profile.png" />
        <UserInfo>
          <UserInfo_ID>filament</UserInfo_ID>
          <UserInfo_location>서울시 구로구</UserInfo_location>
        </UserInfo>
      </UserProfile>
      <ProductImages>
        <ProductImage src="/images/bridge.jpg" />
      </ProductImages>
      <Buttons>
        <Buttons_buyer>
          <img src="/images/heart.png" />
          <img src="/images/comment.png" />
        </Buttons_buyer>
        <Buttons_seller>
          <button>수정</button>
          <button>삭제</button>
        </Buttons_seller>
      </Buttons>
      <ProductInfo>
        <ProductInfo_name>뉴욕 프린팅아트</ProductInfo_name>
        <ProductInfo_price>70000</ProductInfo_price>
        <ProductInfo_detail>
          뉴욕에서 산 프린팅 월아트 제품입니다. 새상품이며 직거래 가능합니다.
        </ProductInfo_detail>
        <ProductInfo_createdAt>2021. 11. 06</ProductInfo_createdAt>
      </ProductInfo>
      <Comments>
        <div>댓글 3개</div>
        <div>
          <div>의명짱</div>
          <div>판매되었나요?</div>
        </div>
      </Comments>
    </Wrapper>
  );
}
