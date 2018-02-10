let sum = 0;
process.argv.forEach((val, index) => {
  index > 1 &&
  setTimeout(() => {
      console.log(val);
  },val * 1000);
});
