import styled from "@emotion/styled";

const Wrapper = styled.div`
  background-image: url("/images/background.jpeg");
  width: 1200px;
  /* height: 950px; */
  object-fit: cover;
`;

const Typo = styled.div`
  color: white;
  font-size: 120px;
  padding-right: 15px;
  text-align: end;
`;

export default function Home() {
  return (
    <Wrapper>
      <Typo>Aile</Typo>
      <Typo>Studio</Typo>
      <Typo>Art</Typo>
    </Wrapper>
  );
}
