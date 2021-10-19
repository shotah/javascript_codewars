var maxSequence = function(arr){
  if(!arr || arr.length === 0 ){ return 0 }
  let maxSubArrVal = 0;
  while(arr.length > 0) {
    for(let i = 0; i < arr.length; i++) {
      let currentSubVal = arr.slice(0, i + 1).reduce((a, b) => a + b, 0)
      if (currentSubVal > maxSubArrVal) { maxSubArrVal = currentSubVal };
    }
    arr.shift();
  }
  return maxSubArrVal;
}