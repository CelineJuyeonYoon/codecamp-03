function solution(arr)
{
    var answer = [];
    for(let i=0; i<arr.length; i++){
        if(answer[answer.length-1]!==arr[i]){
            answer.push(arr[i])
        }
    }
    return answer;
}

console.log(solution([1,1,3,3,0,1,1]))

// https://www.notion.so/Open-Code-a9c38f6ee7f2406c82d97c78e15382a5