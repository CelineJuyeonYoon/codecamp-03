import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'


const FETCH_BOARD = gql`
  query fetchBoard($number: Int ){
    fetchBoard(number: $number){
      writer
      title
      contents  
    }
  }
`
// 자바스크립트의 특징 - 객체에서 key와 value가 같으면 value를 생략 가능하다.
// 그래서 writer, title, contents를 key만 적어줌!

export default function DynamicBoardRead(){
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) }  //실행하자마자(페이지열리자마자) 바로 요청됨 <-> mutation은 내가 원할 때
  })
  //async await 도 안됨! 데이터가 들어오기 전에 아래 페이지를 먼저 표시하고 싶기 때문에!
  return(
    <>
      <div>게시물 상세 페이지 입니다.</div>
      <div>게시글 번호: {router.query.number}</div>
      <div>게시글 작성자: {data?.fetchBoard.writer}</div>
      <div>게시글 제목: {data?.fetchBoard.title}</div>
      <div>게시글 내용: {data?.fetchBoard.contents}</div>
      {/*<div>게시글 작성자: {data ? data.fetchBoard.writer : "loading..."}</div>
      <div>게시글 제목: {data ? data.fetchBoard.title : "loading..."}</div>
      <div>게시글 내용: {data ? data.fetchBoard.contents : "loading..."}</div>*/}
    </>
  )
}