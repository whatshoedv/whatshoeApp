/**
 * Created by byeongkwan on 2017-02-10.
 */
window.localStorage.PixItem=""; //어떤 항목 인지 토큰저장 초기화

var PixItem;
var subjet = "서비스를 선택하면 간단한 설명을 보여드립니다.";

//각 항목을 클릭하게 되면 #10부터 각 고유 코드가 쌓이게 된다.
$('#confirm_woman_button').click(function(){
    var PixItem = window.localStorage.PixItem;
    for(var i=1;i<=13;i++){
        if(document.getElementById('item_woman_input'+i).value == 'on'){
            var string = document.getElementById('item_woman_code'+i).value.toString();
            if(PixItem ==undefined||PixItem=="")
                PixItem = "#10"+string;
            else if(PixItem != undefined){
                PixItem += string;
            }
        }
    }
    window.localStorage.PixItem = PixItem;
    alert(window.localStorage.PixItem);
    Modal_Woman.hide();
});
//닫기를 했을 때 클릭됬던 항목들 초기화
$('#woman_close').click(function () {
    for(var i=1; i<=13; i++){
        document.getElementById('item_woman_input'+i).value = "NULL";
        document.getElementById('item_woman_item'+i).style.backgroundColor="#ffffff";
    }
    localStorage.womanCost = 0;
    document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
    document.getElementById('item_woman_subject').textContent = subjet;
    Modal_Woman.hide();
});

$('#confirm_man_button').click(function(){
    var PixItem = window.localStorage.PixItem;
    for(var i=1;i<=12;i++){
        if(document.getElementById('item_man_input'+i).value == 'on'){
            var string = document.getElementById('item_man_code'+i).value.toString();
            if(PixItem ==undefined||PixItem=="")
                PixItem = "#10"+string;
            else if(PixItem != undefined){
                PixItem += string;
            }
        }
    }
    window.localStorage.PixItem = PixItem;
    alert(window.localStorage.PixItem);
    Modal_Man.hide();
});
$('#man_close').click(function () {
    for(var i=1; i<=12; i++){
        document.getElementById('item_man_input'+i).value = "NULL";
        document.getElementById('item_man_item'+i).style.backgroundColor="#ffffff";
    }
    localStorage.manCost = 0;
    document.getElementById('item_man_cost').textContent = localStorage.manCost+"원";
    document.getElementById('item_man_subject').textContent = subjet;
    Modal_Man.hide();
});

$('#confirm_prewoman_button').click(function(){
    var PixItem = window.localStorage.PixItem;
    for(var i=1;i<=25;i++){
        if(document.getElementById('item_prewoman_input'+i).value == 'on'){
            var string = document.getElementById('item_prewoman_code'+i).value.toString();
            if(PixItem ==undefined||PixItem=="")
                PixItem = "#10"+string;
            else if(PixItem != undefined){
                PixItem += string;
            }
        }
    }
    window.localStorage.PixItem = PixItem;
    alert(window.localStorage.PixItem);
    Modal_PreWoman.hide();
});
$('#prewoman_close').click(function () {
    for(var i=1; i<=25; i++){
        document.getElementById('item_prewoman_input'+i).value = "NULL";
        document.getElementById('item_prewoman_item'+i).style.backgroundColor="#ffffff";
    }
    localStorage.prewomanCost = 0;
    document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    document.getElementById('item_prewoman_subject').textContent = subjet;
    Modal_PreWoman.hide();
});

$('#confirm_preman_button').click(function(){
    var PixItem = window.localStorage.PixItem;
    for(var i=1;i<=16;i++){
        if(document.getElementById('item_preman_input'+i).value == 'on'){
            var string = document.getElementById('item_preman_code'+i).value.toString();
            if(PixItem ==undefined||PixItem=="")
                PixItem = "#10"+string;
            else if(PixItem != undefined){
                PixItem += string;
            }
        }
    }
    window.localStorage.PixItem = PixItem;
    alert(window.localStorage.PixItem);
    Modal_PreMan.hide();
});
$('#preman_close').click(function () {
    for(var i=1; i<=16; i++){
        document.getElementById('item_preman_input'+i).value = "NULL";
        document.getElementById('item_preman_item'+i).style.backgroundColor="#ffffff";
    }
    localStorage.premanCost = 0;
    document.getElementById('item_preman_cost').textContent = localStorage.premanCost+"원";
    document.getElementById('item_preman_subject').textContent = subjet;
    Modal_PreMan.hide();
});

$('#confirm_bag_button').click(function(){
    var PixItem = window.localStorage.PixItem;
    for(var i=1;i<=12;i++){
        if(document.getElementById('item_bag_input'+i).value == 'on'){
            var string = document.getElementById('item_bag_code'+i).value.toString();
            if(PixItem ==undefined||PixItem=="")
                PixItem = "#10"+string;
            else if(PixItem != undefined){
                PixItem += string;
            }
        }
    }
    window.localStorage.PixItem = PixItem;
    alert(window.localStorage.PixItem);
    Modal_Bag.hide();
});
$('#bag_close').click(function () {
    for(var i=1; i<=12; i++){
        document.getElementById('item_bag_input'+i).value = "NULL";
        document.getElementById('item_bag_item'+i).style.backgroundColor="#ffffff";
    }
    localStorage.bagCost = 0;
    document.getElementById('item_bag_cost').textContent = localStorage.bagCost+"원";
    document.getElementById('item_bag_subject').textContent = subjet;
    Modal_Bag.hide();
});

$('#confirm_belt_button').click(function(){
    var PixItem = window.localStorage.PixItem;
    for(var i=1;i<=7;i++){
        if(document.getElementById('item_belt_input'+i).value == 'on'){
            var string = document.getElementById('item_belt_code'+i).value.toString();
            if(PixItem ==undefined||PixItem=="")
                PixItem = "#10"+string;
            else if(PixItem != undefined){
                PixItem += string;
            }
        }
    }
    window.localStorage.PixItem = PixItem;
    alert(window.localStorage.PixItem);
    Modal_Belt.hide();
});
$('#belt_close').click(function () {
    for(var i=1; i<=7; i++){
        document.getElementById('item_belt_input'+i).value = "NULL";
        document.getElementById('item_belt_item'+i).style.backgroundColor="#ffffff";
    }
    localStorage.beltCost = 0;
    document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
    document.getElementById('item_belt_subject').textContent = subjet;
    Modal_Belt.hide();
});

$('#confirm_wallet_button').click(function(){
    var PixItem = window.localStorage.PixItem;
    for(var i=1;i<=9;i++){
        if(document.getElementById('item_wallet_input'+i).value == 'on'){
            var string = document.getElementById('item_wallet_code'+i).value.toString();
            if(PixItem ==undefined||PixItem=="")
                PixItem = "#10"+string;
            else if(PixItem != undefined){
                PixItem += string;
            }
        }
    }
    window.localStorage.PixItem = PixItem;
    alert(window.localStorage.PixItem);
    Modal_Wallet.hide();
});
$('#wallet_close').click(function () {
    for(var i=1; i<=9; i++){
        document.getElementById('item_wallet_input'+i).value = "NULL";
        document.getElementById('item_wallet_item'+i).style.backgroundColor="#ffffff";
    }
    localStorage.walletCost = 0;
    document.getElementById('item_wallet_cost').textContent = localStorage.walletCost+"원";
    document.getElementById('item_wallet_subject').textContent = subjet;
    Modal_Wallet.hide();
});
