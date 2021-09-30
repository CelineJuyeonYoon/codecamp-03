import { gql, useQuery } from '@apollo/client'
import styled from '@emotion/styled'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid' // as는 이름변경 용도(필수x)

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int){
    fetchBoards(search: $search, page: $page){
      _id
      writer
      title
      createdAt
    }
  }
`

const Column = styled.span`
  padding: 0px 50px;
`
const Page = styled.span`
  padding: 0px 10px;
  cursor: pointer;
`

export default function SearchPage(){
  const [mySearch, setMySearch] = useState("")
  const [myKeyword, setMyKeyword] = useState("") // 입력한 검색어와 검색버튼 누른 키워드 분리
  const { data, refetch } = useQuery(FETCH_BOARDS)

  function onChangeSearch(event){
    setMySearch(event.target.value)
  }

  function onClickSearch(){
    refetch({ search: mySearch }) // 페이지 안넣으면 자동 1페이지로 되어있음(by백엔드)
    setMyKeyword(mySearch)
  }

  function onClickPage(event){
    refetch({search: myKeyword, page: Number(event.target.id)}) // 페이지는 키워드의 해당페이지로 불러오기!
  }
  // 페이지를 눌렀을 때, 검색어의 해당페이지를 불러올 수 있게!

  return(
    <>
      <div>검색페이지</div>
      검색어: <input type="text" onChange={onChangeSearch}/> 
      <button onClick={onClickSearch}>검색</button>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <Column>{el.createdAt}</Column>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <Page key={uuidv4()} onClick={onClickPage} id={String(index+1)} >{index + 1} 
        </Page>
      ))}
    </>
  )
}