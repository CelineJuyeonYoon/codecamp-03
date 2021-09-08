import styled from '@emotion/styled'
import {useRouter} from 'next/router'
import {useQuery, gql} from '@apollo/client'

const Wrapper = styled.div`
`
const Title = styled.div`
`
const Column = styled.div`
`

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID){
    fetchProduct(productId: $productId){
      seller
      name
      detail
      price
    }
}
`

export default function ProductDetailPage(){
  const router = useRouter()
  const {data} = useQuery(FETCH_PRODUCT, {
    variables: {productId: router.query.id}
  })

  function onClickToEdit(){
    router.push(`/Quiz/Week2/products/product_detail/${router.query.id}/edit`)
  }

  return(
    <Wrapper>
      <Title>오늘의 상품</Title>
      <Column>판매자: {data?.fetchProduct.seller}</Column>
      <Column>상품명: {data?.fetchProduct.name}</Column>
      <Column>상세설명: {data?.fetchProduct.detail}</Column>
      <Column>가격: {data?.fetchProduct.price}</Column>
      <button onClick={onClickToEdit}>수정하기로 이동</button>
    </Wrapper>
  )
}