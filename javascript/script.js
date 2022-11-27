(function () {
  var squareFotball = document.querySelector('.square.football');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-football');
      }
    });
  });

  observer.observe(squareFotball);

})();

(function () {
  var squareBooks = document.querySelector('.square.books');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-books');
      }
    });
  });

  observer.observe(squareBooks);
})();

(function () {
  var squareWalks = document.querySelector('.square.walks');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-walks');
      }
    });
  });

  observer.observe(squareWalks);
})();