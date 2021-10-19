function topThreeWords(text) {
  const wordCountHash = {};
  let sortedArr = text.toLowerCase().replace(/[^0-9a-z '']/gi, '').split(' ').sort();
  let hashmap = sortedArr.reduce(
    (map, cur, ind)=> {
      if(cur === ''){ return map }
      !map[cur] ? map[cur] = 1 : map[cur]++
      return map;
    }, {}
  );
  console.log(hashmap);
  var sorted_keys = Object.keys(hashmap).sort(function(a,b) { return hashmap[b] - hashmap[a]; });
  console.log(sorted_keys);
  return sorted_keys.slice(0, 3);
  
//  let singleSortedArr = sortedArr.reduce(
//    (acc, cur, ind)=> {
//      console.log(`${cur} !== ${sortedArr[ind -1]}`)
//      if ((!sortedArr[ind -1] || cur !== sortedArr[ind -1]) && cur !== '') {
//        acc.push(cur)
//      }
//      return acc;
//    }, []
//  );
//  console.log(singleSortedArr);
//  return singleSortedArr.slice(0, 2);
}