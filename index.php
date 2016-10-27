<?php <!DOCTYPE html>
<html>

<head>
    <title>
        Giphy API Search
    </title>
    <link rel="stylesheet" href="assets/css/reset.css">
    <link rel="stylesheet" href="assets/css/bootstrap.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-4 col-xs-4">
                <strong><h1>GIF Search</h1></strong>
                <h4>Powered by giphy.com</h4>
                <h4>Click each GIF to start or stop the animation</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div id="animalButtons">
                    <!--Buttons will be dumped here-->
                </div>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <form id="gif-form">
                    <button id="addButton" type="submit" class="btn btn-primary">Submit Your Animal Button</button>
                    <input type="text" id="gif-input">
                    </form>
                    <br><br>
            </div>
        </div>

        <!-- GIFs will get dumped here -->
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-4 col-xs-4">
                <div id="gifView">
                    <h4>Click an animal button above to search</h4>
                </div>
            </div>
        </div>

        <script src="https://code.jquery.com/jquery-2.2.3.min.js" integrity="sha256-a23g1Nt4dtEYOj7bR+vTu7+T8VP13humZFBJNIYoEJo=" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
        <script src="assets/js/app.js"></script>
</body>

</html>

?>
