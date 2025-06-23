const hamburger = document.querySelector(".hamburger");
document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('active');
    hamburger.classList.toggle("active");
});

