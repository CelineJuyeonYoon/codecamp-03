function solution(s) {
  let arr = s.split(" ");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 === 0) {
        newArr.push(arr[i][j].toUpperCase());
      } else {
        newArr.push(arr[i][j]);
      }
    }
    if (i !== arr.length - 1) newArr.push(" ");
  }
  return newArr.join("");
}

function solution(s) {
  let answer = "";
  let idx = 0; // 단어별로의 인덱스 값을 판단하는 함수
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      idx = 0;
      answer += " ";
    } else {
      answer =
        answer + (inx % 2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase());
    }
  }
  return answer;
}

function solution(s) {
  const answer = s
    .split(" ")
    .map((str) => {
      return str
        .split("")
        .map((letter, i) => {
          return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase;
        })
        .join("");
    })
    .join(" ");
}
