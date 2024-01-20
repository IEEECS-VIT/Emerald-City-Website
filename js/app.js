
function toggleAnswer(element) {
    var answer = element.nextElementSibling;
    var arrowIcon = element.querySelector('.arrow-icon');

    if (answer.style.display === 'block') {
        answer.style.animation = 'fadeOutUp 0.5s ease-out';
        arrowIcon.style.transform = 'rotate(0deg)';
        setTimeout(function () {
            answer.style.display = 'none';
            answer.style.animation = '';
        }, 500);
    } else {
        answer.style.display = 'block';
        answer.style.animation = 'fadeInDown 0.5s ease-out';
        arrowIcon.style.transform = 'rotate(180deg)';
    }
  }

  var questionElements = document.querySelectorAll('.question');
  questionElements.forEach(function(element) {
      element.addEventListener('click', function() {
          toggleAnswer(this);
      });
  });


document.getElementById('toggleLink').addEventListener('click', function() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
  });

  document.getElementById('toggle2').addEventListener('click', function() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
  });


var sidebar = document.querySelector('.sidebar');
var navLinks = document.querySelectorAll('.sidebar a');
navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    sidebar.classList.remove('open');
  });
});

document.getElementById('toggle2').addEventListener('click', function() {
  sidebar.classList.toggle('open');
});
