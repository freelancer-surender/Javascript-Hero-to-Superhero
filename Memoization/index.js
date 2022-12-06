let cache = {};
function fibonacci(n) {
  let value = 0;
  if (n in cache) {
    value = cache[n];
  } else {
    if (n === 0 || n === 1) {
      value = n;
    } else {
      value = fibonacci(n - 1) + fibonacci(n - 2);
      cache[n] = value;
    }
  }  
  return value;
}
console.log(fibonacci(450));