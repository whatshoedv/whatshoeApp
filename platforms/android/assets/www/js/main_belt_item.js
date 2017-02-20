localStorage.beltCost = 0; //각 항목별 비용 총 합계 로컬

// 각 항목별로 클릭시 가격 쌓임, 체크박스의 NULL, on 값으로 항목 선택 구별 가능
var subjet = "서비스를 선택하면 간단한 설명을 보여드립니다.";
$('#item_belt_item1').click(function () {
    var item_row = document.getElementById('item_belt_item1');
    if (document.getElementById('item_belt_input1').value == 'NULL') {
        item_row.style.backgroundColor = "#fab51a";
        document.getElementById('item_belt_input1').value = 'on';
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
        document.getElementById('item_belt_subject').textContent = document.getElementById('item_belt_list1').value.toString();
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_belt_input1').value = 'NULL';
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
        document.getElementById('item_belt_subject').textContent = subjet;
    }
});
$('#item_belt_item2').click(function () {
    var item_row = document.getElementById('item_belt_item2');
    if (document.getElementById('item_belt_input2').value == 'NULL') {
        item_row.style.backgroundColor = "#fab51a";
        document.getElementById('item_belt_input2').value = 'on';
        localStorage.beltCost = parseInt(localStorage.beltCost) + parseInt(document.getElementById('item_belt_cost2').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
        document.getElementById('item_belt_subject').textContent = document.getElementById('item_belt_list2').value.toString();
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_belt_input2').value = 'NULL';
        localStorage.beltCost = parseInt(localStorage.beltCost) - parseInt(document.getElementById('item_belt_cost2').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
        document.getElementById('item_belt_subject').textContent = subjet;
    }
});
$('#item_belt_item3').click(function () {
    var item_row = document.getElementById('item_belt_item3');
    if (document.getElementById('item_belt_input3').value == 'NULL') {
        item_row.style.backgroundColor = "#fab51a";
        document.getElementById('item_belt_input3').value = 'on';
        localStorage.beltCost = parseInt(localStorage.beltCost) + parseInt(document.getElementById('item_belt_cost3').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
        document.getElementById('item_belt_subject').textContent = document.getElementById('item_belt_list3').value.toString();
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_belt_input3').value = 'NULL';
        localStorage.beltCost = parseInt(localStorage.beltCost) - parseInt(document.getElementById('item_belt_cost3').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
        document.getElementById('item_belt_subject').textContent = subjet;
    }
});
$('#item_belt_item4').click(function () {
    var item_row = document.getElementById('item_belt_item4');
    if (document.getElementById('item_belt_input4').value == 'NULL') {
        item_row.style.backgroundColor = "#fab51a";
        document.getElementById('item_belt_input4').value = 'on';
        localStorage.beltCost = parseInt(localStorage.beltCost) + parseInt(document.getElementById('item_belt_cost4').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
        document.getElementById('item_belt_subject').textContent = document.getElementById('item_belt_list4').value.toString();
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_belt_input4').value = 'NULL';
        localStorage.beltCost = parseInt(localStorage.beltCost) - parseInt(document.getElementById('item_belt_cost4').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
        document.getElementById('item_belt_subject').textContent = subjet;
    }
});
$('#item_belt_item5').click(function () {
    var item_row = document.getElementById('item_belt_item5');
    if (document.getElementById('item_belt_input5').value == 'NULL') {
        item_row.style.backgroundColor = "#fab51a";
        document.getElementById('item_belt_input5').value = 'on';
        localStorage.beltCost = parseInt(localStorage.beltCost) + parseInt(document.getElementById('item_belt_cost5').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
        document.getElementById('item_belt_subject').textContent = document.getElementById('item_belt_list5').value.toString();
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_belt_input5').value = 'NULL';
        localStorage.beltCost = parseInt(localStorage.beltCost) - parseInt(document.getElementById('item_belt_cost5').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
        document.getElementById('item_belt_subject').textContent = subjet;
    }
});
$('#item_belt_item6').click(function () {
    var item_row = document.getElementById('item_belt_item6');
    if (document.getElementById('item_belt_input6').value == 'NULL') {
        item_row.style.backgroundColor = "#fab51a";
        document.getElementById('item_belt_input6').value = 'on';
        localStorage.beltCost = parseInt(localStorage.beltCost) + parseInt(document.getElementById('item_belt_cost6').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
        document.getElementById('item_belt_subject').textContent = document.getElementById('item_belt_list6').value.toString();
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_belt_input6').value = 'NULL';
        localStorage.beltCost = parseInt(localStorage.beltCost) - parseInt(document.getElementById('item_belt_cost6').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
        document.getElementById('item_belt_subject').textContent = subjet;
    }
});
$('#item_belt_item7').click(function () {
    var item_row = document.getElementById('item_belt_item7');
    if (document.getElementById('item_belt_input7').value == 'NULL') {
        item_row.style.backgroundColor = "#fab51a";
        document.getElementById('item_belt_input7').value = 'on';
        localStorage.beltCost = parseInt(localStorage.beltCost) + parseInt(document.getElementById('item_belt_cost7').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
        document.getElementById('item_belt_subject').textContent = document.getElementById('item_belt_list7').value.toString();
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_belt_input7').value = 'NULL';
        localStorage.beltCost = parseInt(localStorage.beltCost) - parseInt(document.getElementById('item_belt_cost7').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
        document.getElementById('item_belt_subject').textContent = subjet;
    }
});
$('#item_belt_item8').click(function () {
    var item_row = document.getElementById('item_belt_item8');
    if (document.getElementById('item_belt_input8').value == 'NULL') {
        item_row.style.backgroundColor = "#fab51a";
        document.getElementById('item_belt_input8').value = 'on';
        localStorage.beltCost = parseInt(localStorage.beltCost) + parseInt(document.getElementById('item_belt_cost8').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
        document.getElementById('item_belt_subject').textContent = document.getElementById('item_belt_list8').value.toString();
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_belt_input8').value = 'NULL';
        localStorage.beltCost = parseInt(localStorage.beltCost) - parseInt(document.getElementById('item_belt_cost8').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
        document.getElementById('item_belt_subject').textContent = subjet;
    }
});
