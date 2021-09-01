export default function CounterLetPage2(){

  function rrr(){
    let qqq = Number(document.getElementById('ddd').innerText) + 1
    document.getElementById('ddd').innerText = qqq
  }
  return(
    <>
      <div id="ddd">0</div>
      <button onClick={rrr}>카운트증가</button>
    </>
  )
}