//button 1
$(function() {
    "use strict";

    $('#button1').click(function(e) {
    	e.preventDefault();
    
	$('#test')
	.find('.flowers')
	.hide(3000);
    });
});

//button 2
$(function() {
    "use strict";

    $('#button2').click(function(e) {
    	e.preventDefault();
    
	$('#test')
	.find('.flowers')
	.show(3000);
    });
});

//button 3
$(function() {
    "use strict";
	
	var $item = $('#test');
    
    $('#button3').click(function(e) {
    	e.preventDefault();
		
		$item.find('.flowers').toggle(3000);
    });
});