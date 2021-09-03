import { useMutation, gql } from "@apollo/client"
import { useState } from "react"

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
    createProduct(
      seller: $seller,
      createProductInput: $createProductInput
    ){
      number
      message
      _id
    }
  }
`

export default function GraphqlMutationProductPage(){
  const [ createProduct ] = useMutation(CREATE_PRODUCT)
  const [seller, setSeller] = useState("")
  const [name, setName] = useState("")
  const [detail, setDetail] = useState("")
  const [price, setPrice] = useState("")

  function onChangeSeller(event){
    setSeller(event.target.value)
  }

  function onChangeName(event){
    setName(event.target.value)
  }

  function onChangeDetail(event){
    setDetail(event.target.value)
  }

  function onChangePrice(event){
    setPrice(event.target.value)
  }

  async function onClickSubmit(){
    const result = await createProduct({
      variables: {
        seller: seller,
        createProductInput: {
          name: name,
          detail: detail,
          price: Number(price)
        }
      }
    })
    console.log(result.data.createProduct._id)
  }


  return(
    <>
      판매자: <input type="text" onChange={onChangeSeller}/>
      상품명: <input type="text" onChange={onChangeName}/>
      상품상세: <input type="text" onChange={onChangeDetail}/>
      상품가격: <input type="text" onChange={onChangePrice}/>
      <button onClick={onClickSubmit}>상품 등록하기!!!</button>
    </>
  )
}