$(document).ready(function(){
//맨위에서 스크롤 시 헤더 모양 변경
$(window).on('scroll',function(){ 
    if($(window).scrollTop()){ 
        $('header').addClass('headerbg'); 
    }else{ 
        $('header').removeClass('headerbg'); 
    } 
});
     
//스크롤 hide&show
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5; // 동작의 구현이 시작되는 위치
    var navbarHeight = $('header').outerHeight(); // 영향을 받을 요소를 선택
    
    // 스크롤시에 사용자가 스크롤했다는 것을 알림
    $(window).scroll(function(event){
        didScroll = true;
    });
    
    // hasScrolled()를 실행하고 didScroll 상태를 재설정
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    // 동작을 구현
    function hasScrolled() {
    // 접근하기 쉽게 현재 스크롤의 위치를 저장한다.
    var st = $(this).scrollTop();

    // 설정한 delta 값보다 더 스크롤되었는지를 확인한다.
    if(Math.abs(lastScrollTop - st) <= delta){
        return;
    }

    // 헤더의 높이보다 더 스크롤되었는지 확인하고 스크롤의 방향이 위인지 아래인지를 확인한다.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').addClass('hidden');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('hidden');
        }
    }

    // lastScrollTop 에 현재 스크롤위치를 지정한다.
    lastScrollTop = st;
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


//이미지 슬라이드

 $(document).ready(function() {
    $('#imageGallery').lightSlider({
        gallery:true,
        item:1,
        loop:true,
        thumbItem:5,
        slideMargin:0,
        enableDrag: true,
        easing: 'linear',
        speed: 800,
        pause: 5000,
        auto: 'true',
        currentPagerPosition:'center',
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '#imageGallery .lslide'
            });
        }   
    });  
  });
 

















