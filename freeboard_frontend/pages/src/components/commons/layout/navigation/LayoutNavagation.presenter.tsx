import { Wrapper, MenuItem } from "./LayoutNavagation.styles";

export default function LayoutNavigationUI(props) {
  return (
    <Wrapper>
      <MenuItem>Search</MenuItem>
      <MenuItem id="/market" onClick={props.onClickMove}>
        List
      </MenuItem>
      <MenuItem id="/boards/board_list" onClick={props.onClickMove}>
        Board
      </MenuItem>
      <MenuItem>Mypage</MenuItem>
    </Wrapper>
  );
}
