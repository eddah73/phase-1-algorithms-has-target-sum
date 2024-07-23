function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {//n
    for (let j = i + 1; j < array.length; j++) {//n
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}


/* 
  Write the Big O time complexity of your function here
  nested loop
  O(n**2)
*/

/* 
  Add your pseudocode here
  function hasTargetSum(arrayofinteger,target){
  iterate through integers of array adding number
  if(addedNum===target){
  return true
}
  else{
  return false
  }}
  
*/

/*
  Add written explanation of your solution here
  function hasTargetSum
  takes two argument(arrayof integers,target)
  add two pairs of integers in array and compare it with target
  if added pair  and target match return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
