$(document).ready(function(){

  $("nav > ul li").click(function(e){
    e.stopPropagation()
    e.preventDefault()
    $('.active').not($(this).closest('li').addClass('active')).removeClass('active')
    if ($(".have-children").hasClass("active")) {
      $(".sidebar nav").toggleClass("active");
      $(".have-children span").next().slideToggle()
      $('.page:visible').show();
    }
    else if ($(".have-children").find('li').hasClass('active')) {
      $('.page:visible').hide('fast');
      $('.page[id=' + $(this).data('id') + ']').show('fast');
    }
    else {
      $('.page:visible').hide('fast');
      $('.page[id=' + $(this).data('id') + ']').show('fast');
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

   let typed = new Typed("#typed", {
      strings: ["<i>I'm a full-stack developer</i>.","<i>I'm passionate about front-end development</i>.", "<i>I'm a homechef</i>.", "<i>I love cats</i>.", "<i>I'm based in NYC."],
      starDelay: 300,
      backDelay: 600,
      typeSpeed: 60,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });


});
