$( document ).scroll(function() {
    if($(this).scrollTop() > 30){
        $(".smallLinks").hide();
        $("header").addClass("scrolling");
    }else{
        $(".smallLinks").show();
        $("header").removeClass("scrolling");
    }
    if($(this).scrollTop() > 30){
        $(".containerArticleTitle").addClass("scrolling");
    }else{
        $(".containerArticleTitle").removeClass("scrolling");
    }
    if($(this).scrollTop() > 30){
        $(".containerArticleTitle").addClass("scrolling");
    }else{
        $(".containerArticleTitle").removeClass("scrolling");
    }
});
