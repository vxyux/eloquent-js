let returningCents = 500;
const possibleCoins = [5, 10, 20, 50, 100, 200];

for (var i = 0; returningCents > 0 && i < possibleCoins.length; i++) {
  let res = {};

  const value = possibleCoins[i];

  if (value <= returningCents) {
    res[value] = Math.floor(returningCents / value);
    returningCents -= value * res[value];
  }


}