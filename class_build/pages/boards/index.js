import Head from "next/head";

export default function BoardPage() {
  return (
    <>
      <Head>
        <meta property="og: title" content="나의 사이트 게시판페이지" />
        <meta property="og: description" content="환영합니다!!" />
        <meta
          property="og: image"
          content="https://i.etsystatic.com/isla/4fb54d/41847388/isla_280x280.41847388_axtz3xot.jpg?version=0"
        />
      </Head>
      <div>게시판입니다!</div>
    </>
  );
}
