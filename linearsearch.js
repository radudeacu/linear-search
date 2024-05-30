
function linearSearch(arr, target) {
    const n = arr.length;
  
    for (let i = 0; i < n; i++) {
      if (arr[i] === target) {
        return true;
      }
    }
  
    return false;
  }
  
  const myArray = [1, 2, 3, 4, 5];
  const myTarget = 3;
  
  const result = linearSearch(myArray, myTarget);
  console.log(result);
  