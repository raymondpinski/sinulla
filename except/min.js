let start = 10;
let stop = 20;
let reverse = true;

if (reverse) {
  [start, stop] = [stop, start];
}

console.log(start); // Output: 20
console.log(stop); // Output: 10
