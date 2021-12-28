import {
  Wrapper,
  UserImg,
  UploadImg,
  UserName,
  ImgEditBtn,
  ImgWrapper,
  EditBtn,
  Point,
  AddPointBtn,
  PointWrapper,
  MypageMenu,
  MenuItem,
  MypageNav,
  MypageBody,
} from "./Mypage.styles";

export default function MypageUI(props: any) {
  return (
    <Wrapper>
      <MypageNav>
        <ImgWrapper>
          {props.prev || props.data?.fetchUserLoggedIn.picture ? (
            <UserImg src={props.prev || props.data.fetchUserLoggedIn.picture} />
          ) : (
            <img src="/images/profile.png" style={{ width: "80px" }} />
          )}
          <ImgEditBtn onClick={props.onClickFile} />
        </ImgWrapper>
        <UserName>{props.data?.fetchUserLoggedIn.name}</UserName>
        <PointWrapper>
          <Point>
            {props.data?.fetchUserLoggedIn.userPoint.amount.toLocaleString()} P
          </Point>
          {/* <AddPointBtn>ADD POINT</AddPointBtn> */}
        </PointWrapper>
        <MypageMenu>
          <MenuItem onClick={props.onClickMenu} menu={props.menu} id="account">
            MY ACCOUNT
          </MenuItem>
          <MenuItem menu={props.menu}>ADD POINT</MenuItem>
          <MenuItem menu={props.menu}>MY COLLECTION</MenuItem>
          <MenuItem menu={props.menu}>FAVORITE ITEMS</MenuItem>
        </MypageMenu>
        {/* <EditBtn onClick={props.onClickUpload}>Edit</EditBtn> */}
        <UploadImg
          type="file"
          ref={props.inputRef}
          onChange={props.onChangeImg}
        />
      </MypageNav>
      <MypageBody></MypageBody>
    </Wrapper>
  );
}
