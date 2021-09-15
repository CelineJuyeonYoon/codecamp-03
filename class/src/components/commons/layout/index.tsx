import styled from "@emotion/styled";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";
import { useRouter } from "next/router";

const Wrapper = styled.div``;

const Body = styled.div``;

const SidebarWrapper = styled.div`
  display: flex;
`;
const Sidebar = styled.div`
  width: 300px;
  background-color: yellow;
`;

const HIDDEN_FOOTER = ["/13-01-layout-hidden"];

export default function Layout(props) {
  const router = useRouter();
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.pathname);

  console.log(router);
  return (
    <Wrapper>
      {/* <Header>여기는 헤더 영역입니다.</Header> */}
      <LayoutHeader />
      <SidebarWrapper>
        <Sidebar>여기는 사이드바 영역입니다.</Sidebar>
        <Body>{props.children}</Body>
      </SidebarWrapper>
      {!isHiddenFooter && <LayoutFooter />}
      {/* <Footer>여기는 푸터 영역입니다.</Footer> */}
    </Wrapper>
  );
}
