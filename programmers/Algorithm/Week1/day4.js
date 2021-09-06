// 점수에 따른 등급
// 마이페이지

// 41**. 조건문 실전 적용 - 점수에 따른 등급**
function grade(score) {
  let result = ""
  if(score > 100 || score < 0){
    result = "잘못된 점수입니다"
  } else if(score >= 90){
    result = "A"
  } else if(score >= 80){
    result = "B"
  } else if(score >= 70){
    result = "C"
  } else if(score >= 60){
    result = "D"
  } else{
    result = "F"
  }
  return result
}

// **043. 마이페이지**
const myShopping = [
  { category: "과일", price: 12000　},
  { category: "의류", price:10000　 },
  { category: "의류", price: 20000　},
  { category: "장난감", price: 9000 },
  { category: "과일", price: 5000　 },
  { category: "의류", price: 10000  },
  { category: "과일", price: 8000　　},
  { category: "의류", price: 7000　　},
  { category: "장난감", price: 5000  },
  { category: "의류", price: 10000　 },
]

function myGrade(){
  let count = 0
  let totalPrice = 0
  let grade = ""
  for(let i=0; i<myShopping.length; i++){
    if(myShopping[i].category === "의류"){
      count = count + 1
      totalPrice = totalPrice + myShopping[i].price
    }
  }

  if(count<3){
    grade = "Bronze"
  } else if(count<5){
    grade = "Silver"
  } else{
    grade = "Gold"
  }

  let message = `의류를 구매한 횟수는 총 ${count}회 금액은 ${totalPrice}원이며 등급은 ${grade}입니다.`
  return message
}