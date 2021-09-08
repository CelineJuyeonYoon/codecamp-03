import {gql} from '@apollo/client'
export const CREATE_PRODUCT = gql`
mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
	createProduct(
    seller: $seller
    createProductInput: $createProductInput){
    message
		_id
  }
}
`

export const UPDATE_PRODUCT = gql`
mutation updateProduct($productId: ID, $updateProductInput: UpdateProductInput!){
  updateProduct(productId: $productId, updateProductInput: $updateProductInput){
    _id
    number
    message
  }
}
`