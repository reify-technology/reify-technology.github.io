
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    var homeSection = document.getElementById("slides").clientHeight;

    if (document.body.scrollTop > homeSection || document.documentElement.scrollTop > homeSection) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}