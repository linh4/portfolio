$(document).ready(function(){

    $("#nav > ul li a").on("click", function(i){
    i.preventDefault();
    if( ! $(this).parent().hasClass("active") ){
      $("#nav ul li").removeClass("active");
      $(this).parent().addClass("active");
      if ($(".have-children").hasClass("active")) {
        $(".have-children a").next().slideToggle();
      }
    }
    else{
      $(this).next().slideToggle();
      }
  });


  $('#btn').click(function(){
    $('#two').hide(1000);
    $('#one').show(1000);
  })





});
