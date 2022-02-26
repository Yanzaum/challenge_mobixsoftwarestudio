let n = 20;
let count = 0;
let count2 = 0;
let down = n / 2 - 3;
let symbol = '#';
let space = ' ';

for (let i = 0; i < n; i++) {
  if (i === 0 || i === 1) {
    console.log(symbol.repeat(n));
  } else if (i < Math.floor(n / 2)) {
    count = (n - 2) - (i * 2);
    if (count > -2)
        console.log(symbol + space.repeat(i - 1) + symbol + symbol.repeat(count) + symbol + space.repeat(i - 1) + symbol);

    if (i + 1 === Math.floor(n / 2)) {
        console.log(symbol + space.repeat(i - 1) + symbol + symbol.repeat(count) + symbol + space.repeat(i - 1) + symbol);
        i++;
    }
  } else {
    continue;
  }
}

for (let j = 1; j < Math.floor(n/2); j++) {
    count2 = down - j + 1;
    if (count2 >= 0)
        console.log(symbol + space.repeat(down - j + 1) + symbol + space.repeat(j * 2) + symbol + space.repeat(down - j + 1) + symbol);
}

console.log(symbol.repeat(n));
