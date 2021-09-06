// 조건문 연습
// 홀짝
// 온도
// 며칠

// 018. 조건문연습
function boolean(input1, input2) {

	if(input1 == false && input2 == false) {
		console.log("false")
	} else {
    console.log("true")
  }
}

// 019. 홀짝
function evenOdd(num){
	if(num === 0) {
		console.log("Zero");
	} else if(num % 2 === 0) {
		console.log("Even");
	} else if(num % 2 !== 0) {
		console.log("Odd");
	}
}

// 020. 온도 // 문제에서는 && 연산자를 쓰라고 했는데, 이렇게 해서 안써도 되지 않을까??
function temperature(num){
  if(num < 19){
    console.log("조금 춥네요")
  } else if(num < 24){
    console.log("날씨가 좋네요")
  } else {
    console.log("조금 덥습니다")
  }
}

// 021. 며칠
function days(month){
  if(month < 1 || month > 12){
    console.log("알맞은 달을 입력해주세요.")
  } else if(month === 2){
    console.log(28)
  } else if(month === 4 || month === 6 || month === 9 || month === 11){
    console.log(30)
  } else {
    console.log(31)
  }
}

// 022. 미니 계산기
function calculator(num1, num2, operator){
  if(!(operator === '+' || operator === '-' || operator === '*' || operator === '/')){
    console.log("올바른 입력이 아닙니다")
  } else if(operator === '+'){
    console.log(num1 + num2)
  } else if(operator === '-'){
    console.log(num1 - num2)
  } else if(operator === '*'){
    console.log(num1 * num2)
  } else if(operator === '/'){
    console.log(num1 / num2)
  }
}