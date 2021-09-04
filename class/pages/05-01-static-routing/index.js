import { useRouter } from 'next/router'

export default function StaticRoutingPage(){
  const router = useRouter()

  function onClickMove(){
    router.push('/05-02-static-routed') //라우팅할 페이지 경로 입력
  }

  return(
    <button onClick={onClickMove}>정적 라우팅 페이지 이동!!!</button>
  )
}