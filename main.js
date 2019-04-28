var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
	var imgSrc = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];
	for (var i = 0; i < imgSrc.length; i++) {
		  var newImage = document.createElement('img');
		  newImage.setAttribute('src', imgSrc[i]);
		  thumbBar.appendChild(newImage);
		  newImage.onclick = function(e) {
			  var srcCurrent = e.target.getAttribute('src');
			  displayImage(srcCurrent);
		  	}

		}

	function displayImage(srcCurrent) {
		displayedImage.setAttribute('src', srcCurrent);
	}

		

/* Wiring up the Darken/Lighten button */

	btn.onclick = function() {
		var classCrt = btn.getAttribute('class');
		if (classCrt === 'dark') {
			btn.setAttribute('class', 'light');
			btn.textContent = 'Светлее';
			overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
			}
		else {
			btn.setAttribute('class', 'dark');
			btn.textContent = 'Темнее';
			overlay.style.backgroundColor = 'rgba(0,0,0,0)';
		}
	}