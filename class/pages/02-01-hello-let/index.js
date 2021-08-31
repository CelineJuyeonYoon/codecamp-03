export default function HelloLetPage() {

  function zzz() {
    
    document.getElementById("aaa").innerText = '반갑습니다.'

  }

  return (
    <button id="aaa" onClick={zzz}>안녕하세요?</button>
  )

}