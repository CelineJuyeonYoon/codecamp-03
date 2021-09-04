import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"

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

export default function MyDynamicRoutedPage(){
  const router = useRouter()
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.number }
  })

  return(
    <>
      <div>{router.query.number}번 상품입니다.</div>
      <div>판매자: {data?.fetchProduct.seller}</div>
      <div>상품명: {data?.fetchProduct.name}</div>
      <div>상품 상세설명: {data?.fetchProduct.detail}</div>
      <div>상품가격: {data.fetchProduct.price}</div>
      <div>구매 감사합니다'0'/</div>
    </>
  )
}

// seller: "celiney" 
// createProductInput:{
// name:"올라프인형"
// detail:"귀엽고따뜻"
// price:100000