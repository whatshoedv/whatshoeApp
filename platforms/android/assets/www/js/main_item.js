/**
 * Created by byeongkwan on 2017-02-10.
 */
window.localStorage.PixItem=""; //어떤 항목 인지 토큰저장 초기화

var PixItem;
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
$('#confirm_belt_button').click(function(){
    var PixItem = window.localStorage.PixItem;
    for(var i=1;i<=8;i++){
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
$('#confirm_wallet_button').click(function(){
    var PixItem = window.localStorage.PixItem;
    for(var i=1;i<=7;i++){
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
