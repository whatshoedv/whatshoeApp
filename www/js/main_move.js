/**
 * Created by byeongkwan on 2017-02-14.
 */
// 메인 메뉴 이동 스크립트

$('#side_mypage').click(function(){
    location.href = 'main_mypage.html';
});
$('#side_point').click(function(){
    location.href = 'main_point.html';
});
$('#side_coupon').click(function(){
    location.href = 'main_coupon.html';
});
$('#side_list').click(function(){
    location.href = 'main_list.html';
});
$('#side_share').click(function(){
    location.href = 'main_share.html';
});
$('#side_notice').click(function(){
    location.href = 'https://m.facebook.com/whatshoeman';
});
$('#side_call').click(function () {
   location.href="http://plus.kakao.com/home/%40whatshoe";
});

//픽업위치  이동 스크립트
$('#pickup_btn').click(function () {
    var PixItem = window.localStorage.PixItem;
    if(PixItem ==undefined||PixItem==""){
        alert("주문 선택이 되지 않았습니다");
    } else{
        location.href = 'order_page.html'
    }

});