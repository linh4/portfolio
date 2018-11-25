$(document).ready(function(){

  $("nav > ul li a").click(function(e){
    e.preventDefault()
    $('.active').not($(this).closest('li').addClass('active')).removeClass('active')
    if ($(".have-children").hasClass("active")) {
      $(".sidebar nav").toggleClass("active");
      $(".have-children a").next().slideToggle()
      $('.page:visible').show();
    }
    else if ($(".have-children").find('li').hasClass('active')) {
      $('.page:visible').fadeOut(50);
      $('.page[id=' + $(this).data('id') + ']').fadeIn(50);
    }
    else {
      $(this).next().slideToggle();
      $('.page:visible').fadeOut(50);
      $('.page[id=' + $(this).data('id') + ']').fadeIn(50);
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






});
