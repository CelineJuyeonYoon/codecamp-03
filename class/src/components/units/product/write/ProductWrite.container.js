import ProductDetailUI from './ProductWrite.presenter'
import {CREATE_PRODUCT, UPDATE_PRODUCT} from './ProductWrite.queries'
import {useMutation} from '@apollo/client'
import {useRouter} from 'next/router'
import {useState} from 'react'

export default function ProductWrite(props){

  const [createProduct] = useMutation(CREATE_PRODUCT)
  const [updateProduct] = useMutation(UPDATE_PRODUCT)
  const router = useRouter()
  const [seller, setSeller] = useState('')
  const [name, setName] = useState('')
  const [detail, setDetail] = useState('')
  const [price, setPrice] = useState('')

  async function onClickCreateProduct(){
    const result = await createProduct({
      variables: {
        seller,
        createProductInput: {
          name: name,
          detail: detail,
          price: Number(price)
        }
      }
    })
    router.push(`/Quiz/Week2/products/product_detail/${result.data.createProduct._id}`)
    // router.push(`/product_detail/${result.data.createProduct._id}`) <= 주소 잘못입력해서 404에러
  }

  async function onClickUpdateProduct(){
    await updateProduct({
      variables: {
        productId: router.query.id,
        updateProductInput: {
          name,
          detail,
          price: Number(price)
        }
      }
    })
    router.push(`/Quiz/Week2/products/product_detail/${router.query.id}`)
  }

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

  return(
    <ProductDetailUI
      onChangeSeller={onChangeSeller}
      onChangeName={onChangeName}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      onClickUpdateProduct={onClickUpdateProduct}
      onClickCreateProduct={onClickCreateProduct}
      isEdit={props.isEdit}
    />
  )
}