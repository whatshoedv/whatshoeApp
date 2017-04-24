/**
 * Created by byeongkwan on 2017-03-07.
 */

//선택된 서비스 저장 배열
var select_woman = new Array();
var select_man = new Array();
var select_prewoman = new Array();
var select_preman = new Array();
var select_bag = new Array();
var select_belt = new Array();
var select_wallet = new Array();

//선택된 서비스 각 가격 저장 배열
var select_woman_price = new Array();
var select_man_price = new Array();
var select_prewoman_price = new Array();
var select_preman_price = new Array();
var select_bag_price = new Array();
var select_belt_price = new Array();
var select_wallet_price = new Array();

//선택된 각 서비스 index
var woman_index = 0;
var man_index = 0;
var prewoman_index = 0;
var preman_index = 0;
var bag_index = 0;
var belt_index = 0;
var wallet_index = 0;

var service_count = 0;
//로컬에 저장되어있는 각 서비스별 가격 불러오기
var woman_price = window.localStorage.getItem("woman_price");
woman_price = JSON.parse(woman_price);

var man_price = window.localStorage.getItem("man_price");
man_price = JSON.parse(man_price);

var prewoman_price = window.localStorage.getItem("prewoman_price");
prewoman_price = JSON.parse(prewoman_price);

var preman_price = window.localStorage.getItem("preman_price");
preman_price = JSON.parse(preman_price);

var bag_price = window.localStorage.getItem("bag_price");
bag_price = JSON.parse(bag_price);

var belt_price = window.localStorage.getItem("belt_price");
belt_price = JSON.parse(belt_price);

var wallet_price = window.localStorage.getItem("wallet_price");
wallet_price = JSON.parse(wallet_price);


//order 코드 구분하고 xml에서 불러온 값하고 비교 후 선택한 서비스 추출
$(document).ready(function () {
    Get_PixItem_Token();
    for(var i = 0 ; i<length/3;i++){
        if(order_Code[i][0] == 1){
            for (var j = 1; j <= woman_len; j++) {
                if (woman_array_code[j] == order_Code[i]) {
                    select_woman[woman_index] = woman_array_service[j];
                    select_woman_price[woman_index] = woman_price[j];
                    woman_index++;
                    service_count++;
                }
            }
        } else if(order_Code[i][0] === "2") {
            for (var j = 1; j <= man_len; j++) {
                if (man_array_code[j] === order_Code[i]) {
                    select_man[man_index] = man_array_service[j];
                    select_man_price[man_index] = man_price[j];
                    man_index++;
                    service_count++;
                }
            }
        } else if(order_Code[i][0] === "3") {
            for (var j = 1; j <= prewoman_len; j++) {
                if (prewoman_array_code[j] === order_Code[i]) {
                    select_prewoman[prewoman_index] = prewoman_array_service[j];
                    select_prewoman_price[prewoman_index] = prewoman_price[j];
                    prewoman_index++;
                    service_count++;
                }
            }
        } else if(order_Code[i][0] === "4") {
            for (var j = 1; j <= preman_len; j++) {
                if (preman_array_code[j] === order_Code[i]) {
                    select_preman[preman_index] = preman_array_service[j];
                    select_preman_price[preman_index] = preman_price[j];
                    preman_index++;
                    service_count++;
                }
            }
        } else if(order_Code[i][0] === "5") {
            for (var j = 1; j <= bag_len; j++) {
                if (bag_array_code[j] === order_Code[i]) {
                    select_bag[bag_index] = bag_array_service[j];
                    select_bag_price[bag_index] = bag_price[j];
                    bag_index++;
                    service_count++;
                }
            }
        } else if(order_Code[i][0] === "6") {
            for (var j = 1; j <= belt_len; j++) {
                if (belt_array_code[j] === order_Code[i]) {
                    select_belt[belt_index] = belt_array_service[j];
                    select_belt_price[belt_index] = belt_price[j];
                    belt_index++;
                    service_count++;
                }
            }
        } else if(order_Code[i][0] === "7") {
            for (var j = 1; j <= wallet_len; j++) {
                if (wallet_array_code[j] === order_Code[i]) {
                    select_wallet[wallet_index] = wallet_array_service[j];
                    select_wallet_price[wallet_index] = wallet_price[j];
                    wallet_index++;
                    service_count++;
                }
            }
        }
    }
});

