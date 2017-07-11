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
    var woman_Pix = window.localStorage.womanPixItem;
    var man_Pix = window.localStorage.manPixItem;
    var prewoman_Pix = window.localStorage.prewomanPixItem;
    var preman_Pix = window.localStorage.premanPixItem;
    var bag_Pix = window.localStorage.bagPixItem;
    var belt_Pix = window.localStorage.beltPixItem;
    var wallet_Pix = window.localStorage.walletPixItem;
    var PixItem = woman_Pix+man_Pix+prewoman_Pix+preman_Pix+bag_Pix+belt_Pix+wallet_Pix;
    if(PixItem ==undefined||PixItem==""){
        alert("주문 선택이 되지 않았습니다");
    } else{
        window.localStorage.PixItem = "#10"+PixItem;
        alert(window.localStorage.PixItem);
        location.href = 'order_page.html'
    }

});