function solution(board, moves) {
  let arr = [];
  let result = 0;
  for (let i = 0; i < moves.length; i++) {
    if (board[moves[i] - 1].pop() === 0) {
      board[moves[i] - 1].pop();
    } else arr.push(board[moves[i] - 1].pop()); // 작동위치에서 빼서, arr에 넣기
    // console.log(board[moves[i]-1].pop())
    console.log(arr);
  }
  // console.log(arr)
}
/// 이거 왜 arr = [ 3, 0, 5, 0, 4 ] 가 되는거야..?
