module.exports = (function () {
  let counter = 0;
  function generator() {
    counter++;
    return counter;
  }

  return generator;
})();