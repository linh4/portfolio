$(document).ready(function(){

    $("nav > ul li a").click(function(e){
      e.preventDefault()
      if( !$(this).parent().hasClass("active")) {
        $("nav ul li").removeClass("active")
        $(this).parent().addClass("active")
        if ($(".have-children").hasClass("active")) {
          $(".have-children a").next().slideToggle()
        }
      }
      else {
        $(this).next().slideToggle();
      }
    })

  $(".menu-open").click(function(e) {
       e.preventDefault();
       $(".sidebar nav").toggleClass("active");
   })
   $(".menu-close").click(function(e) {
       e.preventDefault();
       $("nav").toggleClass("active");
   })



   // $('#btn').click(function(){
   //   $('#two').hide(1000);
   //   $('#one').show(1000);
   // })





});
