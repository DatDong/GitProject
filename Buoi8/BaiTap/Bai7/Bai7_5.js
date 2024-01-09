const a = [1, "asd", 2, 3, "sas", 4, 5, 6];
const b = [1, "asd", 2, 3, "sas", 4, 5, 6];

let isEquale = true;
for (let i = 0; i < a.length; i++) {
  if (a[i] !== b[i]) {
    console.log("2 mang nay khac nhau");
    isEquale = false;
    break;
  }
}

if (isEquale) {
  console.log("2 mang nay giong nhau");s
} else {
  console.log("2 mang nay khac nhau");
}