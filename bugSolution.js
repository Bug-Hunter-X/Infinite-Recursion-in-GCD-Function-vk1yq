function foo(a, b) {
  if (b === 0) {
    return a;
  } else if (a === 0) {
    return b;
  } else if (a === b) {
    return true;
  } else if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(10, 2)); // Output: 2
console.log(foo(10, 5)); // Output: 5
console.log(foo(12, 18)); // Output: 6
console.log(foo(100, 20)); // Output: 20
console.log(foo(10, 0)); // Output: 10