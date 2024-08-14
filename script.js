/*Responsive code for menu-bar*/
let menuBar=document.querySelector("#menu-bar")
let amenu=document.querySelector(".middel")

function showmenu(){
    menuBar.classList.toggle("fa-times")
    amenu.classList.toggle("active")
}

/*counter */
let count=0;

document.getElementById("decreaseBtn").onclick=function(){
    count -=1;
    document.getElementById("counterLabel").innerHTML = count;
}
document.getElementById("resetBtn").onclick=function(){
    count =0;
    document.getElementById("counterLabel").innerHTML = count;
}
document.getElementById("increaseBtn").onclick=function(){
    count +=1;
    document.getElementById("counterLabel").innerHTML = count;
}
/*color changes */
document.querySelectorAll(".colorButton").forEach(button => {
    button.addEventListener("click", function() {
        // Generate random RGBA values
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const a = (Math.random()).toFixed(2); // Alpha value between 0 and 1

        // Set the parent div's background color using the RGBA values
        const rgbaColor = `rgba(${r}, ${g}, ${b}, ${a})`;
        const parentDiv = this.parentElement;
        parentDiv.style.backgroundColor = rgbaColor;

        // Print the RGBA color values in the paragraph before the button
        parentDiv.querySelector(".colorRGBA").textContent = `Background Color: Rgba ${rgbaColor}`;
    });
});

/*Task 4 */
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const surpriseBtn = document.getElementById('surpriseBtn');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function showPrevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function showRandomSlide() {
    currentSlide = Math.floor(Math.random() * slides.length);
    showSlide(currentSlide);
}

nextBtn.addEventListener('click', showNextSlide);
prevBtn.addEventListener('click', showPrevSlide);
surpriseBtn.addEventListener('click', showRandomSlide);

// Initial display
showSlide(currentSlide);