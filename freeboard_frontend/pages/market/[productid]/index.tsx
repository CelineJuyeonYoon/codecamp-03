import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import ProductDetail from "../../../src/components/units/market/detail/ProductDetail.container";
import Comment01 from "../../../src/components/commons/comments/01/comment01";
import ProductQuestions from "../../../src/components/units/market/questions/ProductQuestions.container";

const ProductDetailPage = () => {
  return (
    <>
      <ProductDetail />
      <Comment01 name="문의하기" />
      <ProductQuestions />
    </>
  );
};

export default withAuth(ProductDetailPage);
