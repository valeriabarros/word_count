var app = (function () {

  function init() {
    document.getElementById('wordCount').addEventListener('submit', countWords);
  }

  function countWords(event) {
    event.preventDefault();
    Countable.count(document.getElementById('words'), counter =>  {
      document.getElementById('numberWords').innerText = "Your text has " + counter.words + " words!";
    });
  }

  return {
    init: init
  };
})();
app.init();