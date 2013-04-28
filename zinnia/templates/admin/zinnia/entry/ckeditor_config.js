$(function(){
    $("textarea").each(function(index, element){
        CKEDITOR.replace($(element).attr("id"), {{settings|safe}});
    });
});
