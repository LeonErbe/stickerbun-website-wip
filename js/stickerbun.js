$(function currentPage(){
    $('a').each(function(){
        if($(this).prop("href") == window.location.href) {
            $(this).addClass("link-current");
            $(this).parents("li").addClass("item-current");
        }
    });
});