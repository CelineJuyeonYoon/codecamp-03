import axios from "axios";
import { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  padding-top: 50px;
`
const SearchBar = styled.input`
  width: 500px;
  margin-right: 10px;
`
const BookList = styled.div`
  /* height: 500px; */
`

export default function MainPage(){
  const[search, setSearch] = useState('')
  const[list, setList] = useState('')
  const[isSearch, setIsSearch] = useState(false)

  const inputRef = useRef<HTMLInputElement>()

  useEffect(() => {
    testfunction()
    // console.log(list)
  }, [search])

  function onChangeSearch(){
    setSearch(inputRef.current.value)
    // setSearch(event.target.value)
  }

  function onClickSearch(){
    setIsSearch(true)
  }

  const testfunction = async() => {
    if(!search) return
    const {data} = await axios.get(
      `https://dapi.kakao.com/v3/search/book?query=${search}`, {headers: {
      Authorization: 'KakaoAK 8a27084212735d701e7d345258350d65'
    }})
    setList(data)
  } 
  return(
    <>
      <ReactPlayer url='https://www.youtube.com/watch?v=mlbZE-0A2EM'></ReactPlayer>
      <Wrapper>
      <SearchBar type='text' ref={inputRef} onChange={onChangeSearch} placeholder='book title'/>
      <button onClick={onClickSearch}>검색</button>
      </Wrapper>
      {list && list.documents.map((data) => 
      <BookList key={data.isbn}>{data.title}</BookList>)}
    </>
  )
}