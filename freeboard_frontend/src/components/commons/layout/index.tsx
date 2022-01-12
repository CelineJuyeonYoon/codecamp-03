import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import { useRouter } from "next/dist/client/router";

const Wrapper = styled.div``;

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

export default function Layout(props: any) {
  const router = useRouter();
  const isHiddenPage = HIDDEN_PAGE.includes(router.pathname);

  return (
    <Wrapper>
      {!isHiddenPage && <LayoutHeader />}
      {!isHiddenPage && <LayoutBanner />}
      <Body>{props.children}</Body>
      {!isHiddenPage && <LayoutFooter />}
    </Wrapper>
  );
}
