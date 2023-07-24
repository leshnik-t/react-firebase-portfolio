// Required for drag and drop file access
jQuery.event.props.push('dataTransfer');
$(function(){
	

	
	var dropTimer;
	var dropTarget = $('.dragArea');
	var fileInput = $('#imageUpload');
	dropTarget.on("dragover", function(event) {
		clearTimeout(dropTimer);
		if (event.currentTarget == dropTarget[0]) {
			dropTarget.addClass('over');
		}
		return false; // Required for drop to work
	});
	dropTarget.on('dragleave', function(event) {
		if (event.currentTarget == dropTarget[0]) {
			dropTimer = setTimeout(function() {
				dropTarget.removeClass('over');
			}, 200);
		}
	});
	handleDrop = function(files){
		dropTarget.removeClass('over');
		var file = files[0]; // Multiple files can be dropped. Lets only deal with the "first" one.
		if (file.type.match('image.*')) {
			resizeImage(file, 700, function(result) {
				$('#imageSelectedCopy').attr('src', result);
				$('#imageSelected').attr('src', result);
				$('#counterclockwise').show();
				$('#clockwise').show();
				$('.imageSelectedWrapper').show();
				if ($('#imageSearchResults').find("#resu").length>0){
                    $('#resu').remove();
                }
				$("#imageSelected").show().scrollToMe();

			});
		} else {
			alert("That file wasn't an image.");
		}
	};
	dropTarget.on('drop', function(event) {
		event.preventDefault(); // Or else the browser will open the file
		handleDrop(event.dataTransfer.files);
	});
	fileInput.on('change', function(event) {
		handleDrop(event.target.files);
	});
	resizeImage = function(file, size, callback) {
		var fileTracker = new FileReader;
		fileTracker.onload = function() {
			var image = new Image();
			image.onload = function(){
				var canvas = document.createElement("canvas");
				
				console.log('original width : ' + canvas.width);
				/*
				if(image.height > size) {
					image.width *= size / image.height;
					image.height = size;
				}
				*/
				if(image.width > size) {
					image.height *= size / image.width;
					image.width = size;
				}
				console.log('original image width : ' + image.width);
				console.log('original image height : ' + image.height);
				pic_real_width = image.width;
				pic_real_height = image.height;


				var ctx = canvas.getContext("2d");
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				canvas.width = image.width;
				canvas.height = image.height;
				ctx.drawImage(image, 0, 0, image.width, image.height);
				
				
				$("#post_img").val(canvas.toDataURL("image/jpeg"));

				callback(canvas.toDataURL("image/jpeg"));
			};
			image.src = this.result;
		}
		fileTracker.readAsDataURL(file);
		fileTracker.onabort = function() {
			alert("The upload was aborted.");
		}
		fileTracker.onerror = function() {
			alert("An error occured while reading the file.");
		}
		
		
		
		
		
	};
});