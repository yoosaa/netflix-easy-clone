export const isTrutyObject = obj => {
  if (!obj || Object.keys(obj).length === 0) return false
  else return true
}

export const truncateString = (str, num) => {
  if(str.length > num){
    return str.slice(0, num) + '...'
  }else{
    return str
  }
}
