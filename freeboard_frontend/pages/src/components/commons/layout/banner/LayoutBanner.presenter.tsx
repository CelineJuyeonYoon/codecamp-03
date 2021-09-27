import { Wrapper, SliderItem } from "./LayoutBanner.styles";
// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="../images/banner.jpg" />
        </div>
        <div>
          <SliderItem src="../images/premium.jpg" />
        </div>
        <div>
          <SliderItem src="../images/newyork2.jpg" />
        </div>
        <div>
          <SliderItem src="../images/newyork3.jpg" />
        </div>
        <div>
          <SliderItem src="../images/newyork4.jpg" />
        </div>
      </Slider>
    </Wrapper>
  );
}
