export default function HelloLetPage2(){


  function jjj (){
    document.getElementById('yyy').innerText = '반갑습니다.'
  }

  return(
    <button id="yyy" onClick={jjj}>안녕하세요!!</button>
  )
}