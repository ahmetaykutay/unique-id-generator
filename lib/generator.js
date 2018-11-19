module.exports = (function () {
  var counter = 0;

  function generator() {
    counter++;
    return counter.toString(36);
  }

  return generator;
})();