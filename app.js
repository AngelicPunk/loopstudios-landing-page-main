const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.links');
const animate = document.getElementById("animate");
const bar1 = document.getElementsByClassName('.bar1');
const bar2 = document.getElementsByClassName('.bar2');
const bar3 = document.getElementsByClassName('.bar3');
const bar = [bar1, bar2, bar3];

 
hamburger.addEventListener('click', () => {
       hamburger.classList.toggle("active");
       links.classList.toggle("links");
 });

 document.querySelectorAll(".links").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove(".active");
        links.classList.remove("active");
 }));
