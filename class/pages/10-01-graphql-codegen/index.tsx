// import BoardWrite from "../../src/components/units/quiz/write/BoardWrite.container" 

// export default function DynamicBoardWrite(){
//   return<BoardWrite />
// }

import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {IMutation, IMutationCreateBoardArgs} from '../../src/commons/types/generated/types'

const CREATE_BOARD = gql`
    # 여기는 자바스크립트 주석입니다
    mutation createBoard($writer: String, $title: String, $contents: String    ) {
        createBoard(writer: $writer, title: $title, contents: $contents){
            number
            message
        }
    }
`
// 여기는 자바스크립트 주석입니다
export default function DynamicBoardWrite(){
    const router = useRouter()

    const [ createBoard ] = useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(CREATE_BOARD)
    const [myWriter, setMyWriter] = useState("") // 초기값이 빈문자열""이므로 타입추정에 의해 String
    const [myTitle, setMyTitle] = useState<string>("")
    const [myContents, setMyContents] = useState<string>("")

    function onChangeMyWriter(event){
        setMyWriter(event.target.value)
    }

    function onChangeMyTitle(event){
        setMyTitle(event.target.value)
    }

    function onChangeMyContents(event){
        setMyContents(event.target.value)
    }

    async function aaa(){
        try {

            const result = await createBoard({
                variables: { writer: myWriter, title: myTitle, contents: myContents }
            })
            // result.data.createBoard.number // 타입스크립트로 지정을 했기 때문에 .만 붙이면 자동으로 선택지가 나옴
            console.log(result)
            console.log(result.data.createBoard.number)
            // router.push('/05-06-dynamic-board-read/' + result.data.createBoard.number) // 옛날방식
            router.push(`/05-06-dynamic-board-read/${result.data.createBoard.number}`) // 최신방식(템플릿 리터럴)

        } catch(error){
            console.log(error)
        }
        
    }

    return (
        <>
            //
            작성자: <input type="text" onChange={onChangeMyWriter} /><br />
            제목: <input type="text" onChange={onChangeMyTitle} /><br />
            내용: <input type="text" onChange={onChangeMyContents} /><br />
            {/* <button onClick={aaa}>GRAPHQL-API 요청하기!!!</button> */}
        </>
    )
}