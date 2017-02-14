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
