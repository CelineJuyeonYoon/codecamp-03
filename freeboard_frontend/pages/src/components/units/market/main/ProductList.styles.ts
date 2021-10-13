import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BestProducts = styled.div`
  background-color: black;
  width: 1200px;
  height: 450px;
`;
export const ProductList = styled.div`
  padding-top: 40px;
  border-bottom: 1px solid #bdbdbd;
`;
export const ProductListHeader = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 80px;
`;
export const ProductStatus = styled.div`
  display: flex;
`;
export const OnSale = styled.div`
  font-size: 18px;
  font-weight: ${(props) => (props.onSale ? "500" : "")};
  margin-right: 20px;
  color: ${(props) => (props.onSale ? "black" : "#4F4F4F")};
`;
export const SoldOut = styled.div`
  font-size: 18px;
  font-weight: ${(props) => (props.soldOut ? "500" : "")};
  color: ${(props) => (props.soldOut ? "black" : "#4F4F4F")};
`;
export const SearchBar = styled.div`
  display: flex;
`;
export const SearchProduct = styled.input`
  width: 282px;
  margin-right: 24px;
  padding-left: 20px;
  background: #f2f2f2;
  border: none;
`;
export const SearchDate = styled.input`
  width: 282px;
  margin-right: 24px;
  text-align: center;
  border: 1px solid #f2f2f2;
`;
export const SearchBtn = styled.button`
  background-color: black;
  color: white;
  width: 78px;
  height: 52px;
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  border-top: 1px solid #bdbdbd;
  padding: 20px 0 20px 0;
`;
export const ProductImg = styled.img`
  width: 160px;
  margin-right: 40px;
`;
export const ProductInfo = styled.div`
  width: 60%;
  margin-right: 40px;
`;
export const ProductName = styled.div`
  font-weight: 500;
  font-size: 24px;
  margin-top: 8px;
`;
export const ProductRemarks = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #4f4f4f;
`;
export const ProductTags = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #bdbdbd;
  margin-top: 8px;
`;
export const SellerAndCount = styled.div`
  display: flex;
  padding-top: 24px;
`;
export const Seller = styled.div`
  margin-right: 22px;
`;
export const SellerName = styled.span`
  margin-left: 6px;
`;
export const Count = styled.div``;
export const PickedCount = styled.span`
  margin-left: 6px;
`;
export const ProductPrice = styled.div`
  /* width: 20%; */
  display: flex;
  align-items: center;
  height: 18px;
  /* text-align: right; */
`;
export const Price = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-left: 11px;
`;
export const Buttons = styled.div`
  padding-top: 40px;
`;
export const SubmitBtn = styled.button`
  width: 124px;
  height: 52px;
  background-color: white;
  border: 1px solid black;
`;
