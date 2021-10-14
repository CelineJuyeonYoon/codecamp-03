import Head from "next/head"; // head 태그를 import
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴 //지금 당장은 필요 x 추가기능(마커)시 필요
    console.log(map);
  }, []);

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=1283e91757dafae0f985204d3c20d319"
        ></script>
      </Head>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
}
// script로 카카오 기능 다운받고 브라우저에 저장
// 빈 div 태그를 읽게 됨
// 빈 div 태그에 지도 추가하기(getElementById)
