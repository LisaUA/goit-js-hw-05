function isEnoughCapacity(products, containerSize) {
let sumProducts = 0;
const values = Object.values(products);
for (let value of values) {
  sumProducts += value
}
if (sumProducts <= containerSize) {
  return Boolean(true);
} else {
  return Boolean(false);
}
}