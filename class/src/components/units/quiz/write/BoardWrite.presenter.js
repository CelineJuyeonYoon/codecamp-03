import{

} from './BoardWrite.styles'

export default function BoardWriteUI(props){

  return(
    <>
      작성자: <input type="text" onChange={props.onChangeMyWriter}/><br />
      제목: <input type="text" onChange={props.onChangeMyTitle}/><br />
      내용: <input type="text" onChange={props.onChangeMyContents}/><br />
      <button onClick={props.aaa}>GRAPHQL-API 요청하기!!!</button>
    </>
  )
}
// 변수/함수들 props.로 데이터 제대로 가져오는 것 까먹지않기!!!