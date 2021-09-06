import{
  Writer,
  Title,
  Content,
  SubmitBtn
} from './BoardWrite.styles'

export default function BoardWriteUI(props){

  return(
    <>
      작성자: <Writer type="text" onChange={props.onChangeMyWriter}/><br />
      제목: <Title type="text" onChange={props.onChangeMyTitle}/><br />
      내용: <Content type="text" onChange={props.onChangeMyContents}/><br />
      <SubmitBtn onClick={props.aaa} BTO={props.greenLight}>GRAPHQL-API 요청하기!!!</SubmitBtn>
    </>
  )
}
// 변수/함수들 props.로 데이터 제대로 가져오는 것 까먹지않기!!!