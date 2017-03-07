/**
 * Created by byeongkwan on 2017-03-07.
 */
var select_woman = new Array();
var select_man = new Array();
var select_prewoman = new Array();
var select_preman = new Array();
var select_bag = new Array();
var select_belt = new Array();
var select_wallet = new Array();

var woman_index = 0;
var man_index = 0;
var prewoman_index = 0;
var preman_index = 0;
var bag_index = 0;
var belt_index = 0;
var wallet_index = 0;

//order 코드 구분하고 xml에서 불러온 값하고 비교 후 선택한 서비스 추출
$(document).ready(function () {
    Get_PixItem_Token();
    for(var i = 0 ; i<length/3;i++){
        if(order_Code[i][0] == 1){
            for (var j = 1; j <= woman_len; j++) {
                if (woman_array_code[j] == order_Code[i]) {
                    select_woman[woman_index] = woman_array_service[j];
                    alert(select_woman[woman_index]);
                    woman_index++;
                }
            }
        } else if(order_Code[i][0] === "2") {
            for (var j = 1; j <= man_len; j++) {
                if (man_array_code[j] === order_Code[i]) {
                    select_man[man_index] = man_array_service[j];
                    man_index++;
                }
            }
        } else if(order_Code[i][0] === "3") {
            for (var j = 1; j <= prewoman_len; j++) {
                if (prewoman_array_code[j] === order_Code[i]) {
                    select_prewoman[prewoman_index] = prewoman_array_service[j];
                    prewoman_index++;
                }
            }
        } else if(order_Code[i][0] === 4) {
            for (var j = 1; j <= preman_len; j++) {
                if (preman_array_code[j] === order_Code[i]) {
                    select_preman[preman_index] = preman_array_service[j];
                    preman_index++;
                }
            }
        } else if(order_Code[i][0] === 5) {
            for (var j = 1; j <= bag_len; j++) {
                if (bag_array_code[j] === order_Code[i]) {
                    select_bag[bag_index] = bag_array_service[j];
                    bag_index++;
                }
            }
        } else if(order_Code[i][0] === 6) {
            for (var j = 1; j <= belt_len; i++) {
                if (belt_array_code[j] === order_Code[i]) {
                    select_belt[belt_index] = belt_array_service[j];
                    belt_index++;
                }
            }
        } else if(order_Code[i][0] === 7) {
            for (var j = 1; j <= wallet_len; j++) {
                if (wallet_array_code[j] === order_Code[i]) {
                    select_wallet[wallet_index] = wallet_array_service[j];
                    wallet_index++;
                }
            }
        }
    }
});

