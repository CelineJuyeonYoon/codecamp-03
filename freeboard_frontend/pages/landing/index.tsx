import styled from '@emotion/styled'
import { useRouter } from "next/router"

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.img`
  width: 30%;
  text-align: center;
`;
const Banners = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Gallery = styled.img`
  width: 100%;
  cursor: pointer;
`;
const Store = styled.img`
  width: 100%;
  cursor: pointer;
`;

export default function LandingPage(){
  const router = useRouter()

  function onClickMove(event: any){
    router.push(event.target.id)
  }

  return(
    <Wrapper>
      <Logo src="/images/logo.png"></Logo>
      <Banners>
        <Gallery id="/boards/board_list" src="/images/bridge.jpg" onClick={onClickMove}/>
        <Store id="/boards/board_new" src="/images/store.jpg" onClick={onClickMove}/>
      </Banners>
    </Wrapper>
  )
}