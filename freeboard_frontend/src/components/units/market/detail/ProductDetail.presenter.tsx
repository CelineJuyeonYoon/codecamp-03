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
  Picked,
  ProductContents,
  ProductTags,
  LocationBox,
  Location,
  ProductImgs,
  CarouselImg,
  CarouselImgs,
  SliderImg,
  MiniImg,
  Buttons,
} from "./ProductDetail.styles";
import Dompurify from "dompurify";
import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function ProductDetailUI(props: any) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=1283e91757dafae0f985204d3c20d319";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(
            props.data?.fetchUseditem.useditemAddress?.lat || 37.578054,
            props.data?.fetchUseditem.useditemAddress?.lng || 126.9746933
          ),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        // 지도를 클릭한 위치에 표출할 마커입니다
        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);
      });
    };
  }, [props.data?.fetchUseditem]); // !의존성배열에 값 안넣으면 불러오기 전에 그려져서 제대로 안나타남

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (
    <Wrapper>
      <Box>
        <Header>
          <WriterWrapper>
            <WriterProfile src="/images/profile.png" />
            <WriteInfo>
              <WriterName>{props.data?.fetchUseditem.seller.name}</WriterName>
              <WriteDate>
                Date: {props.data?.fetchUseditem.createdAt.slice(0, 10)}
              </WriteDate>
            </WriteInfo>
          </WriterWrapper>
          <Icons>
            <LinkImg src="/images/link.png" />
            <LocaImg src="/images/loca.png" />
          </Icons>
        </Header>
        <ProductInfo>
          <ProductInfoLeft>
            <ProductRemarks>{props.data?.fetchUseditem.remarks}</ProductRemarks>
            <ProductName>{props.data?.fetchUseditem.name}</ProductName>
            <ProductPrice>
              {props.data?.fetchUseditem.price?.toLocaleString()}원
            </ProductPrice>
          </ProductInfoLeft>
          <ProductInfoRight>
            <Likes>
              <Picked onClick={props.onClickPick} src="/images/heart.png" />
              <div>{props.data?.fetchUseditem.pickedCount}</div>
            </Likes>
          </ProductInfoRight>
        </ProductInfo>
        <ProductImgs>
          <CarouselImg>
            <Slider {...settings}>
              {props.data?.fetchUseditem.images
                ?.filter((el: any) => el)
                .map((el: any) => (
                  <SliderImg
                    key={el}
                    src={`https://storage.googleapis.com/${el}`}
                  ></SliderImg>
                ))}
            </Slider>
          </CarouselImg>
          <CarouselImgs>
            {props.data?.fetchUseditem.images
              ?.filter((el: any) => el)
              .map((el: any) => (
                <MiniImg
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                ></MiniImg>
              ))}
          </CarouselImgs>
        </ProductImgs>
        {process.browser ? (
          <ProductContents
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
            }}
          />
        ) : (
          <div />
        )}
        <ProductTags>
          {props.data?.fetchUseditem.tags.map((el: any) => `#${el} `)}
        </ProductTags>
        <LocationBox>
          <Location id="map"></Location>
        </LocationBox>
        <Buttons>
          <Button02 name="목록으로" onClick={props.onClickToList}></Button02>
          {props.userInfo?._id === props.data?.fetchUseditem.seller?._id ? (
            <Button02
              name="수정하기"
              onClick={props.onClickToEdit}
              isValid={true}
            ></Button02>
          ) : (
            <Button02 name="구매하기" isValid={true}></Button02>
          )}
        </Buttons>
      </Box>
    </Wrapper>
  );
}
