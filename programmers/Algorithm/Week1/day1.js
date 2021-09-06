// 배열의 선언과 할당
// 배열의 기능
// 객체의 선언과 할당
// 객체의 키 & 값 추가

// 003. 배열의 선언과 할당
let fruits = []
fruits.push("사과", "바나나", "파인애플")

// 004. 배열의 기능
let fruits = ["사과", "바나나", "파인애플"]
let newFruits = []
newFruits.push(fruits[fruits.length-1])

// 005. 배열의 기능
let student = ["철수", "영희", "훈이", "짱구", "유리"]
let newArr = student.slice(0, 3)

// 006. 배열의 기능
let fruits = ["사과", "바나나"]
fruits[0] = "맛있는 "+fruits[0]
fruits[1] = "맛있는 "+fruits[1]

// 007. 문자열 배열
const number = "01012345678"
let arr = [number.slice(0,3), number.slice(3,7), number.slice(7)]

// 008. 객체의 선언과 할당
let student = {}
student.name = '철수'

// 009. 객체의 키&값 추가
const student = {
	name: "철수",
	age: 8,
};

const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}

student.school = school;

// 010. 객체의 키&값 삭제
let student = {
	name: "철수",
	age: 8,
	drink: "사이다"
};

delete student.drink