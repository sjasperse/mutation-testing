function toStringAsync(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value.toString());
    }, 100);
  });
 }

 module.exports = toStringAsync;