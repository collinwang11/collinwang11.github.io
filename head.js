$(document).ready(function() {
    $('.nav_1').click(function(){
        $("#Home").fadeIn(1000);
        $("#Education").hide();
        $("#Experience").hide();
        $("#Portfolio").hide();
    });
});
$(document).ready(function() {
    $('.nav_2').click(function(){
       $("#Home").hide();
        $("#Education").fadeIn(1000);
        $("#Experience").hide();
        $("#Portfolio").hide();
    });
});
$(document).ready(function() {
    $('.nav_3').click(function(){
       $("#Home").hide();
        $("#Education").hide();
        $("#Experience").show();
        $("#Portfolio").hide();
    });
});
$(document).ready(function() {
    $('.nav_4').click(function(){
       $("#Home").hide();
        $("#Education").hide();
        $("#Experience").hide();
        $("#Portfolio").show();
    });
});