function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0; // return 0 for an empty array to avoid division by zero
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  let average = sum / numbers.length;
  return average;
}

const numbers = [1, 2, 3, 4, 5];
let result = calculateAverage(numbers);
console.log(result); // Output: 3

