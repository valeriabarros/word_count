var app = (function () {
  function init() {
    document.getElementById('wordCount').addEventListener('submit', countWords);
  }

  function countWords() {
    console.log('hi');
    Countable.count(document.getElementById('words'), counter => console.log(this, counter));
  }

  return {
    init: init
  };
})();
app.init();