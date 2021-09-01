  import { useState } from 'react'
  // contst [ state이름, state저장도구 ] = useState('초기값')
  export default function HelloStatePage2(){
    const [ gre, setGre ] = useState('안녕하세요')
    
    function iii(){
      setGre('반갑습니다~!~!')
    }

    return(
      <button onClick={iii}>{gre}</button>
    )
  }