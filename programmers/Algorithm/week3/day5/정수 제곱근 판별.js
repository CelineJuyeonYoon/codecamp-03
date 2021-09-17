// 문제 설명
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.

function solution(n) {
  let num = 1;
  while (num * num < n) {
    num++;
  }
  return num * num === n ? (num + 1) * (num + 1) : -1;
}

function solution(n) {
  let result = -1;
  for (let i = 1; i * i < n; i++) {
    if (i * i === n) {
      result = i + 1;
      return result * result;
    }
  }
  return result;
}

function solution(n) {
  let sqrt = Math.sqrt(n);
  if (Number.isInteger(sqrt)) {
    sqrt += 1;
    return sqrt * sqrt;
  }
  return -1;
}
