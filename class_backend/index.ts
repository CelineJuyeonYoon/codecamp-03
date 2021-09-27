import { createConnection } from 'typeorm'
import { ApolloServer, gql } from 'apollo-server'
import Board from './Board.postgres'

// 타입정의(docs에서 보이는 부분)
const typeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String
    age: Int
  }

  type Return {
    message: String
    number: Int
  }

  type Board {
    number: Int
    writer: String
    title: String
    age: Int
  }

  type Query {
    fetchBoard: Board
    fetchBoards: [Board] # 객체를 감싼 배열형태
  }

  type Mutation {
    # createBoard(wrtier: String, title: String, age: Int): Return
    createBoard(createBoardInput: CreateBoardInput): Return
    updateBoard: Return
    deleteBoard: Return
  }
`
// 함수실행(실제 실행되는 부분)
const resolvers = {
  Query: {
    fetchBoard: async() => {
      // 데이터베이스에서 해당하는 데이터 꺼내서 브라우저에 던져주기(응답하기)
      const result = await Board.findOne({
        where: {number: 2, deletedAt: null}
      })
      return result
      // return {
      //   writer: result?.writer, 
      //   title: result?.title, 
      //   age: result?.age
      // }
    },
    fetchBoards: async() => {
      const result = await Board.find({
        where: {deletedAt: null}
      }) // 배열 형태
      return result
    }
  },
  Mutation: {
    createBoard: async(_: any, args: any) => { // args - 프론트엔드에서 들어오는 데이터
      // 데이터베이스에 데이터 입력하기
      const result = await Board.insert({
        ...args.createBoardInput // spread 연산자를 이용해서 간단하게 쓰기
        // title: args.createBoardInput.title, 
        // writer: args.createBoardInput.writer, 
        // age: args.createBoardInput.age
      })
        // 입력된 데이터 변수에 담기
      return {message: '성공했습니다', number: result.identifiers[0].number}
    },
    updateBoard: async(_: any, args: any) => {
      await Board.update({number: 1}, {title: '정글은 언제나 흐림뒤 맑음'})
      // update는 객체 2개 - 앞에 조건, 뒤에 변경할 값
      return {message: '수정완료!'}
    },
    deleteBoard: async(_: any, args: any) => {
      await Board.update({number: 4}, {deletedAt: new Date()})
      return {message: '삭제완료!'}
    } // 실제로는, 중요한 데이터일 수 있으므로 Board.delete로 삭제하지 않음.
      // 대신 update함(isDeleted라는 값을 true로 만들어서 query할 때 안보이게)
      // 더 나아가서, deletedAt 으로 삭제된 시간을 적어서,
      // 값이 있으면 삭제된 것으로 하고, 삭제된 시간을 나타낼 수도 있다.
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})
// 데이터베이스 접속 정보
createConnection({
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres2021",
  port: 5018,
  host: "34.64.221.225",
  entities: [__dirname + "/*.postgres.ts"],
  logging: true,
  synchronize: true,
}).then(() => {
  // 연결성공시 실행
  console.log('접속완료!!')
  server.listen({port: 4000})
})
.catch((error) => {console.log(error)})