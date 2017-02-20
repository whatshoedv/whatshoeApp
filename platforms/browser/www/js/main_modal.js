/**
 * Created by byeongkwan on 2017-02-09.
 */

var Modal_Woman = new Example.Modal({
    id: "modal_woman" // 모달창 아이디 지정
});
var Modal_Man = new Example.Modal({
    id: "modal_man" // 모달창 아이디 지정
});
var Modal_PreWoman = new Example.Modal({
    id: "modal_prewoman" // 모달창 아이디 지정
});
var Modal_PreMan = new Example.Modal({
    id: "modal_preman" // 모달창 아이디 지정
});
var Modal_Bag = new Example.Modal({
    id: "modal_bag" // 모달창 아이디 지정
});
var Modal_Belt = new Example.Modal({
    id: "modal_belt" // 모달창 아이디 지정
});
var Modal_Wallet = new Example.Modal({
    id: "modal_wallet" // 모달창 아이디 지정
});


$("#item_girl").click(function() {
    Modal_Woman.show(); // 모달창 보여주기
});
$("#item_man").click(function() {
    Modal_Man.show(); // 모달창 보여주기
});
$("#item_prewoman").click(function() {
    Modal_PreWoman.show(); // 모달창 보여주기
});
$("#item_preman").click(function() {
    Modal_PreMan.show(); // 모달창 보여주기
});
$("#item_bag").click(function() {
    Modal_Bag.show(); // 모달창 보여주기
});
$("#item_belt").click(function() {
    Modal_Belt.show(); // 모달창 보여주기
});
$("#item_wallet").click(function() {
    Modal_Wallet.show(); // 모달창 보여주기
});
$("#item_etc").click(function() {
    location.href = "http://plus.kakao.com/home/%40whatshoe";
});