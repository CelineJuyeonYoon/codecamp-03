// 하샤드 수
// 문제 설명
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 1 이상, 10000 이하인 정수입니다.

function solution(x) {
  let str = String(x)
  let sum = 0
  for(let i=0; i<str.length; i++){
      sum += Number(str[i])
  }
  return !(x%sum)
}

// 참고할 풀이
function solution(x) {
    let num = x;
    let sum = 0;
    do {
        sum += x%10; // 일의자리 추출, 합하기
        x = Math.floor(x/10); // 한자리씩 줄이기
    } while (x>0);

    return !(num%sum);
}

// String(x) 와 x.toString() 의 차이점
// toString은 변수에 담긴 값에만 적용 가능
// ex) 123.toString => SyntaxError

let sum = 0
x.toString()
.split('')
.forEach(num => {sum += Number(num)})

return !(x%sum)

// forEach는 map, filter와 다르게 return 이 없기 때문에, 함수 밖의 변수를 사용해야 한다.

// reduce이용하기
let sum = x.toString()
.split('')
.reduce((el, cu) => {
  return Number(el) + Number(cu)
})
return !(x%sum)