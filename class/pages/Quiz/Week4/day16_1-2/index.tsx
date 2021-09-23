import {useRouter} from 'next/router'
import { useEffect, useState, useRef } from 'react'

export default function FunctionalComponentLifecycle(){
  const router = useRouter()
  const [isChange, setIsChange] = useState(false)
  const inputRef = useRef<HTMLInputElement>()

  function onClickIsChange(){
    setIsChange(true)
  }

  function onClickMove(){
    router.push('/')
  }

  useEffect(() => {
    alert('Rendered!')
    inputRef.current.focus()

    return() => {
      alert('Bye!!')
    }
  }, [])

  useEffect(() => {
    alert('Changed!!')
  }, [])
  
    return(
      <>
        <button onClick={onClickIsChange}>변경</button>
        <button onClick={onClickMove}>이동</button>
        <input type='password' ref={inputRef} />
      </>
    )
}