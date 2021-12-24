import { Wrapper, MenuItem } from "./LayoutNavagation.styles";

export default function LayoutNavigationUI(props: any) {
  return (
    <Wrapper>
      <MenuItem>Search</MenuItem>
      <MenuItem id="/market" onClick={props.onClickMove}>
        List
      </MenuItem>
      <MenuItem id="/boards" onClick={props.onClickMove}>
        Board
      </MenuItem>
      <MenuItem>Mypage</MenuItem>
    </Wrapper>
  );
}
