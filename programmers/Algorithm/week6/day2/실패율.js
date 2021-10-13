// 실패율
// 문제 설명
// 실패율은 다음과 같이 정의한다.
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// 전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때, 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.

// 제한사항
// 스테이지의 개수 N은 1 이상 500 이하의 자연수이다.
// stages의 길이는 1 이상 200,000 이하이다.
// stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
// 각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
// 단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
// 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
// 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.
// 입출력 예
// N	stages	result
// 5	[2, 1, 2, 6, 2, 4, 3, 3]	[3,4,2,1,5]
// 4	[4,4,4,4,4]	[4,1,2,3]
function solution(N, stages) {
  // 해당 stage에 있는 플레이어 수 배열
  // 해당 stage 보다 높은 스테이지까지 간 플레이어 수 배열
  // 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열
  let reach = [];
  let notclear = [];
  let fail = [];
  // let result = {'stage': 0, 'reach': 0, 'notclear': 0, }
  for (let i = 1; i <= N; i++) {
    reach.push(stages.filter((el) => el >= i).length);
    notclear.push(stages.filter((el) => el === i).length);
    fail.push(notclear[i - 1] / reach[i - 1]);
  }

  console.log(notclear, reach, fail);
}
1; ////////////////////////////////////////////////////
function solution(N, stages) {
  stages.sort((a, b) => a - b);

  const clearArr = [];
  for (let i = 1; i <= N; i++) {
    clearArr.push({
      stage: i, // 현재 스테이지의 번호
      clear: 0, // 클리어 하지 못한 유저의 수
      fail: 0, // 총 실패율을 저장
    });
  }

  let users = stages.length;
  for (let i = 0; i < stages.length; i++) {
    if (clearArr[stages[i] - 1]) {
      clearArr[stages[i] - 1].clear += 1;

      // 현재 스테이지와 다음 스테이지의 번호가 동일하지 않을 때
      if (stages[i] !== stages[i + 1]) {
        const fail = clearArr[stages[i] - 1].clear / users;
        users = users - clearArr[stages[i] - 1].clear;

        clearArr[stages[i] - 1].fail = fail;
      }
    }
  }

  const answer = clearArr
    .sort((a, b) => {
      return b.fail - a.fail;
    })
    .map((el) => el.stage);

  return answer;
}
2; ////////////////////////////////////////////////////
function solution(N, stages) {
  stages.sort((a, b) => a - b);

  const clearArr = new Array(N).fill(1).map((el, i) => {
    const stage = el + i; // 현재의 스테이지 값 저장
    const result = { i: stage, clear: 0, fail: 0 };

    for (let l = 0; l < stages.length; l++) {
      if (stages[l] === stage) {
        result.clear += 1;

        if (stages[l + 1] !== stage) {
          result.fail = result.clear / stages.length;
          stages.splice(0, result.clear);
          break;
        }
      }
    }
    return result;
  });

  const answer = clearArr
    .sort((a, b) => {
      return b.fail - a.fail;
    })
    .map((el) => el.stage);
  return answer;

  //     console.log(clearArr)
}
