const cursorDot=document.querySelector(".cursor-pointer");
const cursorOutline=document.querySelector(".custom-cursor");
const links=document.querySelectorAll("a");

window.addEventListener("mousemove", function(e) {
	
	const posX= e.clientX;
	const posY= e.clientY;

	cursorDot.style.left= posX+'px';
	cursorDot.style.top= posY+'px';
	
	cursorOutline.animate({
	left: posX+'px',
	top: posY+'px'
	},{duration: 500 , fill: "forwards"});

})

	links.forEach(link => {
		link.addEventListener('mouseenter', function(e) {
		cursorDot.classList.remove("unactive")
		cursorDot.classList.add("active")
		cursorOutline.classList.remove("unactive")
		cursorOutline.classList.add("active")
	  })

		link.addEventListener('mouseleave', function(e) {
		cursorDot.classList.remove("active")
		cursorDot.classList.add("unactive")	
		cursorOutline.classList.remove("active")
		cursorOutline.classList.add("unactive")	
	})
  })

        // Hide the cursor when it goes outside the window

		  // Show the cursor when it comes back inside the window
		  