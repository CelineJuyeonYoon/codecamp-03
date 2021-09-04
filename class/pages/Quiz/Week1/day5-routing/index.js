import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'

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

export default function MyDynamicRoutingPage(){
  const router = useRouter()
  const [ createProduct ] = useMutation(CREATE_PRODUCT)
  const [ seller, setSeller ] = useState("")
  const [ name, setName ] = useState("")
  const [ detail, setDetail ] = useState("")
  const [ price, setPrice ] = useState("")

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

  async function onClickProductSubmit(){
    try{
      const result = await createProduct({
        variables: {
          seller,
          createProductInput: {
            name,
            detail,
            price: Number(price) //price 로만 쓰고 Number타입으로 변경 안하면 에러!
          }
        }
      })
      alert(result.data.createProduct._id) //상품등록하면 등록number alert로 띄우기
      router.push(`/Quiz/Week1/day5-routed/${result.data.createProduct._id}`)
    }
    catch(error){
      console.log(error)
    }
  }
  return(
    <>
      판매자: <input type='text' onChange={onChangeSeller}/><br/>
      상품명: <input type='text' onChange={onChangeName}/><br/>
      상품내용: <input type='text' onChange={onChangeDetail}/><br/>
      상품가격: <input type='text' onChange={onChangePrice}/><br/>
      <button onClick={onClickProductSubmit}>상품등록</button>
    </>
  )
}