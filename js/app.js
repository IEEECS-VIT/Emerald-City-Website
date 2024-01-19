
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

// Get the sidebar element
var sidebar = document.querySelector('.sidebar');

// Get all the navigation links inside the sidebar
var navLinks = document.querySelectorAll('.sidebar a');

// Add a click event listener to each navigation link
navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    // Close the sidebar by removing the 'open' class
    sidebar.classList.remove('open');
  });
});

// Add an event listener to the toggle button to open/close the sidebar
document.getElementById('toggle2').addEventListener('click', function() {
  sidebar.classList.toggle('open');
});
