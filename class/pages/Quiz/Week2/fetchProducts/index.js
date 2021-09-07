import { useMutation, useQuery, gql } from "@apollo/client"
import styled from '@emotion/styled'

const FETCH_PRODUCT = gql`
  query fetchProducts($page: Int){
  fetchProducts(page: $page){
    seller
    name
    detail
    price
    _id
  }
}
`

const DETELE_PRODUCT = gql`
  mutation deleteProduct($productId: ID){
    deleteProduct(productId: $productId){
      _id
    }
  }
`

const Header = styled.div`
  background-color: lightblue;
  border-bottom: 1px solid lightgrey;
  display: flex;
`

const Row = styled.div`
  display: flex;
`

const Column = styled.div`
  width: 20%;
`

export default function FetchProductsPage(){
  const [deleteProduct] = useMutation(DETELE_PRODUCT)
  const {data} = useQuery(FETCH_PRODUCT)

  function onClickDelete(event){
    deleteProduct({
      variables: {productId: event.target.id},
      refetchQueries: [{query: FETCH_PRODUCT}]
    })
  }

  return(
    <>
      <Header>
        <Column><input type='checkbox' /></Column>
        <Column>seller</Column>
        <Column>name</Column>
        <Column>price</Column>
        <Column>detail</Column>
        <Column>detail</Column>
      </Header>
      {data?.fetchProducts.map((el) => (
        <Row key={el._id}>
          <Column><input type='checkbox' /></Column>
          <Column>{el.seller}</Column>
          <Column>{el.name}</Column>
          <Column>{el.price}</Column>
          <Column>{el.detail}</Column>
          <Column><button id={el._id} onClick={onClickDelete}>삭제하기</button></Column>
        </Row>
      ))}
    </>
  )
}