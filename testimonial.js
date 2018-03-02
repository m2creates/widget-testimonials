var slideIndex = 0;
showLis(slideIndex);

function plusLis(n) {
    showLis(slideIndex += n);
}

function showLis(n) {
    var i;
    var x = document.getElementsByClassName("testimonial");
    if (n > x.length) {slideIndex = 0}
    if (n < 0) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-0].style.display = "flex";
}
