export default function TypescriptPage(){

  // 문자타입 = 타입추론
  let aaa: string = "안녕하세요"
  aaa = 3
  
  // 문자타입
  let bbb: string;
  bbb = '반갑습니다'
  bbb = 123
  
  // 숫자타입
  let ccc: number = 5
  ccc = '333'
  
    // 배열타입
    let ddd: number[] = [1, 2, 3, 4, 5]
    let eee: (number | string)[] = ["1", 2, 3, 4, 5] // number와 string이 함께 올 수 있다.
    let fff: (number[] | string[]) = [1, 2, 3, 4, 5] // 전체가 number이거나 전체가 string이거나
  
  // 객체타입
  interface IProfile {
    school: string
    age: number
  }
  let profile: IProfile = {
    school: '다람쥐 초등학교',
    age: 13
  }
  profile.age = 'dd'

  return <div>타입스크립트 페이지입니다</div>
}