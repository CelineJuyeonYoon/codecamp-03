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
  MyAccount,
  AddPoint,
  MyCollection,
  FavoriteItems,
  MypageNav,
  MypageBody,
} from "./Mypage.styles";
import AccountSection from "./account/AccountSection";
import PointSection from "./point/PointSection";
import CollectionSection from "./collection/CollectionSection";
import FavoriteSection from "./favorite/FavoriteSection";

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
        </PointWrapper>
        <MypageMenu>
          <MyAccount onClick={props.onClickMenu} menu={props.menu} id="1">
            MY ACCOUNT
          </MyAccount>
          <AddPoint onClick={props.onClickMenu} menu={props.menu} id="2">
            ADD POINT
          </AddPoint>
          <MyCollection onClick={props.onClickMenu} menu={props.menu} id="3">
            MY COLLECTION
          </MyCollection>
          <FavoriteItems onClick={props.onClickMenu} menu={props.menu} id="4">
            FAVORITE ITEMS
          </FavoriteItems>
        </MypageMenu>
        <UploadImg
          type="file"
          ref={props.inputRef}
          onChange={props.onChangeImg}
        />
      </MypageNav>
      <MypageBody>
        {props.menu == 1 && <AccountSection />}
        {props.menu == 2 && <PointSection />}
        {props.menu == 3 && <CollectionSection />}
        {props.menu == 4 && <FavoriteSection />}
      </MypageBody>
    </Wrapper>
  );
}
