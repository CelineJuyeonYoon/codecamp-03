import { useState } from 'react'

export default function HelloStatePage() {

  // contst [ state이름, state저장도구 ] = useState('초기값')
  const [ aaa, setAaa ] = useState('안녕하세요')

  function zzz() {
    setAaa('반갑습니다')
  }

  return(
    <div>
      <button onClick={zzz}>{aaa}</button>
      <button onClick={zzz}>{aaa}</button>
      <button onClick={zzz}>{aaa}</button>
      <button onClick={zzz}>{aaa}</button>
      <button onClick={zzz}>{aaa}</button>
    </div>
  )

}