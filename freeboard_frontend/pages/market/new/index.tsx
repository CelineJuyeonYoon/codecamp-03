import { withAuth } from "../../src/components/commons/hocs/withAuth";
import ProductWrite from "../../src/components/units/market/write/ProductWrite.container";

const ProductNewPage = () => {
  return <ProductWrite />;
};

export default withAuth(ProductNewPage);
