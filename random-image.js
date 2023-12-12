// Images to choose from for hero image, with corresponding captions
var images = ['img/ferryland-lighthouse.jpg', 'img/whale.jpg', 'img/la-manche-village-path-cropped.jpg', 'img/tinkers-point-path.jpg'];
var texts = [
	'Photo by Stephen Barnes', 
	'Photo by Kurt Sullivan', 
	'Photo by <a href="https://www.instagram.com/p/CyBGaSjOUai/">@kyliem_w</a>', 
	'Photo by <a href="https://newfoundsander.wordpress.com/more-ect/">newfoundsander</a>'
];

// Get a random number based on array length, rounded to the lowest integer
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function displayRandomImageAndText() {
    // Get a random index to use for selecting an image and text
	var randomIndex = getRandomIndex(images);

    // Get the elements by their IDs
    var htmlImage = document.getElementById("randomImage");
    var paragraphText = document.getElementById("displayText");

    // Set the source of the image
    htmlImage.src = images[randomIndex];

    // Set the text corresponding to the selected image
    paragraphText.innerHTML = texts[randomIndex];
}

// Call the function to display a random image and text
displayRandomImageAndText();