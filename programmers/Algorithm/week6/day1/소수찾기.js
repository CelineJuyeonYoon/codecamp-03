// 소수 찾기
// 문제 설명
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 제한 조건
// n은 2이상 1000000이하의 자연수입니다.
// 입출력 예
// n	result
// 10	4
// 5	3
function solution(n) {
  let result = 0;
  for (let i = 2; i <= n; i++) {
    let sum = 0;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        sum += 1;
      }
    }
    if (!sum) {
      result += 1;
    }
  }
  return result;
}
//효율성 미통과
let solution = (n) => {
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr.filter((e) => e).length;
};
// i*i<=n 까지만
