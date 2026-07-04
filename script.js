function showWelcome() {
    alert(
        "Welcome to Khushbu! Discover Niche perfumes for every mood and occasion."
    );
}
function showDiscount() {
    alert(
        "Special Offer: Get 15% discount on selected Khushbu perfumes this week!"
    );
}
function submitMessage() {

    var name = document.getElementById("name").value;

    var email = document.getElementById("email").value;

    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {

        alert("Please fill in all fields before submitting.");
    }
    else {
        alert(
            "Thank you, " +
            name +
            "! Your message has been submitted successfully."
        );
    }
}
function changeSlide(button, direction) {

    var slideshow = button.parentElement;
    var slides =
        slideshow.getElementsByClassName("product-slide");
    var currentIndex = 0;
    for (var i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("active")) {
            currentIndex = i;
            slides[i].classList.remove("active");
            break;
        }
    }
    currentIndex = currentIndex + direction;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    slides[currentIndex].classList.add("active");
}