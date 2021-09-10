import CommentWrite from "../../src/components/units/board/comment/BoardComment.container";

export default function CommentWritePage() {
  return <CommentWrite />;
}

// import styled from "@emotion/styled";
// import { useState } from "react";
// import { useMutation, gql } from "@apollo/client";

// const Wrapper = styled.div``;
// const CommentHead = styled.div`
//   display: flex;
//   align-items: center;
// `;
// const CommentImg = styled.img``;
// const Comment = styled.span`
//   margin-left: 14px;
//   font-size: 18px;
//   font-weight: 500;
// `;
// const CommentInfo = styled.div`
//   padding-top: 40px;
// `;
// const Writer = styled.input`
//   width: 180px;
//   height: 52px;
//   border: 1px solid #bdbdbd;
//   margin-right: 24px;
//   padding-left: 20px;
// `;
// const Password = styled.input`
//   width: 180px;
//   height: 52px;
//   border: 1px solid #bdbdbd;
//   margin-right: 26px;
//   padding-left: 20px;
// `;
// const RatingBtn = styled.button`
//   cursor: pointer;
//   border: none;
//   background-color: transparent;
//   width: 20px;
//   height: 20px;
// `;
// const CommentInput = styled.textarea`
//   width: 1200px;
//   height: 108px;
//   margin-top: 20px;
//   border: 1px solid #bdbdbd;
//   border-bottom: 1px solid #f2f2f2;
//   padding-left: 20px;
//   padding-top: 20px;
//   resize: none;
// `;
// const CommentSubmitBar = styled.div`
//   width: 1200px;
//   height: 51px;
//   border: 1px solid #bdbdbd;
//   border-top: none;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;
// const CommentCount = styled.span`
//   color: #bdbdbd;
//   padding-left: 20px;
// `;
// const SubmitBtn = styled.button`
//   background-color: black;
//   color: white;
//   border-style: none;
//   width: 91px;
//   height: 52px;
// `;

// const CREATE_BOARD_COMMENT = gql`
//   mutation createBoardComment(
//     $createBoardCommentInput: CreateBoardCommentInput!
//     $boardId: ID!
//   ) {
//     createBoardComment(
//       createBoardCommentInput: $CreateBoardCommentInput
//       boardId: $boardId
//     ) {
//       _id
//       contents
//       rating
//       createBoardCommentupdatedAt
//     }
//   }
// `;

// export default function CommentWritePage() {
//   const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
//   const [writer, setWriter] = useState("익명");
//   const [password, setPassword] = useState("");
//   const [rating, setRating] = useState(0);
//   const [contents, setContents] = useState("");
//   function onChangeWriter(event) {
//     setWriter(event.target.value);
//   }

//   function onChangePassword(event) {
//     setPassword(event.target.value);
//   }

//   function onClickRating1() {
//     setRating(1);
//   }
//   function onClickRating2() {
//     setRating(2);
//   }
//   function onClickRating3() {
//     setRating(3);
//   }
//   function onClickRating4() {
//     setRating(4);
//   }
//   function onClickRating5() {
//     setRating(5);
//   }

//   function onChangeContents(event) {
//     setContents(event.target.value);
//   }

//   async function onClickCommentSubmit() {
//     if (contents !== "" && rating !== 0) {
//       await createBoardComment({
//         boardId: props.router.query.id,
//         createBoardCommentInput: {
//           writer,
//           password,
//           contents,
//           rating,
//         },
//       });
//     }
//   }

//   return (
//     <Wrapper>
//       <CommentHead>
//         <CommentImg src="../../images/comment.png" />
//         <Comment>댓글</Comment>
//       </CommentHead>
//       <CommentInfo>
//         <Writer type="text" placeholder="작성자" onChange={onChangeWriter} />
//         <Password
//           type="password"
//           placeholder="비밀번호"
//           onChange={onChangePassword}
//         />
//         <RatingBtn onClick={onClickRating1}>
//           <img src="../../images/star.png" />
//         </RatingBtn>
//         <RatingBtn onClick={onClickRating2}>
//           <img src="../../images/star.png" />
//         </RatingBtn>
//         <RatingBtn onClick={onClickRating3}>
//           <img src="../../images/star.png" />
//         </RatingBtn>
//         <RatingBtn onClick={onClickRating4}>
//           <img src="../../images/star.png" />
//         </RatingBtn>
//         <RatingBtn onClick={onClickRating5}>
//           <img src="../../images/star.png" />
//         </RatingBtn>
//       </CommentInfo>
//       <CommentInput
//         onChange={onChangeContents}
//         placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
//       />
//       <CommentSubmitBar>
//         <CommentCount>0/100</CommentCount>
//         <SubmitBtn onClick={onClickCommentSubmit}>등록하기</SubmitBtn>
//       </CommentSubmitBar>
//     </Wrapper>
//   );
// }
