import { Tooltip } from "antd";
import Button02 from "../../../commons/buttons/02/button02";
import {
  Wrapper,
  Box,
  Header,
  WriterWrapper,
  WriterProfile,
  WriteInfo,
  WriterName,
  WriteDate,
  Icons,
  LinkImg,
  LocaImg,
  ProductInfo,
  ProductInfoLeft,
  ProductInfoRight,
  ProductName,
  ProductRemarks,
  ProductPrice,
  Likes,
  ProductContents,
  ProductTags,
  LocationBox,
  Location,
  ProductImgs,
  CarouselImg,
  CarouselImgs,
  MiniImg,
  Buttons,
} from "./ProductDetail.styles";

export default function ProductDetailUI(props) {
  console.log("이거", props.data);
  return (
    <Wrapper>
      <Box>
        <Header>
          <WriterWrapper>
            <WriterProfile src="../../images/profile.png" />
            <WriteInfo>
              <WriterName>{props.data?.fetchUseditem.seller.name}</WriterName>
              <WriteDate>
                Date: {props.data?.fetchUseditem.createdAt.slice(0, 10)}
              </WriteDate>
            </WriteInfo>
          </WriterWrapper>
          <Icons>
            <LinkImg src="../../images/link.png" />
            <Tooltip
            // title={`${data?.fetchUseditem.boardAddress?.address} ${data?.fetchBoard.boardAddress?.addressDetail}`}
            >
              <LocaImg src="../../images/loca.png" />
            </Tooltip>
          </Icons>
        </Header>
        <ProductInfo>
          <ProductInfoLeft>
            <ProductRemarks>{props.data?.fetchUseditem.remarks}</ProductRemarks>
            <ProductName>{props.data?.fetchUseditem.name}</ProductName>
            <ProductPrice>
              {props.data?.fetchUseditem.price.toLocaleString()}원
            </ProductPrice>
          </ProductInfoLeft>
          <ProductInfoRight>
            <Likes>
              <img src="../../images/heart.png" />
              <div>{props.data?.fetchUseditem.pickedCount}</div>
            </Likes>
          </ProductInfoRight>
        </ProductInfo>
        <ProductImgs>
          <CarouselImg></CarouselImg>
          <CarouselImgs>
            <MiniImg></MiniImg>
            <MiniImg></MiniImg>
            <MiniImg></MiniImg>
            <MiniImg></MiniImg>
          </CarouselImgs>
        </ProductImgs>
        <ProductContents>{props.data?.fetchUseditem.contents}</ProductContents>
        <ProductTags>{props.data?.fetchUseditem.tags}</ProductTags>
        <LocationBox>
          <Location></Location>
        </LocationBox>
        <Buttons>
          <Button02 name="목록으로"></Button02>
          <Button02 name="구매하기" isValid={true}></Button02>
        </Buttons>
      </Box>
    </Wrapper>
  );
}
