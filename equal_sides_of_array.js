function findEvenIndex(arr)
{
  if(arr.length === 1){return 0}
  let maxIndex;
  for(let i = 1; i < arr.length; i++){
    let leftSum = arr.slice(0, i).reduce((a, b) => a + b, 0)
    for(let j = arr.length + 1; j >= 0; j--){
      let rightSum = arr.slice(j, arr.length +1).reduce((a, b) => a + b, 0)
      // console.log(`${i}:${leftSum}, ${j}:${rightSum}`)
      if(leftSum === rightSum && Math.abs(j-i) === 1){
        maxIndex = Math.min(j, i);
      }
      
    }
  }
  console.log(maxIndex)
  return isNaN(maxIndex) ? -1 : maxIndex;
}

let arr = [];
// should equal 5
arr = [7334,-3783,-9223,-8117,2218,-7532,9259,-2597,-4431,247,9687,-4821,-427,-4062,9329,-3167,-20588]
// should equal 0
arr = [20,10,-80,10,10,15,35]
// should equal 3
arr = [1,2,3,4,3,2,1]
// should equal 6
arr = [10,-80,10,10,15,35,20]

console.log(
  findEvenIndex(arr)
)
