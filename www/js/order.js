/**
 * Created by byeongkwan on 2017-02-14.
 */

//이전 페이지 이동
$('#order_head_back').click(function () {
    Get_PixItem_Token();
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
var pixItem = new Array();
var order_Code = new Array();
var length = window.localStorage.PixItem.length;

function Get_PixItem_Token() {
    pixItem = window.localStorage.PixItem;
    var index = 0;
       for (var i=0; i<length/3;i++){
           order_Code[i] = new Array();

           order_Code[i] = pixItem[index] + pixItem[index+1]+ pixItem[index+2];
           index+=3;
       }
}
