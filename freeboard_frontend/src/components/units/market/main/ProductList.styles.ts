import styled from "@emotion/styled";

interface IProps {
  sale?: string;
  sold?: string;
}

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BestProducts = styled.div`
  background-color: black;
  width: 1200px;
  height: 450px;
`;
export const ProductListWrapper = styled.div`
  margin-top: 40px;
  overflow: auto;
  height: 1000px;
`;
export const ProductList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const ProductListHeader = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 30px;
  padding-top: 80px;
`;
export const ProductStatus = styled.div`
  display: flex;
`;
export const OnSale = styled.div`
  font-weight: ${(props: IProps) => (props.sale ? "500" : "")};
  margin-right: 20px;
  color: ${(props: IProps) => (props.sale ? "black" : "#4F4F4F")};
  cursor: pointer;
`;
export const SoldOut = styled.div`
  font-weight: ${(props: IProps) => (props.sold ? "500" : "")};
  color: ${(props: IProps) => (props.sold ? "black" : "#4F4F4F")};
  cursor: pointer;
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
  width: 30vw;
  height: 30vw;
  display: flex;
  flex-direction: column;
  padding: 10px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    width: 50vw;
    height: 50vw;
  }
  @media screen and (max-width: 480px) {
    width: 390px;
    height: 390px;
  }
`;
export const ProductImg = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 2px;
  object-fit: cover;
`;
export const ProductInfo = styled.div`
  width: 30vw;
`;
export const ProductName = styled.div`
  font-weight: 500;
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
  font-weight: bold;
  font-size: 16px;
`;
export const Buttons = styled.div`
  padding-top: 40px;
`;
export const SubmitBtn = styled.button`
  background-color: white;
  border-style: none;
  cursor: pointer;
  font-size: 14px;
`;
export const NoImage = styled.img`
  width: 100%;
  height: 80%;
  margin-right: 40px;
`;
export const SortProduct = styled.div`
  cursor: pointer;
  font-size: 14px;
`;
