function solution(n) {
  let sum = 0;
  for(let i=0; i<=n; i++){
      if(n%i===0){
        sum += i
      }
  }
  return sum;
}


filter
let sum = 0;
const array =
  new Array(n)
  .fill(1)
  .forEach((num, index) => {
    n % (num + index) === 0
    ? sum = sum + (num + index)
    : null
  })