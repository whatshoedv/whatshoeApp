/**
 * Created by byeongkwan on 2017-02-14.
 */

//이전 페이지 이동
$('#order_head_back').click(function () {
   location.href="main.html";
});


//총 결제 금액 표기

var sumCost = parseInt(localStorage.womanCost)+parseInt(localStorage.manCost)+parseInt(localStorage.prewomanCost)+parseInt(localStorage.premanCost)+parseInt(localStorage.bagCost)+parseInt(localStorage.beltCost)+parseInt(localStorage.walletCost)+"원";

document.getElementById('order_sumCost').textContent = sumCost ;

//주문 취소 버튼
$('#cancel_btn').click(function () {
   location.href="main.html";
});

//주문번호 토큰 구분
function Get_PixItem_Token() {
    var pixItem = new Array();
    var order_Code = new Array();
    var length = window.localStorage.PixItem.length;
    pixItem = window.localStorage.PixItem;
    var index = 0;
       for (var j=0; j<length;j++){
           if(j%3 == 0){
               order_Code[index] = pixItem[j]+pixItem[j+1]+pixItem[j+2];
               alert(index +":"+order_Code[index]);
               index++;
           }
       }
}