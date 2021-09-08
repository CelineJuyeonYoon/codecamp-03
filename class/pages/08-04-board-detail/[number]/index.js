import { useQuery, gql } from '@apollo/client'
import {useRouter} from 'next/router'

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            writer
            title
            contents
        }
    }
`

export default function BoardDetailPage(){
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number) }
    })

    function onClickToEdit(){
        router.push(`/08-04-board-detail/${router.query.number}/edit`)
    }

    return (
        <>
            <div>게시물 상세 페이지 입니다!!!</div>
            <div>게시글 번호: {router.query.number}</div>
            <div>게시글 작성자: {data?.fetchBoard.writer}</div>
            <div>게시글 제목: {data?.fetchBoard.title}</div>
            <div>게시글 내용: {data?.fetchBoard.contents}</div>
            {/* <div>게시글 작성자: {data ? data.fetchBoard.writer : "loding..."}</div>
            <div>게시글 제목: {data ? data.fetchBoard.title : "loading..."}</div>
            <div>게시글 내용: {data ? data.fetchBoard.contents : "loading..."}</div> */}
            <button onClick={onClickToEdit}>수정하러 이동하기</button>
        </>
    )

}