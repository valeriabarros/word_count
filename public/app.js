var app = (function () {

  function init() {
    document.getElementById('wordCount').addEventListener('submit', countWords);
  }

  function countWords(event) {
    event.preventDefault();
    Countable.count(document.getElementById('words'), counter =>  {
      Array.from(document.getElementsByClassName('number-of-words'))
        .forEach(function (element) {
          element.innerText = counter.words;
        });
    });
  }

  return {
    init: init
  };
})();
app.init();