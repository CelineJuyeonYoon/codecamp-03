import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  background-image: url("/images/background.jpeg");
  background-size: cover;
  width: 385px;
  :hover {
    width: 1200px;
  }
  transition: 1s;
`;

const Typo = styled.div`
  color: white;
  font-size: 100px;
  font-family: "DidotR";
  margin: 10px;
  text-align: center;
`;

export default function Home() {
  const router = useRouter();

  function onClickToMain() {
    router.push(`/market`);
  }

  return (
    <Wrapper onClick={onClickToMain}>
      <Typo>Aile</Typo>
      <Typo>Studio</Typo>
      <Typo>Art</Typo>
    </Wrapper>
  );
}
