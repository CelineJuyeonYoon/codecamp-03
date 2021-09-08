function solution(seoul) {
  const index = seoul.findIndex((el)=>(el==='Kim'))
  return `김서방은 ${index}에 있다`
}
// indexOf로 더 간단하게 찾을 수 있다!(아래)

// function solution(seoul) {
//   const index = seoul.indexOf('Kim')
//   return `김서방은 ${index}에 있다`
// }