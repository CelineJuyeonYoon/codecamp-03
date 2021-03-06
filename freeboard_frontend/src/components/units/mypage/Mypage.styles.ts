import styled from "@emotion/styled";
import SettingsIcon from "@mui/icons-material/Settings";

export const Wrapper = styled.div`
  display: flex;
  width: 90vw;
  padding-top: 50px;
`;
export const MypageNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  padding-top: 5px;
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
export const PointWrapper = styled.div`
  display: flex;
`;
export const Point = styled.div`
  font-size: large;
`;
export const MypageMenu = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
`;
export const MyAccount = styled.div<{ section: any }>`
  cursor: pointer;
  color: ${(props) => props.section === "account" && "darkorange"};
`;
export const AddPoint = styled.div<{ section: any }>`
  cursor: pointer;
  color: ${(props) => props.section === "addpoint" && "darkorange"};
`;
export const MyCollection = styled.div<{ section: any }>`
  cursor: pointer;
  color: ${(props) => props.section === "collection" && "darkorange"};
`;
export const FavoriteItems = styled.div<{ section: any }>`
  cursor: pointer;
  color: ${(props) => props.section === "favorites" && "darkorange"};
`;
export const MypageBody = styled.div`
  width: 80%;
  padding: 0 30px;
`;
