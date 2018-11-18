module.exports = (function () {
  let counter = 0;

  function generator() {
    counter++;
    return counter.toString(36);
  }

  return generator;
})();