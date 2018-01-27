
// Slide index global var
var slideIndex = 1;
var slides = document.getElementsByClassName( 'slide-item' );
var dots = document.getElementsByClassName( 'dot' );


//navigation
let Navs = document.querySelectorAll( '.nav' );
Navs.forEach(function(nav) {
    nav.addEventListener('click', function(e) {
        let result = e.target.classList.contains('nav-next');
        if(result) {
            plusSlide(1);
        }else {
            plusSlide(-1);
        }
    })
});

// Show slides index
let indexText = document.querySelectorAll('.slide-item');
for( i = 0; i < indexText.length; i++ ) {
    let div = document.createElement('div');
    div.className = "nav-text";
    let count = i + 1;
    div.innerHTML += count + "/" + slides.length;
    indexText[i].appendChild(div);
}


// Dots navigation
Array.from(dots).forEach(function(dot){
    dot.addEventListener('click', function(e) {
        slideIndex = parseInt(e.target.dataset.slide) + 1;
        showSlides(slideIndex);
    });
});

//Plus slide via navigation
function plusSlide(n) {
    let slide = slideIndex += n;
    showSlides(slide);
}


// Show slides
function showSlides(n) {
    let i;

    if(slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    if( slideIndex < 1 ) {
        slideIndex = slides.length;
    }

    let indexText = document.querySelectorAll('.slide-item');
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for( i = 0; i < dots.length; i++ ) {
        dots[i].dataset.slide = i;
        dots[i].className = dots[i].className.replace( ' active', '' );
    }



    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].classList.add('active');
}

showSlides(slideIndex);
