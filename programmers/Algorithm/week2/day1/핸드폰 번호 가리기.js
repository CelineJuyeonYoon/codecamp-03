function solution(phone_number) {
  var answer = '';
  for(let i=0; i<phone_number.length; i++){
      if(i<phone_number.length-4){
          answer = answer+'*'  
      } else{
          answer = answer+phone_number[i]
      }
  }
  return answer;
}

console.log(
  solution("01033334444")
)