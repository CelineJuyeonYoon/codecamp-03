import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  width: 80vw;
`;
const Img = styled.img`
  width: 60vw;
  height: auto;
`;
const Link = styled.a`
  color: white;
  font-size: 40px;
  font-family: DidotR;
  font-weight: 800;
  width: 30vw;
  padding-left: 30px;
  padding-top: 30px;
  background-color: black;
  :hover {
    color: darkorange;
  }
`;

export default function IntroPage() {
  return (
    <Wrapper>
      <Img src="/images/etsy.png" />
      <Link href="https://www.etsy.com/shop/AilestudioArt">go etsy</Link>
    </Wrapper>
  );
}
