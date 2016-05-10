$(document).ready(function () {

	var animals = ['Giraffe', 'Elephant', 'Dog', 'Cat'];

	function renderButtons() {

		$('#animalButtons').empty();

		for (var i = 0; i < animals.length; i++) {

			var a = $('<button>');
			a.addClass('animal');
			a.addClass('btn btn-primary btn-xs');
			a.attr('data-name', animals[i]);
			a.attr('src', $(this).data('animate'));
			a.attr('data-state'), $(this).attr('data-state', 'animate');
			a.text(animals[i]);
			$('#animalButtons').append(a);

		}
	}

	$('#addButton').on('click', function () {


		var animal = $('#gif-input').val().trim();

		animals.push(animal);

		renderButtons();

		return false;
	});

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

					var animalDiv = $('<div class="gifDisplay">');

					var p = $('<p>').text("Rating: " + results[i].rating);

					var animalImage = $('<img>');

					animalImage.attr('src', results[i].images.fixed_height_still.url);
					animalImage.attr('data-still', results[i].images.fixed_height_still.url);
                    animalImage.attr('data-animate', results[i].images.fixed_height.url);
                    animalImage.attr('data-state', 'still');
					animalImage.addClass('animalGif');
					animalDiv.append(p);
					animalDiv.append(animalImage);
					animalDiv.prepend(p);
					animalDiv.prepend(animalImage);

					$('#gifView').prepend(animalDiv);

				}

				// The next section should allow for pausing and unpausing of the GIFs

				$('#gifView').on('click', '.animalGif', function () {

					var state = $(this).attr('data-state');
					var animate = $(this).attr('data-animate');
					var still = $(this).attr('data-still');

					if (state == 'still') {
						$(this).attr('src', animate);
						$(this).attr('data-state', 'animate');
					} else {
						$(this).attr('src', still);
						$(this).attr('data-state', 'still');
					}
				});
			});
	});
});