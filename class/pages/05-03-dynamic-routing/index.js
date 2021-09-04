import { useRouter } from 'next/router'

export default function DynamicRoutingPage(){
  const router = useRouter()

  function onClickMove1(){
    router.push('/05-04-dynamic-routed/1')  //'페이지경로/변수' (변수부분에 들어온 값이 쿼리[]에 담긴다)
  }

  function onClickMove2(){
    router.push('/05-04-dynamic-routed/2')
  }

  function onClickMove3(){
    console.log("click")
    router.push('/05-04-dynamic-routed/3')
  }


  return(
    <>
      <button onClick={onClickMove1}>1번 게시물로 이동하기!</button>
      <button onClick={onClickMove2}>2번 게시물로 이동하기!</button>
      <button onClick={onClickMove3}>3번 게시물로 이동하기!</button>
    </>
  )
}