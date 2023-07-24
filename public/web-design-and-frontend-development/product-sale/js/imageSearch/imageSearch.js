$(document).on('click', '.imageSearch', function(){
	//alert($(this).attr("original_url"));
   
   	$("#post_img").val($(this).attr("original_url"));
	$('#imageSelected').attr('src', $(this).attr("original_url"));
	$("#imageSelectedCopy").attr('src', $(this).attr("original_url"));
	$('#counterclockwise').hide();
	$('#clockwise').hide();
	$('.imageSelectedWrapper').show();
	$('#imageSelected').show().scrollToMe();
	$("#post_img").val($(this).attr("original_url"));


});




$(document).on("ready", function () {


    var result_container, resultsDiv;

    var config = {
        type		: 'images',
        append	  : false,
        perPage	 : 10,			// A maximum of 8 is allowed by Google
        page		: 0			 // The start page
    };

    $('#imageSearch').click(function(){
        googleImageSearch();
        show_results();
        return false;
    });

    var count = 0;
    function show_results(){
        if(count < 1){
            var query = $('#imageSearchValue').val();
            $('#imageSearchLabel').prepend('<center><h3>Results for : '+query+'</h3><p>Select one Image !</p></center>');
        }
        count = parseInt(count) + 1
    }

    function googleImageSearch(parameters){

        //extend function to use the above config parameters with some other params
        parameters = $.extend({},config,parameters);
        parameters.term = parameters.term || $('#imageSearchValue').val();

       
		var apiURL = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyAwJMoJoOlmAUMtfNTXpFYpH6FT7UzBayE&cx=000482128011229828134:62r_yca6hhs&searchType=image&fileType=jpg';
	
		var resultsDiv = $('#imageSearchResults');

        // call a request to api to get the json data
        $.getJSON(apiURL,{q:parameters.term,num:parameters.perPage,start:(parameters.page*parameters.perPage+1),  safe:"high"},function(r){    
			console.log(r);
			
			window.imgResults=r;
            if (r.items==null){
				console.log('img search: nada');
                return;
            }

            var results = r.items;
            $('#more_results').remove();

            //if any number of results were returned
            if(results.length){

                if (resultsDiv.find("#resu").length==0){
                    //resultsDiv.append('<ul id="resu" class="b"></ul>')
                    resultsDiv.append('<div id="resu" class="b"></div>')
                    result_container=resultsDiv.find("#resu").first();
                }

                if(!parameters.append){
                    result_container.html("");
                }

                for(var i=0;i<results.length;i++){
                    // Creating a new result object and firing its toString method:
                    if(i!==0){
                        result_container.append(new result(results[i]) + '');
                    }
                }
				
				
				$('<div>',{className:'row col-md-12',id:'more_results',html:'<img src="img/more.png">'}).appendTo(resultsDiv).click(function(){
					googleImageSearch({append:true,page:parameters.page+1});
					$(this).fadeOut();
				});

            }
            else {
                // No results were found for this search.
                resultsDiv.empty();
                $('<span>',{className:'notFound',html:'<strong>No results :</strong>'}).hide().appendTo(resultsDiv).show();
            }
        });
    }

    function result(r){

        //the ajax search api returns imageResult class and generating markup by .toString() method.
        //reformat the results
        var array = new Array;
		//console.log(r);
        array = [
			'<div class="col-md-4 col-sm-6  col-xs-6"><div class="thumbnail"><img class="imgUrl2 img-responsive imageSearch" src="',r.image.thumbnailLink,'" alt="',r.title,'" original_url="'+ r.link+'"/></div></div>'
        ];
        
        // The toString method.
        this.toString = function(){
            return array.join('');
        }
    }



});
