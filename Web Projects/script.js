$(document).ready(() => {
    $("header .ham .burger").click(function () { 
        $(this).toggleClass("active");
        $(".hero header .ham .burger nav").toggleClass("active");
    });

    $(".burger nav ul li a").click(function(event) {
        event.preventDefault(); // Prevents the default behavior of the link click
    
        $(".burger nav ul li a").removeClass("active"); // Remove 'active' class from all links
        $(this).toggleClass("active"); // Toggle 'active' class for the clicked link
    });
});
