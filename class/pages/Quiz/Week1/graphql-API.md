1) 철수의 나이는 몇살인가요?(나이만 조회해 주세요.)
1

2) 영희의 학교는 어디인가요?(학교만 조회해 주세요.)
다람초

3) 3번 게시글의 내용과 작성일이 무엇인가요?(내용과 작성일만 조회해 주세요.)
      "contents": "우리",
      "createdAt": "2021-09-01T03:32:03.744Z"

4) 본인의 이름으로 프로필을 작성해 보세요.
mutation{
  createProfile(name: "celineYoon" age:28 school:"Kookmin"){
    message
  }
}

5) 본인의 이름으로 게시글을 작성해 보세요.
mutation{
  createBoard(writer:"celineY" title:"test" contents:"successful"){
    message
  }
}

6) 자신의 프로필을 조회해 보세요.
{
  "data": {
    "fetchProfile": {
      "number": 258,
      "name": "celineYoon",
      "age": 28,
      "school": "Kookmin"
    }
  }
}

7) 자신의 게시글을 조회해 보세요.
query{
  fetchBoard(number: 160){
    number
    writer
    title
    contents
    createdAt
  }
}

8) 본인의 프로필에서, 학교를 자신이 졸업한 초등학교로 바꿔보세요.

9) 본인의 게시글에서, 제목과 내용을 바꿔보세요.

10) 자신이 좋아하는 만화 주인공으로 프로필을 작성해 보세요.

11) 위 10번에서 작성한 프로필을 삭제해 보세요.

12) 상품을 하나 만들어 보세요.

13) 위 12번에서 만들었던 상품의 가격을 500원 인상해 보세요.
mutation{
  updateProduct(productId:f10ad3fe-1236-4b26-a39a-2b3ffbc8a219 price: 99500){
    message
  }
}

14) 위에서 만든 상품을 조회하되, 가격만 조회해 보세요.

15) 조회했던 상품을 삭제해 보세요.

16) 삭제한 상품이 정말로 삭제되었는지 다시 한번 조회해 보세요.

17) 게시물 목록 중, 2페이지를 조회해 보세요.

18) 게시물 목록을 조회할 때, page를 입력하지 않으면, 어떤 결과가 발생하나요?

19) 프로필이 전체 몇 개가 있는지 확인해 보세요.

20) 게시물은 몇 개가 있나요?