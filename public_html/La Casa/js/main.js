$(document).ready(function(){
        
        console.log("Doc Ready");
        $.getJSON("http://50.58.251.5/hack/rest/user/13.json", function(data){
            console.log("What happened here");
            var items = [];
            $.each (data, function (key, val){
                items.push("<li id='" + key + "'>" + val + "</li>");
            });
            
            $("<ul/>", {
                "class": "my-new-list",
                html: items.join("")
            }).appendTo( "body" );
        });
        

	/*  Hamburger Menu & Icon  */
	$('.hamburger').on('click', function(e){
		
		e.preventDefault();
		$(this).toggleClass('opned');
		$('header nav').toggleClass('active');
		
	});




	/*  Advanced search form & Icon  */
	$('#advanced_search_btn').on("click", function(e){
		e.preventDefault();

		var ads_box =$('.advanced_search');
		
		if(!ads_box.hasClass('advanced_displayed')){

			$(this).addClass('active');
			ads_box.stop().fadeIn(200).addClass('advanced_displayed');

		}else{

			$(this).removeClass('active');
			ads_box.stop().fadeOut(200).removeClass('advanced_displayed');

		}

	});




});