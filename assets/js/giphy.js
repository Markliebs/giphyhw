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
			a.attr('src', $(this).data('animate'));
			a.attr('data-state'), $(this).attr('data-state', 'animate');
			a.text(animals[i]); // Provided the initial button text
			$('#animalButtons').append(a); // Added the button to the HTML

		}
	}

	// ========================================================

	// This function handles events where one button is clicked
	$('#addButton').on('click', function () {

		// This line of code will grab the input from the textbox
		var animal = $('#gif-input').val().trim();


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

// The next section should allow for pausing and unpausing of the GIFs


	$(document).on('click', '.animal', function () {

		var state = $(this).attr('data-state');

		if (state == 'animate') {
			$(this).attr('src', $(this).data('still'));
			$(this).attr('data-state', 'still');
		} else {
			$(this).attr('src', $(this).data('animate'));
			$(this).attr('data-state', 'animate');
		}



	});


			});
	});
	
	});