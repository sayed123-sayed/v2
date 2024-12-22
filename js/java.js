let pr = document.querySelector('.products');

function right(){
    pr.scrollBy({
        left: 300,
        behavior:"smooth",
    })
}
function left() {
    pr.scrollBy({
        left: -300,
        behavior: "smooth",
    })
}

