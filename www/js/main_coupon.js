/**
 * Created by byeongkwan on 2017-02-15.
 */
//백버튼
$('#coupon_head_back').click(function () {
   location.href = "main.html" ;
});
//쿠폰등록버튼
$('#coupon_register').click(function () {
    Modal_Coupon.show();
});
//모달정의
var Modal_Coupon = new Example.Modal({
    id: "modal_coupon" // 모달창 아이디 지정
});
//모달 숨기기
$('#modal_coupon_registerBTN').click(function () {
    Modal_Coupon.hide();
});
//쿠폰번호 유효성체크
Native