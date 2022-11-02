/* Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Note: the subarrays should be filled with 1s*/


function pyramid(n) {
  if (n == 0) {
    return []
  } else {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push([]);
      for (let j = 0; j < i + 1; j++) {
        arr[i].push(1);
      }
    }
  return arr
  }
}
console.log(pyramid(3));