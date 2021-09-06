import{

} from './BoardRead.styles'

export default function BoardReadUI(props){

  return(
    <>
      <div>게시물 상세 페이지 입니다.</div>
      <div>게시글 번호: {props.router.query.aaa}</div>
      <div>게시글 작성자: {props.data && props.data.fetchBoard.writer}</div>
      <div>게시글 제목: {props.data && props.data.fetchBoard.title}</div>
      <div>게시글 내용: {props.data && props.data.fetchBoard.contents}</div>
      {/*<div>게시글 작성자: {data ? data.fetchBoard.writer : "loading..."}</div>
      <div>게시글 제목: {data ? data.fetchBoard.title : "loading..."}</div>
      <div>게시글 내용: {data ? data.fetchBoard.contents : "loading..."}</div>*/}
    </>
  )
}