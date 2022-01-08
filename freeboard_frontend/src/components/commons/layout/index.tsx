import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutBanner from "./banner/LayoutBanner.container";
// import LayoutNavigation from "./navigation/LayoutNavagation.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import SideBar from "./sidebar/SideBar.container";
import { useRouter } from "next/dist/client/router";

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
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

const HIDDEN_PAGE = ["/"];
const MARKET_MAIN = ["/mypage"];

export default function Layout(props: any) {
  const router = useRouter();
  const isHiddenPage = HIDDEN_PAGE.includes(router.pathname);
  const isMarketMain = MARKET_MAIN.includes(router.pathname);

  return (
    <Wrapper>
      {!isHiddenPage && <LayoutHeader />}
      {!isHiddenPage && <LayoutBanner />}
      {/* {!isHiddenPage && <LayoutNavigation />} */}
      {isMarketMain && <SideBar />}
      <Body>{props.children}</Body>
      {!isHiddenPage && <LayoutFooter />}
    </Wrapper>
  );
}
