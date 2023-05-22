function changeBackground(className) {
    document.body.classList.remove('red', 'white');
    if (className !== '') {
      document.body.classList.add(className);
    }
  }
  