import styled from "@emotion/styled";
import { useState } from "react";
import { useEffect } from "react";

const Wrapper = styled.div`
  width: 996px;
  display: flex;
  padding-top: 40px;
`;
const Left = styled.div`
  padding-right: 24px;
  display: flex;
  flex-direction: column;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
  margin-left: 1px;
`;
const Map = styled.div`
  /* background-color: green; */
  width: 384px;
  height: 252px;
`;
const Gps = styled.div`
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
`;
const GpsArgs = styled.div``;
const GqsInput = styled.input`
  width: 108px;
  height: 52px;
  margin-right: 24px;
  text-align: center;
  border: 1px solid #bdbdbd;
`;
const Address = styled.div`
  display: flex;
  flex-direction: column;
`;
const AddressInput = styled.input`
  width: 588px;
  height: 52px;
  margin-bottom: 16px;
  border: 1px solid #bdbdbd;
`;

declare const window: typeof globalThis & {
  kakao: any;
};

export default function Map01(props: any) {
  const [mylatlng, setMylatlng]: any = useState({});
  // const [lat, setLat] = useState();
  // const [lng, setLng] = useState();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=1283e91757dafae0f985204d3c20d319&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        // console.log(window.kakao);
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.578054, 126.9746933),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);
        // console.log("지도", map);

        // 지도를 클릭한 위치에 표출할 마커입니다
        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: { latLng: any }) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            setMylatlng(latlng);
            // console.log("latlng", latlng);

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
          }
        );
      });
    };
  }, []);

  return (
    <Wrapper>
      <Left>
        <Label>거래위치</Label>
        <Map>
          <div id="map" style={{ width: "384px", height: "252px" }}></div>
        </Map>
      </Left>
      <Right>
        <Gps>
          <Label>GPS</Label>
          <GpsArgs>
            <GqsInput placeholder="위도(LAT)" value={mylatlng.La} />
            <GqsInput placeholder="경도(LNG)" value={mylatlng.Ma} />
          </GpsArgs>
        </Gps>
        <Address>
          <Label>주소</Label>
          <AddressInput />
          <AddressInput />
        </Address>
      </Right>
    </Wrapper>
  );
}
