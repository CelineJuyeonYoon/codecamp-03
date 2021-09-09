function solution(s) {
    
  return (s.length === 4 || s.length === 6) 
      && isNaN(Number(s)) === false
      && s.includes('+') === false
      && s.includes('-') === false
      && s.includes('e') === false
      ? true : false
}

// inNaN()
// split 이용해서 s를 배열로 만들어 filter를 쓸 수 있따!

s.split('')
  .filter(str => inNaN(str) === true) // 문자열만 걸러 배열로
  .length === 0 // 이게 true면 문자열 없는 것!

// 아래코드 안되는 이유..?
// 알아냄!!! Number함수는 e도 숫자로 변환하여 지수로 계산한다!!!!
// ex) console.log(Number'2e3') => 2000

function solution(s) {
  
  return (s.length === 4 || s.length === 6) 
      && isNaN(Number(s)) === false
      && s.includes('+') === false
      && s.includes('-') === false
      ? true : false
}