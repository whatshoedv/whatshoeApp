/**
 * Created by byeongkwan on 2017-02-14.
 */

var Modal_deliverNotice = new Example.Modal({
    id: "modal_deliverNotice" // 모달창 아이디 지정
});
Modal_deliverNotice.show();
$('#deliverModal_confirm').click(function () {
   Modal_deliverNotice.hide();
});
var Modal_moreInfo = new Example.Modal({
    id: "modal_moreInfo" // 모달창 아이디 지정
});
$('#moreInfo_confirm').click(function () {
    Modal_moreInfo.hide();
});

function add_row() {
    for(var i = 0; i<woman_index; i++) {
        var tbody = document.getElementById('body_moreInfo');
        var row = tbody.insertRow(tbody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = "여자구두";
        cell2.innerHTML = select_woman[i];
        cell3.innerHTML = select_woman_price[i]+"원";
        if(i == woman_index-1){
            var tbody = document.getElementById('body_moreInfo');
            var row = tbody.insertRow(tbody.rows.length);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = "<br>";
            cell2.innerHTML = " ";
            cell3.innerHTML = " ";
        }
    }

    for(var i=0; i<man_index; i++){
        var tbody = document.getElementById('body_moreInfo');
        var row = tbody.insertRow(tbody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = "남자구두";
        cell2.innerHTML = select_man[i];
        cell3.innerHTML = select_man_price[i]+"원";
        if(i == man_index-1){
            var tbody = document.getElementById('body_moreInfo');
            var row = tbody.insertRow(tbody.rows.length);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = "<br>";
            cell2.innerHTML = " ";
            cell3.innerHTML = " ";
        }
    }

    for(var i=0; i<prewoman_index; i++){
        var tbody = document.getElementById('body_moreInfo');
        var row = tbody.insertRow(tbody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = "프리미엄 여자 구두";
        cell2.innerHTML = select_prewoman[i];
        cell3.innerHTML = select_prewoman_price[i]+"원";
        if(i == prewoman_index-1){
            var tbody = document.getElementById('body_moreInfo');
            var row = tbody.insertRow(tbody.rows.length);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = "<br>";
            cell2.innerHTML = " ";
            cell3.innerHTML = " ";
        }
    }

    for(var i=0; i<preman_index; i++){
        var tbody = document.getElementById('body_moreInfo');
        var row = tbody.insertRow(tbody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = "프리미엄 남자 구두";
        cell2.innerHTML = select_preman[i];
        cell3.innerHTML = select_preman_price[i]+"원";
        if(i == preman_index-1){
            var tbody = document.getElementById('body_moreInfo');
            var row = tbody.insertRow(tbody.rows.length);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = "<br>";
            cell2.innerHTML = " ";
            cell3.innerHTML = " ";
        }
    }

    for(var i=0; i<bag_index; i++){
        var tbody = document.getElementById('body_moreInfo');
        var row = tbody.insertRow(tbody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = "가방";
        cell2.innerHTML = select_bag[i];
        cell3.innerHTML = select_bag_price[i]+"원";
        if(i == bag_index-1){
            var tbody = document.getElementById('body_moreInfo');
            var row = tbody.insertRow(tbody.rows.length);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = "<br>";
            cell2.innerHTML = " ";
            cell3.innerHTML = " ";
        }
    }

    for(var i=0; i<belt_index; i++){
        var tbody = document.getElementById('body_moreInfo');
        var row = tbody.insertRow(tbody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = "가방";
        cell2.innerHTML = select_belt[i];
        cell3.innerHTML = select_belt_price[i]+"원";
        if(i == belt_index-1){
            var tbody = document.getElementById('body_moreInfo');
            var row = tbody.insertRow(tbody.rows.length);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = "<br>";
            cell2.innerHTML = " ";
            cell3.innerHTML = " ";
        }
    }

    for(var i=0; i<wallet_index; i++){
        var tbody = document.getElementById('body_moreInfo');
        var row = tbody.insertRow(tbody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = "지갑";
        cell2.innerHTML = select_wallet[i];
        cell3.innerHTML = select_wallet_price[i]+"원";
        if(i == wallet_index-1){
            var tbody = document.getElementById('body_moreInfo');
            var row = tbody.insertRow(tbody.rows.length);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = "<br>";
            cell2.innerHTML = " ";
            cell3.innerHTML = " ";
        }
    }

}
