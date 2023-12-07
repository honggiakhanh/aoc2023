let input = `Time:        58     99     64     69
Distance:   478   2232   1019   1071`.split("\n");

input = input.map((r) => {
    return r.replaceAll(' ', '')
})

console.log(input);

let time = input[0].match(/\d+/g).map((n) => Number(n));
let distance = input[1].match(/\d+/g).map((n) => Number(n));

let winCount = [];

time.map((t, j) => {
  let winRecord = 0;
  for (i = 0; i <= t; i++) {
    if (i * (t - i) > distance[j]) {
      winRecord++;
    }
  }
  winCount.push(winRecord);
});

console.log(winCount.reduce((a, b) => a * b, 1));
