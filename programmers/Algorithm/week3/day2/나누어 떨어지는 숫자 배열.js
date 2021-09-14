function solution(arr, divisor) {
  let result = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      result.push(arr[i]);
    }
  }
  if (result.length === 0) {
    return [-1];
  }
  return result;
}

answer = arr
  .filter((number) => {
    return number % divisor === 0;
  })
  .sort((a, b) => a - b);

return answer.length === 0 ? [-1] : answer;
