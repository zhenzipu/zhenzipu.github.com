$(window).scroll(function(){
  if ($(window).scrollTop()>100){
    $(".goback").fadeIn(500);
  }else{
    $(".goback").fadeOut(500);
  }
});
$('.goback').click(function(){
  $('html,body').animate({
    'scrollTop':0
  },500)
})
// if(document.documentElement.clientWidth < 767){
//   $(".goback").hide();
// }else{
//   $(".goback").show();
// }
window.onresize = function() {
    clientWidth = document.documentElement.clientWidth;
    if(clientWidth < 766) {
      console.log(333)
      $(".goback").hide();
    } else {
      console.log(444)
     $(".goback").show();
    }
}
