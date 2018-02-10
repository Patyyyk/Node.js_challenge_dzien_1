let sum = 0;
process.argv.forEach((val, index) => {
  index > 1 && (sum+= parseInt(val));
});
console.log(sum);
