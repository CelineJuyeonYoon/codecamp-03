// function solution(s) {
//   if(Boolean(Number(s))===true && s.indexOf('+')===-1 && s.indexOf('-')===-1){
//       return true
//   }   else{
//       return false
//   }
  // return s.length === 4 || s.length === 6 && Number(s) && !s.indexOf('+') && !s.indexOf('-') ? true : false
// }

// inNaN()
// split 이용해서 s를 배열로 만들어 filter를 쓸 수 있따..!

s.split('')
  .filter(str => inNaN(str) === true) // 문자열만 걸러 배열로
  .length === 0 // 이게 true면 문자열 없는 것!