import styled from "@emotion/styled";
import SettingsIcon from "@mui/icons-material/Settings";

export const Wrapper = styled.div`
  display: flex;
  width: 80vw;
`;
export const MypageNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  padding: 0 30px;
  border-right: 1px solid black;
`;
export const ImgWrapper = styled.div`
  width: 80px;
  height: 80px;
`;
export const UserImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
`;
export const UploadImg = styled.input`
  display: none;
`;
export const UserName = styled.div`
  font-size: large;
  font-weight: bold;
  padding-top: 20px;
`;
export const ImgEditBtn = styled(SettingsIcon)`
  position: relative;
  bottom: 20px;
  left: 60px;
  cursor: pointer;
  color: black;
  background-color: white;
  border-radius: 50%;
`;
export const EditBtn = styled.button`
  cursor: pointer;
  margin-top: 50px;
`;
export const PointWrapper = styled.div`
  display: flex;
`;
export const Point = styled.div`
  font-size: large;
`;
export const AddPointBtn = styled.button`
  margin-left: 10px;
`;
export const MypageMenu = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
`;
export const MenuItem = styled.div<{ menu: any }>`
  cursor: pointer;
  color: ${(props) => props.menu === "MY ACCOUNT" && "blue"};
`;
export const MypageBody = styled.div`
  width: 70%;
`;
