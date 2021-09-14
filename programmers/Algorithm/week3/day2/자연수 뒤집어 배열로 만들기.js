function solution(n) {
  let arr = [];
  let str = String(n);
  for (let i = str.length - 1; i >= 0; i = i - 1) {
    arr.push(Number(str[i]));
  }
  return arr;
}

function solution(n) {
  let result = n
    .toString()
    .split("")
    .reverse()
    .map((el) => Number(el));
  return result;
}
