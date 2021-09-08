import {
  Wrapper,
  Title,
  Column
} from './ProductWrite.styles'

export default function ProductDetailUI(props){
  return(
    <Wrapper>
      <Title isEdit={props.isEdit}>{props.isEdit ? '상품 수정하기' : '상품 등록하기'}</Title>
      판매자: <Column type="text" onChange={props.onChangeSeller}/><br />
      상품명: <Column type="text" onChange={props.onChangeName}/><br />
      상세설명: <Column type="text" onChange={props.onChangeDetail}/><br />
      가격: <Column type="text" onChange={props.onChangePrice}/><br />
      {!props.isEdit && <button onClick={props.onClickCreateProduct}>등록하기</button>}
      {props.isEdit && <button onClick={props.onClickUpdateProduct}>수정하기</button>}
    </Wrapper>
  )
}