// $(document).ready(function() {

//   var height = $('#mainNavbar').outerHeight();
//   var validId = ['#education', '#habit', '#interest'];

//   //slide section effect
//   $('.slide-section').click(function(e) {
//     var linkHref = $(this).attr('href');
//     var linkHrefOffset = $(linkHref).offset().top;

//     $('html, body').animate({
//       scrollTop: linkHrefOffset
//     }, 500);

//     e.preventDefault();
//   });

//   var eventHandler = function(e) {

//     var sectionLi = $('ul li');
//     var sectionID = [];
//     var matchIDIndex = [];
//     var scrollY = window.scrollY;

//     for (var x = 0; x < sectionLi.length; x++) {
//       sectionID.push($(sectionLi[x].innerHTML).attr('href'));
//     }

//     for (var y = 0; y < sectionID.length; y++) {
//       matchIDIndex.push($.inArray(sectionID[y], validId));
//     }

//     for (var m = 0; m < matchIDIndex.length; m++) {
//       if (matchIDIndex[m] >= 0) {
//         var sectionIDOffset = $(sectionID[m]).offset().top;

//         if (!(sectionID[m + 1] == undefined)) {
//           var nextSectionOffset = $(sectionID[m + 1]).offset().top;

//           if (scrollY >= sectionIDOffset && scrollY <= nextSectionOffset) {
//             $(sectionID[m] + ' .content').fadeIn();
//           } else $(sectionID[m] + ' .content').fadeOut(800);
//         } else if (scrollY >= sectionIDOffset) {
//           $(sectionID[m] + ' .content').fadeIn();
//         } else if (scrollY <= $(sectionID[m-1]).offset().top ) $(sectionID[m] + ' .content').fadeOut(800);
//       }
//     }
//   }

//   window.addEventListener('scroll', eventHandler, false);

// });

$(document).ready(function(){
  var scrollLink = $('.scroll');

  scrollLink.click(function(e){
    e.preventDefault();

    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 800);
    // console.log($(this.hash).offset().top);
    // console.log($(this.hash).offset());

  })



  $(window).scroll(function() {
    var scrollBarLocation = $(this).scrollTop();
    // console.log(scrollBarLocation)
    scrollLink.each(function() {
      var sectionOffset = $(this.hash).offset().top;
      // console.log(this);

      if (sectionOffset <= scrollBarLocation) {
        $(this).parent().addClass('activeNav');
        $(this).parent().siblings().removeClass('activeNav');
      }
    });
    $('#mainNavbar').addClass('navBarAnimate')
    var navBarOffset = $('#mainNavbar').offset().top;
    if (navBarOffset == 0) {
      $('#mainNavbar').removeClass('navBarAnimate');
    }

  });

  $('.vaultBoy').click(function(){
    $('body,html').animate({
      scrollTop: $('#about').offset().top
    }, 800);
  })

  
  $('.navbar-brand').click(function(){
    $('body,html').animate({
      scrollTop: $('html').offset().top
    }, 800);
  })



});
