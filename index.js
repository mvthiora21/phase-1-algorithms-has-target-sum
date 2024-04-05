
function hasTargetSum(array, target) {
  // Pseudocode:
  // 1. Create an empty set to store the seen numbers.
  // 2. Iterate through the array.
  // 3. For each number in the array, calculate the difference between the target and the current number.
  // 4. Check if the difference exists in the set. If it does, return true as we found a pair.
  // 5. If the difference doesn't exist in the set, add the current number to the set.
  // 6. If no pair is found after iterating through the entire array, return false.

  let seenNumbers = new Set();

  for (let num of array) {
    let difference = target - num;
    if (seenNumbers.has(difference)) {
      return true;
    } else {
      seenNumbers.add(num);
    }
  }

  return false;
}

/* 
  Big O time complexity: O(n), where n is the number of elements in the array. 
  The function iterates through the array once, and each operation inside the loop (set lookup and insertion) has constant time complexity.

  The space complexity is also O(n) due to the set used to store seen numbers, where n is the number of elements in the array.
*/

/* 
  Explanation of solution:
  The function uses a set to keep track of numbers that have been seen while iterating through the array. For each number in the array, it calculates the difference between the target and the current number. If this difference exists in the set, it means there exists a pair of numbers in the array that adds up to the target, so the function returns true. If the difference doesn't exist in the set, it means we haven't found a pair yet, so the current number is added to the set. If no pair is found after iterating through the entire array, the function returns false.
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
