(function ( $ ) {
    $.fn.toastMe = function toastElement(duration) {
        $e = this
        $e.fadeIn(500, function () {
            setTimeout(function () {
                $e.fadeOut()
            }, duration)
        });
        return $e;
    };

    $.fn.scrollToMe=function (){
        $e=this;
        $('html, body').animate({
            scrollTop: $e.offset().top-50
        }, 500);

        return $e;
    }

}( jQuery ));



$(function(){


	
	var angleInDegrees=0;		
	//var pic_real_width = 0;
	//var pic_real_height = 0;
		
	$("#clockwise").click(function(event){ 
		event.preventDefault();
		console.log('clickwise');
		angleInDegrees+=90;
		drawRotated(angleInDegrees);
		return false;
	});
	
	$("#counterclockwise").click(function(event){ 
		event.preventDefault();
		console.log('counterclockwise');
		angleInDegrees-=90;
		drawRotated(angleInDegrees);
		return false;
	});
	
	
	function drawRotated(degrees){
		
		console.log(pic_real_height);
		console.log(pic_real_width);
		
		
		if(degrees==360  || degrees==-360 ) degrees=0;
		if(degrees==90 || degrees==270 || degrees==-90 || degrees==-270 )
		{
			width = pic_real_height;
			height = pic_real_width;
		}else{
			width = pic_real_width;
			height = pic_real_height;
		}
		
		
		var canvas = document.getElementById("canvas"); 
		canvas.style.display="none";
		var context = canvas.getContext('2d');
		
		canvas.width = width;
		canvas.height = height;

		imageObj = new Image();
		/*
		imageObj.onload = function() {
			
			//context.drawImage(imageObj,0, 0, canvas.width, canvas.height);
			//context.drawImage(imageObj,0, 0, width, height);
		};
		*/
		imageObj.src = $('#imageSelectedCopy').attr('src');
		
		console.log('canvas.width '+canvas.width);
		console.log('canvas.height '+canvas.height);
		console.log('imageObj.width '+imageObj.width);
		console.log('imageObj.height '+imageObj.height);
				
		// translate to center-canvas 
		// the origin [0,0] is now center-canvas
		context.translate(width / 2, height / 2);
	
		// roate the canvas by +90% (==Math.PI/2)
		context.rotate(degrees*Math.PI/180);
	
		// draw the signature
		// since images draw from top-left offset the draw by 1/2 width & height
		context.drawImage(imageObj, -imageObj.width / 2, -imageObj.height / 2);
	
		$('#imageSelected').attr('src',canvas.toDataURL("image/jpeg"));	
		
				
		$("#post_img").val(canvas.toDataURL("image/jpeg"));
		$("#imageSelected").show().scrollToMe();
	}
	
	
	$("#imageSelectedCopy").load(function(){ 
		console.log('loading new Image');
		$('#imageSelected').attr('src',$('#imageSelectedCopy').attr('src'));	
		pic_real_width = $('#imageSelectedCopy').width();
		pic_real_height = $('#imageSelectedCopy').height();
		
	});
	/**/
	
	$("#imageSelected").on('load', function(){
		//Clear Input File
		$("#imageUpload").replaceWith($("#imageUpload").val('').clone(true));
		
        $("input[name=imageWidth]").val($(this).width());
        var width=$(this).width();
        var height=$(this).height();
        var aWidth, aHeight;
        ratio=window.aspectRatio;
        if (width/height>ratio){
            aWidth=height*ratio;
            aHeight=height;
        }else{
            aWidth=width;
            aHeight=width/ratio;
        }
        $(this).next().css({
            width:aWidth+'px',
            height:aHeight+'px',
            'background-color':'#D8230F',
            opacity:0.6,
            display:'block',
            position:'absolute',
            'box-sizing':'border-box',
            border:'2px solid #fff',
            top:0,
            left:15
        });

        $("input[name=cropWidth]").val(Math.floor(aWidth));
        $("input[name=cropLeft]").val(15);
        $("input[name=cropTop]").val(0);


        $(this).next().draggable({
            containment: $("#imageSelected").closest("div"),
            scroll: false,
            stop: function() {
                $("input[name=cropWidth]").val(Math.floor($(this).width()));
                $("input[name=cropLeft]").val(Math.floor(parseInt($(this).css('left'))));
                $("input[name=cropTop]").val(Math.floor(parseInt($(this).css('top'))));
            }
        }).resizable({
            containment: $("#imageSelected").closest("div"),
            aspectRatio: window.aspectRatio,
            minWidth: 50,
            handles:"all",
            stop: function() {
                $("input[name=cropWidth]").val(Math.floor(parseInt($(this).width())));
                $("input[name=cropLeft]").val(Math.floor(parseInt($(this).css('left'))));
                $("input[name=cropTop]").val(Math.floor(parseInt($(this).css('top'))));
            }
        })
    });

});