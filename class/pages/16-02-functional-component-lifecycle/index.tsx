import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'

export default function FunctionalComponentLifecyclePage(){
  const router = useRouter()
  const [count, setCount] = useState(0)
  const inputRef = useRef<HTMLInputElement>()

  // componentDidMount 와 동일
  useEffect(() => {
    console.log('컴포넌트 마운트 완료!!')
    inputRef.current.focus()

    // componentWillUnmount 와 동일
    return() => {
      console.log('잘가요~~')
    }
  }, [])

  // componentDidUpdate 와 동일 (100% 일치는 아님, 처음부터 실행된다는 차이점o)
  useEffect(() => {
    console.log('컴포넌트 수정 완료!!')
  })

  // setState와 useEffect
  // useEffect(() => {
  //   setCount(prev => prev + 1)
  // }, [])
  
  // setState와 useEffect의 dependency-array
  // useEffect(() => {
  //   setCount(prev => prev + 1)
  // }, [count])
  // 무한루프...!

  function onClickCount(){
    setCount((prev) => prev + 1)
  }

  function onClickMove(){
    router.push('/')
  }

  return(
    <>
      현재카운트: {count}
      <button onClick={onClickCount}>카운트 증가!!</button>
      <button onClick={onClickMove}>페이지 이동</button>
      <input type="text" ref={inputRef} />
    </>
  )
}