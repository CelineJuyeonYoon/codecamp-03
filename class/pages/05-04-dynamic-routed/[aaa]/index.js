import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

export default function DynamicRoutedPage(){
  const router = useRouter()

  const {} = useQuery

  return(
    <>
      <div>{router.query.aaa}번 페이지 입니다.</div>
      <div>동적 페이지 이동 완료!</div>
    </>
  )
}