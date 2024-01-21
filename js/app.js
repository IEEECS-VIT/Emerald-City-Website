//cursor
// document.addEventListener('mousemove', function (e) {
//   var cursor = document.querySelector('.cursor');
//   cursor.style.left = e.clientX + 'px';
//   cursor.style.top = e.clientY + 'px';
// });


// Animations
      const tl = gsap.timeline();

tl.from('.reg', {
  duration: 3,
  scale: 4,
  opacity: 0,
  ease: 'power2.out',
})
.to('.reg', {
  duration: 0,
  x: '0%',
  scale: 1,
  onComplete: () => {
    gsap.to('.mpg', {
      duration: 1,
      boxShadow: '0 0 20px rgba(0, 255, 0, 0.8)',
      repeat: -1,
      yoyo: true,
    });
    gsap.to('.nav-desk', {
      duration: 0.5,
      left: '0%',
      ease: 'power2.out',
    });
  },
});
const regBtnAreaAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".reg-btn-area",
    start: "top 100%", // Adjust the start position based on your design
    toggleActions: "play none none reverse",
  },
});

regBtnAreaAnimation.from(".reg-btn-area", {
  opacity: 0,
  y: 50,
  duration: 2,
  ease: "power2.out",
});
gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".faq-item").forEach((faqItem, index) => {
    gsap.from(faqItem, {
      opacity: 0,
      y: -20,
      duration: 1,
      scrollTrigger: {
        trigger: faqItem,
        start: "top 80%", // Adjust this value based on when you want the animation to start
        toggleActions: "play none none reverse",
      },
    });
  });
  gsap.from(".aboutsection-image1", {
    y: -100, // Start the animation from above the viewport
    opacity: 0, // Set initial opacity to 0
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".aboutsection",
      start: "top 70%", // Adjust this value based on when you want the animation to start
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".aboutsection-header", {
    x: "-100%", // Move from left (initial position)
    opacity: 0, // Set initial opacity to 0
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".aboutsection", // Adjust the trigger element accordingly
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });

  // Animation for conductedByLabel
gsap.from(".conductedByLabel", {
  opacity: 0, // Set initial opacity to 0
  y: 20, // Move up (initial position)
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".conductedByLabel", // Adjust the trigger element accordingly
    start: "top 70%", // Adjust the start position based on your design
    toggleActions: "play none none reverse",
  },
});

  // Animation for logos
gsap.from(".logos img:nth-child(1)", {
  x: "-100%", // Move from left (initial position)
  opacity: 0, // Set initial opacity to 0
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".logos", // Adjust the trigger element accordingly
    start: "top 70%", // Adjust the start position based on your design
    toggleActions: "play none none reverse",
  },
});

gsap.from(".logos img:nth-child(2)", {
  y: "100%", // Move from below (initial position)
  opacity: 0, // Set initial opacity to 0
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".logos", // Adjust the trigger element accordingly
    start: "top 70%", // Adjust the start position based on your design
    toggleActions: "play none none reverse",
  },
});

gsap.from(".logos img:nth-child(3)", {
  x: "100%", // Move from right (initial position)
  opacity: 0, // Set initial opacity to 0
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".logos", // Adjust the trigger element accordingly
    start: "top 70%", // Adjust the start position based on your design
    toggleActions: "play none none reverse",
  },
});

// Animation for faq section
gsap.from(".faq", {
  opacity: 0, // Set initial opacity to 0
  y: 20, // Move up (initial position)
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".faq", // Adjust the trigger element accordingly
    start: "top 70%", // Adjust the start position based on your design
    toggleActions: "play none none reverse",
  },
});



  // Scroll-triggered animation for .aboutsection-content p
  gsap.from(".aboutsection-content p", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".aboutsection",
      start: "top 60%",
      toggleActions: "play none none reverse",
    },
  });
// Functions

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
    document.body.style.overflow = 'hidden';

  });

  document.getElementById('toggle2').addEventListener('click', function() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');

    document.body.style.overflow = '';
  });


var sidebar = document.querySelector('.sidebar');
var navLinks = document.querySelectorAll('.sidebar a');
navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    sidebar.classList.remove('open');

    document.body.style.overflow = '';
  });
});

document.getElementById('toggle2').addEventListener('click', function() {
  sidebar.classList.toggle('open');
});
