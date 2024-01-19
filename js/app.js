function toggleAnswer(element) {
  var answer = element.nextElementSibling;
  var arrowIcon = element.querySelector('.arrow-icon');

  if (answer.style.display === 'block') {
      answer.style.animation = 'fadeOutUp 0.5s ease-out';
      arrowIcon.style.transform = 'rotate(0deg)';
      element.classList.remove('open');
      setTimeout(function () {
          answer.style.display = 'none';
          answer.style.animation = '';
      }, 500);
  } else {
      answer.style.display = 'block';
      answer.style.animation = 'fadeInDown 0.5s ease-out';
      arrowIcon.style.transform = 'rotate(180deg)';
      element.classList.add('open');
  }
}

var questionElements = document.querySelectorAll('.question');
questionElements.forEach(function (element) {
  element.addEventListener('click', function () {
      toggleAnswer(this);
  });
});


  document.getElementById('toggleLink').addEventListener('click', function() {
    var sidebar = document.querySelector('.sidebar');

    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
        sidebar.style.display = 'flex';
    } else {
        sidebar.style.display = 'none';
    }
});

document.getElementById('toggle2').addEventListener('click', function() {
    var sidebar = document.querySelector('.sidebar'); // Assuming your sidebar has the class 'sidebar'

    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
        sidebar.style.display = 'flex';
    } else {
        sidebar.style.display = 'none';
    }
});
