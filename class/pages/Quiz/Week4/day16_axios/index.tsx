import axios from "axios";
import { useState, useEffect, useRef } from "react";
// import ReactPlayer from "react-player";

export default function AxiosTest(){
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
      <input type='text' ref={inputRef} onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색</button>
      {/* {list && list.documents.map((data) => <ReactPlayer url={data.url}></ReactPlayer>)} */}
      {list && list.documents.map((data) => 
      <div key={data.isbn}>{data.title}</div>)}
    </>
  )
}