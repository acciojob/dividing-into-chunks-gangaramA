const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  let result = [];
  let current_subarray = [];
  let current_sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (current_sum + arr[i] <= n) {
      current_subarray.push(arr[i]);
      current_sum += arr[i];
    } else {
      result.push(current_subarray);
      current_subarray = [arr[i]];
      current_sum = arr[i];
    }
  }

  if (current_subarray.length > 0) {
    result.push(current_subarray);
  }

  return result;
};

const n = (prompt("Enter n: "));
alert(JSON.stringify(divide(arr, n)));
