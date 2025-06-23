

const nextSlideBtn = document.querySelector("#right-arrow");
const prevSlideBtn = document.getElementById("left-arrow");

const slides = document.querySelectorAll(".slide");
const indicators = document.getElementsByClassName("nav-item");

let sliderIndex = 0;

function updateSlider(){

    // updateSlider();
    // updateBackground();
    // updateIndicator();

    const activeSlide = document.querySelector(".slide.active");
    if(activeSlide){
        activeSlide.classList.remove("active");
    }
    const currentSlide = slides[sliderIndex];
    currentSlide.classList.add("active");

    const currentImage = currentSlide.style.backgroundImage;
    document.body.style.backgroundImage = currentImage;

    // console.log("1)", indicators);
    // console.log("2)", [...indicators]);
    // console.log("3)", Array.from(indicators));

    const activeIndicator = [...indicators].
        filter(indicator => indicator.classList.contains("active"))[0];
    if(activeIndicator){
        activeIndicator.classList.remove("active");
    }
    const currentIndicator = indicators[sliderIndex];
    currentIndicator.classList.add("active");
}

updateSlider();

nextSlideBtn.addEventListener("click", function(){
    
    // sliderIndex = sliderIndex + 1;
    // sliderIndex += 1;
    sliderIndex++;
    sliderIndex %= slides.length;
    updateSlider();
});

prevSlideBtn.onclick = () => {
    sliderIndex--;
    sliderIndex = sliderIndex < 0 ? slides.length - 1 : sliderIndex;
    updateSlider();
}




