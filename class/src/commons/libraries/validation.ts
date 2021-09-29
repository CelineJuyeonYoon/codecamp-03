export function fileValidation(file){
  if(!file){
    alert("파일이 없습니다!")
    return false
  }
  // 이미지 용량 제한(< 5MB)
  if(file.size > 5 * 1024 * 1024){
    alert("파일 용량이 너무 큽니다.(제한: 5MB)")
    return false
  }
  // 이미지 확장자 제한(jpeg/png)
  if(!(file.type.includes("jpeg") || file.type.includes("png"))){
    alert("jpeg 또는 png만 업로드 가능합니다!")
    return false
  }
  return true
}
// 문제가 있으면 false, 없으면 true 리턴