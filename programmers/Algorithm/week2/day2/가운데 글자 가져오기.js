function solution(s) {
  var answer = '';
  var half = Math.floor(s.length/2)
  if(s.length%2!==0){
      answer = s[half]
  } else{
      answer = s.slice(half-1, half+1)
  }
  return answer;
}

console.log(solution('abcde'))

// undefined가 나왔던 이유
// function solution(s) {
//   var answer = '';
//   var half = s.length/2
//   if(s.length%2!==0){
//       answer = s[half]
//   } else{
//       answer = s.slice(half-1, half+1)
//   }
//   return answer;
// }
// 위처럼 Math.floor를 빼면, half가 소수가 되었을 때 s.[half] 는 undefined가 됨
// index에는 소수가 없기 때문!