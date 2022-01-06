import styled from "@emotion/styled";
import _ from "lodash";
import { ChangeEvent } from "react";

const SearchBar = styled.div`
  width: 50vw;
`;
const SearchBarInput = styled.input`
  width: 100%;
  height: 30px;
  background-color: #f2f2f2;
  border-radius: 10px;
  border: none;
  padding-left: 20px;
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
