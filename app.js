const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.links');
const navlinks = document.querySelectorAll('.links li');

hamburger.addEventListener('click', () => {
        links.classList.toggle("links");
        
    })

