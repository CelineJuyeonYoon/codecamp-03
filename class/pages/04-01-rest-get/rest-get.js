import axios from 'axios'

export default function MyRestGetPage(){

  async function onClickAct(){
    const result = await axios.get("https://koreanjson.com/users/3")
    console.log(result)
  }

  return(
    <button onClick={onClickAct}>REST-API 실행하기!!!</button>
  )
}
