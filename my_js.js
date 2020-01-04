
//This is how the countdown timer was done//

		// Set the date we're counting down to
		var countDownDate = new Date("Aug 17, 2018 09:00:00").getTime();
		// Update the count down every 1 second
		var x = setInterval(function() {
		// Get todays date and time
		var now = new Date().getTime();
		// Find the distance between now and the count down date
		var distance = countDownDate - now;
		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		// Display the result in the element with id="demo"
		document.getElementById("demo").innerHTML = days + "d " + hours + "h "
		+ minutes + "m " + seconds + "s ";
		// If the count down is finished, write some text
		if (distance < 0) {
		clearInterval(x);
		document.getElementById("demo").innerHTML = "LAUNCHED";
		}
		}, 1000);

		//the changing of the text once the mouse hovers over the title of the feature
//Upload design 
		var Uploadimage = document.querySelector("#Upload");
		Uploadimage.addEventListener('mouseover',function(){
	  	Uploadimage.textContent = "You can now choose from an exsiting design or upload your own a legible design with a description";
	  	Uploadimage.style.fontSize="medium";
	  	})
		Uploadimage.addEventListener('mouseout', function(){
	  	Uploadimage.textContent = "Choose an Existing design/Upload a design ";
	  	Uploadimage.style.fontSize="XX-large";
	  	})
//Request a design 
		var Requestimage = document.querySelector("#Request");
		Requestimage.addEventListener('mouseover',function(){
	  	Requestimage.textContent = "You can now request a design with a description so that our fashion designers can attempt to make your dream come true";
	  	Requestimage.style.fontSize="medium";
	  	})
		Requestimage.addEventListener('mouseout', function(){
	  	Requestimage.textContent = "Request a design ";
	  	Requestimage.style.fontSize="XX-large";
	  	})

//Textiles image
		var Textilesimage = document.querySelector("#Textiles");
		Textilesimage.addEventListener('mouseover',function(){
	  	Textilesimage.textContent = "You can now choose from a range of over 100 textiles that we have available in stock";
	  	Textilesimage.style.fontSize="medium";
	  	})
		Textilesimage.addEventListener('mouseout', function(){
	  	Textilesimage.textContent = "Choose your patterns";
	  	Textilesimage.style.fontSize="XX-large";
	  	})
	
//Measurements
		var Measurementsimage = document.querySelector("#Measurements");
		Measurementsimage.addEventListener('mouseover',function(){
	  	Measurementsimage.textContent = "You can now fill-in a form that specifies your measurements";
	  	Measurementsimage.style.fontSize="medium";
	  	})
		Measurementsimage.addEventListener('mouseout', function(){
	  	Measurementsimage.textContent = "Specify your measurements";
	  	Measurementsimage.style.fontSize="XX-large";
	  	})
//Book a fitting
		var Fittingimage = document.querySelector("#Fitting");
		Fittingimage.addEventListener('mouseover',function(){
	  	Fittingimage.textContent = "You can now book your first fitting to check if any adjustments need to be made to the garment";
	  	Fittingimage.style.fontSize="medium";
	  	})
		Fittingimage.addEventListener('mouseout', function(){
	  	Fittingimage.textContent = "Book your fitting";
	  	Fittingimage.style.fontSize="XX-large";
	  	})
//Tracking progress of garment
		var TrackProgressimage = document.querySelector("#TrackProgress");
		TrackProgressimage.addEventListener('mouseover',function(){
	  	TrackProgressimage.textContent = "You can now check how far your garment is to completion";
	  	TrackProgressimage.style.fontSize="medium";
	  	})

		TrackProgressimage.addEventListener('mouseout', function(){
	  	TrackProgress.textContent = "Track progress of garment";
	  	TrackProgress.style.fontSize="XX-large";
	  	})		


function changeColor(){
	  	var x = document.getElementsByTagName("UL"); //remember that this gives a list of items
		var i;
	
		var colors = ["Red", "Green", "Yellow", "Black", "Grey", "Blue"]
	// we use the random method from the Math class to generate random numbers
	// We then bound these numbers at 6 and round them down
	// This gives us numbers between 0 and 5
		var color = colors[Math.floor(Math.random()*6)]
	//Done for each iteration of the 
			for (i = 0; i < x.length; i++) {
		    x[i].style.color = color;
		}

}
	
	

	
	


// Now let's tell JS to change the color every second

setInterval("changeColor()",1000);
