import { withAuth } from "../../src/components/commons/hocs/withAuth";
import ProductDetail from "../../src/components/units/market/detail/ProductDetail.container";

const ProductDetailPage = () => {
  return <ProductDetail />;
};

export default withAuth(ProductDetailPage);
