var movies = ['The Matrix', 'The Notebook', 'Mr. Nobody', 'The Lion King'];

			// ========================================================

			// Generic function for capturing the movie name from the data-attribute
			function alertMovieName() {
				var movieName = $(this).data("name");

				alert(movieName);

				// YOUR CODE GOES HERE!!!

			}

			// ========================================================

			// Generic function for displaying movie data 
			function renderButtons() {

				// Deletes the movies prior to adding new movies (this is necessary otherwise you will have repeat buttons)
				$('#moviesView').empty();

				// Loops through the array of movies
				for (var i = 0; i < movies.length; i++) {

					// Then dynamicaly generates buttons for each movie in the array

					// Note the jQUery syntax here... 
					var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
					a.addClass('movie'); // Added a class 
					a.attr('data-name', movies[i]); // Added a data-attribute
					a.text(movies[i]); // Provided the initial button text
					$('#moviesView').append(a); // Added the button to the HTML
				}
			}

			// ========================================================

			// This function handles events where one button is clicked
			$('#addMovie').on('click', function () {

				// This line of code will grab the input from the textbox
				var movie = $('#movie-input').val().trim();

				// The movie from the textbox is then added to our array
				movies.push(movie);

				// Our array then runs which handles the processing of our movie array
				renderButtons();

				// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
				return false;
			})

			// ========================================================

			// Generic function for displaying the movieInfo

			// BAD CODE = won't work for new buttons (can't capture elements generated dynamically) 
			// $('.movie').on('click', alertMovieName); 

			// GOOD CODE = will work for both the original buttons and all of the new buttons
			$(document).on('click', '.movie', alertMovieName);



			// ========================================================

			// This calls the renderButtons() function
			renderButtons();