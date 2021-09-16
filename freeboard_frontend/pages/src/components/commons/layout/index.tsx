import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutNavigation from "./navigation/LayoutNavagation.container";
import LayoutFooter from "./footer/LayoutFooter.container";

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
  /* align-items: stretch; */
`;

const Body = styled.div`
  height: 55%;
  margin-top: 80px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Layout(props) {
  return (
    <Wrapper>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Body>{props.children}</Body>
      <LayoutFooter />
    </Wrapper>
  );
}
