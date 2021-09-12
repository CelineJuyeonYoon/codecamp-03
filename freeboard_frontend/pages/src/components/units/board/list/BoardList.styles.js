import styled from "@emotion/styled";

export const Wrapper = styled.div``;
export const BoardList = styled.div`
  width: 1200px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-top: 40px;
`;
export const Header = styled.div`
  font-weight: 500;
  font-size: 18px;
  width: 1200px;
  height: 52px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  border-bottom: 1px solid #bdbdbd;
`;
export const HeadNumber = styled.span`
  font-weight: 500;
  font-size: 18px;
  width: 5%;
  text-align: center;
`;
export const HeadTitle = styled.span`
  font-weight: 500;
  font-size: 18px;
  width: 65%;
  text-align: center;
`;
export const HeadWriter = styled.span`
  font-weight: 500;
  font-size: 18px;
  width: 15%;
  text-align: center;
`;
export const HeadDate = styled.span`
  font-weight: 500;
  font-size: 18px;
  width: 15%;
  text-align: center;
`;
export const Row = styled.div`
  width: 1200px;
  height: 52px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  border-bottom: 1px solid #bdbdbd;
  :hover {
    background-color: #ffd600;
    border: none;
    font-weight: 500;
    font-size: 18px;
  }
`;
export const Number = styled.span`
  width: 5%;
  text-align: center;
  color: #4f4f4f;
`;
export const Title = styled.div`
  width: 65%;
  text-align: center;
  color: #4f4f4f;
  cursor: pointer;
`;
export const Writer = styled.span`
  width: 15%;
  text-align: center;
  color: #4f4f4f;
`;
export const Date = styled.span`
  width: 15%;
  text-align: center;
  color: #4f4f4f;
`;
export const SearchTitle = styled.input`
  width: 776px;
  height: 52px;
  background-color: #f2f2f2;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  padding-left: 20px;
`;
export const SearchBar = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
`;
export const SearchDate = styled.input`
  width: 244px;
  border-style: none;
  border: 1px solid #bdbdbd;
  text-align: center;
  font-size: 16px;
`;
export const SearchBtn = styled.button`
  width: 94px;
  background-color: black;
  color: white;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
`;
export const BoardWriteBtn = styled.button`
  width: 171px;
  height: 52px;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #ffd600;
    border: none;
  }
`;
export const Footer = styled.span`
  width: 1200px;
  padding-top: 40px;
  display: flex;
  justify-content: flex-end;
`;
export const BoardWrite = styled.span`
  font-size: 16px;
  font-weight: 500;
  padding-left: 11px;
`;
// export const Date = styled.span`

//   `
