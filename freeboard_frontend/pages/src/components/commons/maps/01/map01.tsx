import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 996px;
  display: flex;
  padding-bottom: 40px;
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
  background-color: green;
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

export default function Map01() {
  return (
    <Wrapper>
      <Left>
        <Label>거래위치</Label>
        <Map></Map>
      </Left>
      <Right>
        <Gps>
          <Label>GPS</Label>
          <GpsArgs>
            <GqsInput placeholder="위도(LAT)" />
            <GqsInput placeholder="경도(LNG)" />
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
