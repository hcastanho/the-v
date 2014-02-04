jQuery(document).ready(function($) {


    $('#stories').bjqs({

	'width' : 620,
	'height' : 348,

	// animation values
	'animtype' : 'fade', // accepts 'fade' or 'slide'
	'animduration' : 450, // how fast the animation are
	'animspeed' : 4000, // the delay between each slide
	'automatic' : true, // automatic

	// control and marker configuration
	'showcontrols' : true, // show next and prev controls
	'centercontrols' : true, // center controls verically
	'nexttext' : 'Next', // Text for 'next' button (can use HTML)
	'prevtext' : 'Prev', // Text for 'previous' button (can use HTML)
	'showmarkers' : false, // Show individual slide markers
	'centermarkers' : true, // Center markers horizontally

	// interaction values
	'keyboardnav' : true, // enable keyboard navigation
	'hoverpause' : true, // pause the slider on hover

	// presentational options
	'usecaptions' : true, // show captions for images using the image title tag
	'randomstart' : false, // start slider at random slide
	'responsive' : false // enable responsive capabilities (beta)

    });


});



