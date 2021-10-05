// 최대공약수와 최소공배수
// 문제 설명
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 제한 사항
// 두 수는 1이상 1000000이하의 자연수입니다.
function solution(n, m) {
  let result = []
  let cd = [1]
  for(let i = 2; i <= n; i++){
      if(n % i === 0 && m % i === 0){
          cd.push(i)
      }
  } result.push(cd.pop()) // 최대공약수 넣음
  let gcd = result[0]
  let lcm = gcd * (n / gcd) * (m / gcd)
  result.push(lcm)
  return result
}
// 간소화
function solution(n, m) {
  let gcd
  for(let i = 1; i <= n; i++){
      if(n % i === 0 && m % i === 0){
          gcd = i
      }
  }
  let lcm = n * m / gcd
  return [gcd, lcm]
}
// 유클리드 호제법
// a 를 b로 나눴을 때(a > b)
// 나머지 값이 0이 되면, 작은 수(b)가 최소공배수가 된다.
// 0이 되지 않으면 작은 수(a)가 큰 수가 되고, 나머지 값이 작은 수가 된다.
// 반복했을 때 0이 나오면, 작은 수가 최소공배수가 된다.