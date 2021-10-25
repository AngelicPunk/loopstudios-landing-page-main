const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.links');
const navlinks = document.querySelectorAll('.links li');
const animate = document.querySelector(".bar")
const bar1 = document.querySelector('.bar1')
const bar2 = document.querySelector('.bar2')
const bar3 = document.querySelector('.bar3')

hamburger.addEventListener('click', () => {
        links.classList.toggle("links");
    })
 
