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
      <div>판매자: {data && data.fetchProduct.seller}</div> {/* &&연산자 */}
      <div>상품명: {data?.fetchProduct.name}</div> {/* 옵셔널 체이닝 */}
      <div>상품 상세설명: {data ? data.fetchProduct.detail: 'loading...'}</div> {/* 삼항연산자 */}
      <div>상품가격: {data?.fetchProduct.price}</div> {/* 조건부랜더링 */}
      <div>구매 감사합니다'0'/</div>
    </>
  )
}