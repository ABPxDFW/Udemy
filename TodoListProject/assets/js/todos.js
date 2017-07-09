/**
 * Created by abpxninja on 7/8/2017.
 */
// Check off specific todos by clicking
$("li").click(function () {
    $(this).toggleClass("completed");
});

// Click on X to delete to-do
$("span").click(function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

