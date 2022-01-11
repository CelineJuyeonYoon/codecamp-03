import AccountSection from "../../../units/mypage/account/AccountSection";
import CollectionSection from "../../../units/mypage/collection/CollectionSection";
import FavoriteSection from "../../../units/mypage/favorite/FavoriteSection";
import PointSection from "../../../units/mypage/point/PointSection";
import {
  Wrapper,
  UserImg,
  UploadImg,
  UserName,
  ImgEditBtn,
  ImgWrapper,
  Point,
  PointWrapper,
  MypageMenu,
  MyAccount,
  AddPoint,
  MyCollection,
  FavoriteItems,
  MypageNav,
  MypageBody,
} from "./SideBar.styles";

export default function SideBarUI(props: any) {
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
        </PointWrapper>
        <MypageMenu>
          <MyAccount onClick={props.onClickMenu} id="account">
            MY ACCOUNT
          </MyAccount>
          <AddPoint onClick={props.onClickMenu} id="addpoint">
            ADD POINT
          </AddPoint>
          <MyCollection onClick={props.onClickMenu} id="collection">
            MY COLLECTION
          </MyCollection>
          <FavoriteItems onClick={props.onClickMenu} id="favorites">
            FAVORITE ITEMS
          </FavoriteItems>
        </MypageMenu>
        <UploadImg
          type="file"
          ref={props.inputRef}
          onChange={props.onChangeImg}
        />
      </MypageNav>
      {/* <MypageBody>
        <AccountSection />
        <PointSection />
        <CollectionSection />
        <FavoriteSection />
      </MypageBody> */}
    </Wrapper>
  );
}
