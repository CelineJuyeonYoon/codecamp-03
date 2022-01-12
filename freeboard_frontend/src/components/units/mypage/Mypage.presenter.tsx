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
          <MyAccount
            id="account"
            onClick={props.onClickChangeContent}
            section={props.section}
          >
            MY ACCOUNT
          </MyAccount>
          <AddPoint
            onClick={props.onClickChangeContent}
            id="addpoint"
            section={props.section}
          >
            ADD POINT
          </AddPoint>
          <MyCollection
            onClick={props.onClickChangeContent}
            id="collection"
            section={props.section}
          >
            MY COLLECTION
          </MyCollection>
          <FavoriteItems
            onClick={props.onClickChangeContent}
            id="favorites"
            section={props.section}
          >
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
        {props.section === "account" && <AccountSection />}
        {props.section === "addpoint" && <PointSection />}
        {props.section === "collection" && <CollectionSection />}
        {props.section === "favorites" && <FavoriteSection />}
      </MypageBody>
    </Wrapper>
  );
}
