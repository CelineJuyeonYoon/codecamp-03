// 숫자 더하기
// 특정 문자열 세기
// 문자열 삽입
// 홀수 문자열
// 가장 큰 수 찾기

// **023. 숫자 더하기**
function sum(num){
  let count = 0;
  for(let i=0; i<=num; i++){
    count = count + i
  }
  console.log(count)
}

// **024. 특정 문자열 세기**
function countLetter(str){
  let count=0;
  for(let i=0; i<str.length; i++){
    if(str[i]==='a' || str[i]==='A'){
      count = count+1
    }
  } return count
}

// **025. 문자열 삽입**
// function makeNumber(num){
//   let result
//   for(let i=1; i<=num; i++){
//     if(!result){
//       result = i
//     } 
//       result = result + '-' + i
//   }
//   return result
// }

function makeNumber(num){
  let result
  for(let i=1; i<=num; i++){
    if(!result){
      result = i
    } else {
      result = result + '-' + i
    }
  }
  return result
}

// better
function makeNumber(num){
  let result = ''
  for(let i=1; i<=num; i++){
    result = result + i
    if(i!==num){
      result = `${result}-`
    }
  } return result
}

// **026. 홀수 문자열**
// function makeOdd(num){
//   let result
//   for(let i=1; i<=num; i++){
//     if(i%2!==0){
//       result = result + 'i'
//     }
//   } return result
// }

function makeOdd(num){
  let result = ''
  for(let i=1; i<=num; i++){
    if(i%2!==0){
      result = result + i
    }
  } return result
}

// **027. 가장 큰 수 찾기**
function bigNum(str){
  let theBig = ''
  for(let i=0; i<str.length; i++){
    if(str[i]>theBig){
      theBig = str[i]
    }
  } return theBig
}
