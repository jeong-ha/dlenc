$(document).ready(function(){
//맨위에서 스크롤 시 헤더 모양 변경

     
$(window).scroll(function() {
  fixNav();
});

function fixNav() {
  var subHeight = $('.sub_title').height();
  var scrollTop = $(document).scrollTop();
  console.log(subHeight);
  if (scrollTop >= subHeight) {
    $('.sub_site_road').addClass('top');
  } else {
    $('.sub_site_road').removeClass('top');
  }
};

//서브메뉴 오픈
$('.nav_menu>li').mouseover(function(){
    $('.menu_inner, .menu_inner_bg').addClass('menu_open');
});
$('.menu_inner_bg').mouseout(function(){
    $('.menu_inner, .menu_inner_bg').removeClass('menu_open');
})
$('header').mouseover(function(){
    $(this).addClass('headerbg');
}).mouseout(function(){
    $(this).removeClass('headerbg');
});
    
//사이트맵
$('.fullmenu').click(function(){
    $('.site_map').show();
});
$('.site_map_close').click(function(){
    $('.site_map').hide();
});
$(document).keyup(function(e) {
 if (e.keyCode == 27) { //esc의 아스키코드가 27임
     $('.site_map').hide();
}
});
    
    
//모바일 메뉴    
$('.m_menu_open').click(function(){
    $('.m_menu').toggleClass('bgbye');
    $('.m_menu_bar').toggleClass('open');
    $('html, body').toggleClass('bgbye');
});
//모바일 메뉴 li 펼치기(메뉴가 펴지면서 아이콘도 변해야 함)
$('.m_menu_bar>li>.menu_updown').click(function(){
    $(this).parent().find('.m_menu_inner').stop().slideToggle(300);
});
$('.menu_updown').click(function(){
    $(this).find('.m_menu_down').toggleClass('downup');
    $(this).find('.m_menu_up').toggleClass('updown');
});
    
    
    
    
    
    
    
    
    
        
});








