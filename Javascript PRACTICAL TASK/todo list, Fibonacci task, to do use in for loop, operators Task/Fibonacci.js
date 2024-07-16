
function fibonacciRecursive(n) {
  if (n <= 0) return [];
  if (n <= 1) return [1];
  if (n === 2) return [0, 1];
  let series = fibonacciRecursive(n - 1);
  let next = series[series.length - 1] + series[series.length - 2];
  series.push(next);
  return series;
}
console.log("32 :", fibonacciRecursive(6));







