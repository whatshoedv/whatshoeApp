/**
 * Created by byeongkwan on 2017-02-10.
 */
var main_woman_price = new Array();
var main_man_price = new Array();
var main_prewoman_price = new Array();
var main_preman_price = new Array();
var main_bag_price = new Array();
var main_belt_price = new Array();
var main_wallet_price = new Array();

//각 서비스마다 가격 배열에 저장
for(var i=1; i<=13; i++){
    main_woman_price[i] = document.getElementById('item_woman_cost'+i).value;
}
for(var i=1; i<=12; i++){
    main_man_price[i] = document.getElementById('item_man_cost'+i).value;
}
for(var i=1; i<=25; i++){
    main_prewoman_price[i] = document.getElementById('item_prewoman_cost'+i).value;
}
for(var i=1; i<=16; i++){
    main_preman_price[i] = document.getElementById('item_preman_cost'+i).value;
}
for(var i=1; i<=12; i++){
    main_bag_price[i] = document.getElementById('item_bag_cost'+i).value;
}
for(var i=1; i<=8; i++){
    main_belt_price[i] = document.getElementById('item_belt_cost'+i).value;
}
for(var i=1; i<=9; i++){
    main_wallet_price[i] = document.getElementById('item_wallet_cost'+i).value;
}

window.localStorage.setItem("woman_price",JSON.stringify(main_woman_price));
window.localStorage.setItem("man_price",JSON.stringify(main_man_price));
window.localStorage.setItem("prewoman_price",JSON.stringify(main_prewoman_price));
window.localStorage.setItem("preman_price",JSON.stringify(main_preman_price));
window.localStorage.setItem("bag_price",JSON.stringify(main_bag_price));
window.localStorage.setItem("belt_price",JSON.stringify(main_belt_price));
window.localStorage.setItem("wallet_price",JSON.stringify(main_wallet_price));


window.localStorage.PixItem=""; //어떤 항목 인지 토큰저장 초기화

window.localStorage.womanPixItem = "";
window.localStorage.manPixItem = "";
window.localStorage.prewomanPixItem = "";
window.localStorage.premanPixItem = "";
window.localStorage.bagPixItem = "";
window.localStorage.beltPixItem = "";
window.localStorage.walletPixItem = "";

var PixItem;
var subjet = "서비스를 선택하면 간단한 설명을 보여드립니다.";


//각 항목을 클릭하게 되면 #10부터 각 고유 코드가 쌓이게 된다.
$('#confirm_woman_button').click(function(){
    var PixItem="";
    for(var i=1;i<=13;i++){
        if(document.getElementById('item_woman_input'+i).value == 'on'){
            var string = document.getElementById('item_woman_code'+i).value.toString();
                PixItem += string;
        }
    }
    window.localStorage.womanPixItem = PixItem;
    alert(window.localStorage.womanPixItem);
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
    var PixItem="";
    for(var i=1;i<=12;i++){
        if(document.getElementById('item_man_input'+i).value == 'on'){
            var string = document.getElementById('item_man_code'+i).value.toString();
                PixItem += string;
        }
    }
    window.localStorage.manPixItem = PixItem;
    alert(window.localStorage.manPixItem);
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
    var PixItem="";
    for(var i=1;i<=25;i++){
        if(document.getElementById('item_prewoman_input'+i).value == 'on'){
            var string = document.getElementById('item_prewoman_code'+i).value.toString();
                PixItem += string;
        }
    }
    window.localStorage.prewomanPixItem = PixItem;
    alert(window.localStorage.prewomanPixItem);
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
    var PixItem="";
    for(var i=1;i<=16;i++){
        if(document.getElementById('item_preman_input'+i).value == 'on'){
            var string = document.getElementById('item_preman_code'+i).value.toString();
                PixItem += string;
        }
    }
    window.localStorage.premanPixItem = PixItem;
    alert(window.localStorage.premanPixItem);
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
    var PixItem="";
    for(var i=1;i<=12;i++){
        if(document.getElementById('item_bag_input'+i).value == 'on'){
            var string = document.getElementById('item_bag_code'+i).value.toString();
                PixItem += string;
        }
    }
    window.localStorage.bagPixItem = PixItem;
    alert(window.localStorage.bagPixItem);
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
    var PixItem = "";
    for(var i=1;i<=7;i++){
        if(document.getElementById('item_belt_input'+i).value == 'on'){
            var string = document.getElementById('item_belt_code'+i).value.toString();
                PixItem += string;
        }
    }
    window.localStorage.beltPixItem = PixItem;
    alert(window.localStorage.beltPixItem);
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
    var PixItem="";
    for(var i=1;i<=9;i++){
        if(document.getElementById('item_wallet_input'+i).value == 'on'){
            var string = document.getElementById('item_wallet_code'+i).value.toString();
                PixItem += string;
        }
    }
    window.localStorage.walletPixItem = PixItem;
    alert(window.localStorage.walletPixItem);
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
