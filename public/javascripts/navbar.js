$( window ).on('resize', function() {
    var navbar = document.getElementById('navbar');
    var containerWrapper = document.getElementById('wrapper');
    var containerHeight = window.getComputedStyle(containerWrapper, null).getPropertyValue("height");
    console.log("Before: "+containerHeight);
    
    var windowHeight = window.innerHeight;
    var navbarHeight = window.getComputedStyle(navbar, null).getPropertyValue("height");
    if (window.innerWidth <= 1024) {
        containerWrapper.style.top = navbarHeight;
        containerWrapper.style.position = "absolute";
        containerHeight = window.getComputedStyle(containerWrapper, null).getPropertyValue("height");
        console.log("Top: "+containerWrapper.style.top);
    }
    else {
        containerWrapper.style.top = 0;
    }
});

$( window ).on('load', function() {
    var navbar = document.getElementById('navbar');
    var containerWrapper = document.getElementById('wrapper');
    var containerHeight = window.getComputedStyle(containerWrapper, null).getPropertyValue("height");
    console.log("Before: "+containerHeight);
    
    var windowHeight = window.innerHeight;
    var navbarHeight = window.getComputedStyle(navbar, null).getPropertyValue("height");
    if (window.innerWidth <= 1024) {
        containerWrapper.style.top = navbarHeight;
        containerWrapper.style.position = "absolute";
        containerHeight = window.getComputedStyle(containerWrapper, null).getPropertyValue("height");
        console.log("Top: "+containerWrapper.style.top);
    }
    else {
        containerWrapper.style.top = 0;
    }
});

