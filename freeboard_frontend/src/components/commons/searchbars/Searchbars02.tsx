import styled from "@emotion/styled";
import _ from "lodash";
import { ChangeEvent } from "react";

const SearchBar = styled.div`
  width: 50vw;
`;
const SearchBarInput = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: 1px solid black;
  padding-left: 20px;
  :focus {
    outline: none;
  }
`;

export default function SearchBars02(props: any) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data, page: 1 });
    props.onChangeKeyword(data);
  }, 500);

  function onChangeSearchBar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  return (
    <SearchBar>
      <SearchBarInput
        placeholder="검색어를 입력해주세요."
        onChange={onChangeSearchBar}
      />
    </SearchBar>
  );
}
