function fewestCoins(coins, amount) {
  const sortedCoins = coins.sort((a, b) => b - a);
  let count = 0;
  let remainingAmount = amount;
  let i = 0;

  while (remainingAmount > 0 && i < sortedCoins.length) {
    if (sortedCoins[i] <= remainingAmount) {
      count += Math.floor(remainingAmount / sortedCoins[i]);
      remainingAmount %= sortedCoins[i];
    }
    i++;
  }

  if (remainingAmount === 0) {
    return count;
  } else {
    return -1;
  }
}

const coins = [1, 2, 5];
const amount = 11;
const result = fewestCoins(coins, amount);
console.log(result); // Output: 3
