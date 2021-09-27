import {getFirestore, collection, addDoc, getDocs} from 'firebase/firestore/lite'
import {firebaseApp} from '../_app'

export default function FirebasePage(){
  async function onClickSubmit(){
    const blog = collection(getFirestore(firebaseApp), 'blog');
    await addDoc(blog, { // blog 컬렉션에 문서를 추가한다.
      writer: '철수',
      title: '제목입니다',
      contents: '내용입니다',
    }) // 문서는 객체니까 {}
  }

  async function onClickFetch(){
    const blog = collection(getFirestore(firebaseApp), 'blog')
    const result = await getDocs(blog) // blog 컬렉션을 가져온다.
    const docs = result.docs.map((el) => el.data()) // docs는 배열로 열리기 때문에 각각을 map으로 열어 data를 가져온다.
    console.log(docs)
    console.log(result)
  }

  return(
    <>
      <div>파이어베이스 페이지입니다</div>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>불러오기</button>
    </>
  )
}