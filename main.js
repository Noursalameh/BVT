document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



/*let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

document.querySelector('.carousel').addEventListener('click', nextImage);
showImage(currentIndex);

*/
const sections = document.querySelectorAll('section');

function revealSection() {
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', revealSection);
revealSection();

// Function to animate elements when they come into view
function animateOnScroll() {
    const elements = document.querySelectorAll('.event-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    elements.forEach((element) => {
        observer.observe(element);
    });
}

// Add animation class to CSS
// .animate {
//     animation: fadeIn 1s ease;
// }

// @keyframes fadeIn {
//     from {
//         opacity: 0;
//     }
//     to {
//         opacity: 1;
//     }
// }

animateOnScroll();
document.getElementById("language-selector").addEventListener("change", function() {
    var lang = this.value; // تحديد اللغة المختارة
    var elements = document.querySelectorAll("[data-en], [data-ar]"); // تحديد جميع العناصر التي تحتوي على نصوص

    elements.forEach(function(element) {
        // تغيير النص بناءً على اللغة المختارة
        if (lang === "ar") {
            element.innerText = element.getAttribute("data-ar");
        } else {
            element.innerText = element.getAttribute("data-en");
        }
    });
});

  document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector("nav ul").classList.toggle("active");
});
