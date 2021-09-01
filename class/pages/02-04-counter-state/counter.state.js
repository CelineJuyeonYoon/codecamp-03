import { useState } from 'react'

export default function CounterStatePage2(){
  const [ ct, setCt ] = useState(0)

  function zzz(){
    setCt(ct+1)
  }

  return(
    <>
      <div>{ct}</div>
      <button onClick={zzz}>카운트증가</button>
    </>
  )
}