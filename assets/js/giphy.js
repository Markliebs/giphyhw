$(document).ready(function () {

	// Initial array of animals
	var animals = ['Giraffe', 'Elephant', 'Dog', 'Cat'];

	// ========================================================

	// Generic function for displaying animal data 
	function renderButtons() {

		// Deletes the movies prior to adding new animals (this is necessary otherwise you will have repeat buttons)
		$('#animalButtons').empty();

		// Loops through the array of movies
		for (var i = 0; i < animals.length; i++) {

			// Then dynamicaly generates buttons for each animal in the array

			var a = $('<button>'); // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
			a.addClass('animal'); // Added a class 
			a.addClass('btn btn-primary btn-xs');
			a.attr('data-name', animals[i]); // Added a data-attribute
			a.text(animals[i]); // Provided the initial button text
			$('#animalButtons').append(a); // Added the button to the HTML

		}
	}

	// ========================================================

	// This function handles events where one button is clicked
	$('#addButton').on('click', function () {

		// This line of code will grab the input from the textbox
		var animal = $('#gif-input').val().trim();
		console.log("test");

		// The animal from the textbox is then added to our array
		animals.push(animal);

		// Our array then runs which handles the processing of our animal array
		renderButtons();

		// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
		return false;
	});

	// ========================================================

	// This calls the renderButtons() function
	renderButtons();

	// The next section performs the search and returns the GIFs
	$(document).on('click', '.animal', function () {
	// $('button').on('click', function () {
		var animal = $(this).data('name');
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

		$.ajax({
			url: queryURL,
			method: 'GET'
		})
			.done(function (response) {

				console.log(queryURL);

				console.log(response);

				var results = response.data;
				$('#gifView').empty();
				for (var i = 0; i < results.length; i++) {

					var animalDiv = $('<div>');

					var p = $('<p>').text("Rating: " + results[i].rating);

					var animalImage = $('<img>');
					animalImage.attr('src', results[i].images.fixed_height.url);

					animalDiv.prepend(p);
					animalDiv.prepend(animalImage);

					$('#gifView').prepend(animalDiv);
					//--------------------------------
				}

			});
	});
	// The next section should allow for pausing and unpausing of the GIFs
	
	
	// $('.animalImage').on('click', function(){
	//     	//STEP ONE: study the html above. Look at all the data attributes. Run the file in the browser. Look at the images. After you fill in steps 1 and 2 you'll be able to pause gifs from giphy.

	//     	//STEP TWO: make a variable named state and then reference the button's data-state into it. Do not use .data('state'). It won't work the way we expect.

	//     	//---------------FILL IN CODE HERE FOR STEP TWO----------------------------
	//         var state = $(this).attr('data-state'); 
	//         //----------------------------------------------------

    //     	/*STEP THREE: 
    //     		* if variable state is equal to 'still' then 
    //     			* update the src attribute of this image that you clicked on to what data-animate is equal to for this image
    //     			* and update the data-state attribute to 'animate'
    //     		* if state does not equal 'still' then 
    //     			* update the src attribute of this image that you clicked on to what data-still is equal to for this image
    //     			* and update the data-state attribute to 'still'
	// 		*/

    //     	//---------------FILL IN CODE HERE FOR STEP THREE----------------------------
    //         if ( state == 'still'){
    //             $(this).attr('src', $(this).data('animate'));
    //             $(this).attr('data-state', 'animate');
    //         }else{
    //             $(this).attr('src', $(this).data('still'));
    //             $(this).attr('data-state', 'still');
    //         }
    //         //----------------------------------------------------

    //         //STEP FOUR: open the file in the browser and click on the images. Then click again to pause.
	//     });
	
	
	
});