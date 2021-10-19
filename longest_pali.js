longestPalindrome=function(rawString){
  if(rawString.length === 0){ return 0 }
  let arr = rawString.split('');
  let maxPali = 1;

  for(let i = 0; i < arr.length; i++) {
    for(let j = arr.length; j > i; j--) {
      let curArr = arr.slice(i, j);
      let revArr = [...curArr].reverse()
      if( curArr.join('') === revArr.join('') && curArr.length > maxPali) { 
        console.log(curArr);
        maxPali = curArr.length
        break
      };
    }
  }

  return maxPali;
}