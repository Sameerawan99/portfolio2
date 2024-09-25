if (typeof Typed !== 'undefined') {
    var typed = new Typed(".auto-type", {
        strings: ["Front-End Web Developer", "Engineer","Student"],
        typeSpeed: 90,
        backSpeed: 80,
        loop: true
    });
} else {
    console.error('Typed.js library failed to load');
}




function shownav(event) {
    event.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "flex";
}

function closenav(event) {
    event.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "none";
}








