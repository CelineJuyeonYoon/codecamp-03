import {
  MyButton,
  Title
} from './BoardWrite.styles'

export default function BoardWriteUI(props){

  return(
    <>
    <h1>{props.isEdit ? '수정페이지' : '둥록페이지'}</h1>
      <Title titleCol={props.titleCol}>컨테이너 프리젠터 패턴</Title>
      작성자: <input type="text" onChange={props.onChangeMyWriter}/><br />
      제목: <input type="text" onChange={props.onChangeMyTitle}/><br />
      내용: <input type="text" onChange={props.onChangeMyContents}/><br />
      {!props.isEdit && <MyButton onClick={props.onClickCreate} able={props.able}>등록하기</MyButton>} 
      {props.isEdit && <MyButton onClick={props.onClickEdit} able={props.able}>수정하기</MyButton>}
      {/* props.isEdit이 false면 등록하기버튼 보임, true면 버튼 안보임 */}
      {/* props.isEdit이 true면 수정하기버튼 보임, false면 버튼 안보임 */}
    </>
  )
}