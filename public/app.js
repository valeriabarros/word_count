var app = (function () {

  function init() {
    document.getElementById('word-count-form').addEventListener('submit', countWords);
  }

  function countWords(event) {
    event.preventDefault();
    Countable.count(document.getElementById('word-count-text'), counter => {
      document.getElementById('counter').innerText = "Your text has " + counter.words + " words!";
    });
  }
  return { init };
})();
app.init();