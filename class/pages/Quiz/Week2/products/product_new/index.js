// import ProductWrite from "../../../../../src/components/units/product/write" <= 파일이름 index.js아니니까 제대로 적어주기
import ProductWrite from "../../../../../src/components/units/product/write/ProductWrite.container"

export default function ProductNewPage(){

  return <ProductWrite isEdit={false}/>
}