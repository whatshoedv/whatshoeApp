/**
 * Created by byeongkwan on 2017-02-09.
 */
localStorage.womanCost = 0; //각 항목별 비용 총 합계 로컬

// 각 항목별로 클릭시 가격 쌓임, 체크박스의 NULL, on 값으로 항목 선택 구별 가능
var subjet = "서비스를 선택하면 간단한 설명을 보여드립니다.";
$('#item_woman_item1').click(function () {
    var item_row = document.getElementById('item_woman_item1');
    if (document.getElementById('item_woman_input1').value == 'NULL') {
        item_row.style.backgroundColor = "#fab51a";
        document.getElementById('item_woman_input1').value = 'on';
        document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
        document.getElementById('item_woman_subject').textContent = document.getElementById('item_woman_list1').value.toString();
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_woman_input1').value = 'NULL';
        document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
        document.getElementById('item_woman_subject').textContent = subjet;
    }
});
$('#item_woman_item2').click(function () {
    var item_row = document.getElementById('item_woman_item2');
    if (document.getElementById('item_woman_input2').value == 'NULL') {
        item_row.style.backgroundColor = "#fab51a";
        document.getElementById('item_woman_input2').value = 'on';
        localStorage.womanCost = parseInt(localStorage.womanCost) + parseInt(document.getElementById('item_woman_cost2').value);
        document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
        document.getElementById('item_woman_subject').textContent = document.getElementById('item_woman_list2').value.toString();
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_woman_input2').value = 'NULL';
        localStorage.womanCost = parseInt(localStorage.womanCost) - parseInt(document.getElementById('item_woman_cost2').value);
        document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
        document.getElementById('item_woman_subject').textContent = subjet;
    }
});
$('#item_woman_item3').click(function () {
    var item_row = document.getElementById('item_woman_item3');
    if (document.getElementById('item_woman_input3').value == 'NULL') {
        item_row.style.backgroundColor = "#fab51a";
        document.getElementById('item_woman_input3').value = 'on';
        localStorage.womanCost = parseInt(localStorage.womanCost) + parseInt(document.getElementById('item_woman_cost3').value);
        document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
        document.getElementById('item_woman_subject').textContent = document.getElementById('item_woman_list3').value.toString();
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_woman_input3').value = 'NULL';
        localStorage.womanCost = parseInt(localStorage.womanCost) - parseInt(document.getElementById('item_woman_cost3').value);
        document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
        document.getElementById('item_woman_subject').textContent = subjet;
    }
});
$('#item_woman_item4').click(function () {
    var item_row = document.getElementById('item_woman_item4');
    if (document.getElementById('item_woman_input4').value == 'NULL') {
        item_row.style.backgroundColor = "#fab51a";
        document.getElementById('item_woman_input4').value = 'on';
        localStorage.womanCost = parseInt(localStorage.womanCost) + parseInt(document.getElementById('item_woman_cost4').value);
        document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
        document.getElementById('item_woman_subject').textContent = document.getElementById('item_woman_list4').value.toString();
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_woman_input4').value = 'NULL';
        localStorage.womanCost = parseInt(localStorage.womanCost) - parseInt(document.getElementById('item_woman_cost4').value);
        document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
        document.getElementById('item_woman_subject').textContent = subjet;
    }
});
$('#item_woman_item5').click(function () {
    var item_row = document.getElementById('item_woman_item5');
    if (document.getElementById('item_woman_input5').value == 'NULL') {
        item_row.style.backgroundColor = "#fab51a";
        document.getElementById('item_woman_input5').value = 'on';
        localStorage.womanCost = parseInt(localStorage.womanCost) + parseInt(document.getElementById('item_woman_cost5').value);
        document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
        document.getElementById('item_woman_subject').textContent = document.getElementById('item_woman_list5').value.toString();
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_woman_input5').value = 'NULL';
        localStorage.womanCost = parseInt(localStorage.womanCost) - parseInt(document.getElementById('item_woman_cost5').value);
        document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
        document.getElementById('item_woman_subject').textContent = subjet;
    }
});
$('#item_woman_item6').click(function () {
    var item_row = document.getElementById('item_woman_item6');
    if (document.getElementById('item_woman_input6').value == 'NULL') {
        item_row.style.backgroundColor = "#fab51a";
        document.getElementById('item_woman_input6').value = 'on';
        localStorage.womanCost = parseInt(localStorage.womanCost) + parseInt(document.getElementById('item_woman_cost6').value);
        document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
        document.getElementById('item_woman_subject').textContent = document.getElementById('item_woman_list6').value.toString();
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_woman_input6').value = 'NULL';
        localStorage.womanCost = parseInt(localStorage.womanCost) - parseInt(document.getElementById('item_woman_cost6').value);
        document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
        document.getElementById('item_woman_subject').textContent = subjet;
    }
});
$('#item_woman_item7').click(function () {
    var item_row = document.getElementById('item_woman_item7');
    if (document.getElementById('item_woman_input7').value == 'NULL') {
        item_row.style.backgroundColor = "#fab51a";
        document.getElementById('item_woman_input7').value = 'on';
        localStorage.womanCost = parseInt(localStorage.womanCost) + parseInt(document.getElementById('item_woman_cost7').value);
        document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
        document.getElementById('item_woman_subject').textContent = document.getElementById('item_woman_list7').value.toString();
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_woman_input7').value = 'NULL';
        localStorage.womanCost = parseInt(localStorage.womanCost) - parseInt(document.getElementById('item_woman_cost6').value);
        document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
        document.getElementById('item_woman_subject').textContent = subjet;
    }
});
$('#item_woman_item8').click(function () {
    var item_row = document.getElementById('item_woman_item8');
    if (document.getElementById('item_woman_input8').value == 'NULL') {
        item_row.style.backgroundColor = "#fab51a";
        document.getElementById('item_woman_input8').value = 'on';
        localStorage.womanCost = parseInt(localStorage.womanCost) + parseInt(document.getElementById('item_woman_cost8').value);
        document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
        document.getElementById('item_woman_subject').textContent = document.getElementById('item_woman_list8').value.toString();
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_woman_input8').value = 'NULL';
        localStorage.womanCost = parseInt(localStorage.womanCost) - parseInt(document.getElementById('item_woman_cost8').value);
        document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
        document.getElementById('item_woman_subject').textContent = subjet;
    }
});
$('#item_woman_item9').click(function () {
    var item_row = document.getElementById('item_woman_item9');
    if (document.getElementById('item_woman_input9').value == 'NULL') {
        item_row.style.backgroundColor = "#fab51a";
        document.getElementById('item_woman_input9').value = 'on';
        localStorage.womanCost = parseInt(localStorage.womanCost) + parseInt(document.getElementById('item_woman_cost9').value);
        document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
        document.getElementById('item_woman_subject').textContent = document.getElementById('item_woman_list9').value.toString();
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_woman_input9').value = 'NULL';
        localStorage.womanCost = parseInt(localStorage.womanCost) - parseInt(document.getElementById('item_woman_cost9').value);
        document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
        document.getElementById('item_woman_subject').textContent = subjet;
    }
});
$('#item_woman_item10').click(function () {
    var item_row = document.getElementById('item_woman_item10');
    if (document.getElementById('item_woman_input10').value == 'NULL') {
        item_row.style.backgroundColor = "#fab51a";
        document.getElementById('item_woman_input10').value = 'on';
        localStorage.womanCost = parseInt(localStorage.womanCost) + parseInt(document.getElementById('item_woman_cost10').value);
        document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
        document.getElementById('item_woman_subject').textContent = document.getElementById('item_woman_list10').value.toString();
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_woman_input10').value = 'NULL';
        localStorage.womanCost = parseInt(localStorage.womanCost) - parseInt(document.getElementById('item_woman_cost10').value);
        document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
        document.getElementById('item_woman_subject').textContent = subjet;
    }
});
$('#item_woman_item11').click(function () {
    var item_row = document.getElementById('item_woman_item11');
    if (document.getElementById('item_woman_input11').value == 'NULL') {
        item_row.style.backgroundColor = "#fab51a";
        document.getElementById('item_woman_input11').value = 'on';
        localStorage.womanCost = parseInt(localStorage.womanCost) + parseInt(document.getElementById('item_woman_cost11').value);
        document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
        document.getElementById('item_woman_subject').textContent = document.getElementById('item_woman_list11').value.toString();
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_woman_input11').value = 'NULL';
        localStorage.womanCost = parseInt(localStorage.womanCost) - parseInt(document.getElementById('item_woman_cost11').value);
        document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
        document.getElementById('item_woman_subject').textContent = subjet;
    }
});
$('#item_woman_item12').click(function () {
    var item_row = document.getElementById('item_woman_item12');
    if (document.getElementById('item_woman_input12').value == 'NULL') {
        item_row.style.backgroundColor = "#fab51a";
        document.getElementById('item_woman_input12').value = 'on';
        localStorage.womanCost = parseInt(localStorage.womanCost) + parseInt(document.getElementById('item_woman_cost12').value);
        document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
        document.getElementById('item_woman_subject').textContent = document.getElementById('item_woman_list12').value.toString();
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_woman_input12').value = 'NULL';
        localStorage.womanCost = parseInt(localStorage.womanCost) - parseInt(document.getElementById('item_woman_cost12').value);
        document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
        document.getElementById('item_woman_subject').textContent = subjet;
    }
});
$('#item_woman_item13').click(function () {
    var item_row = document.getElementById('item_woman_item13');
    if (document.getElementById('item_woman_input13').value == 'NULL') {
        item_row.style.backgroundColor = "#fab51a";
        document.getElementById('item_woman_input13').value = 'on';
        localStorage.womanCost = parseInt(localStorage.womanCost) + parseInt(document.getElementById('item_woman_cost13').value);
        document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
        document.getElementById('item_woman_subject').textContent = document.getElementById('item_woman_list13').value.toString();
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_woman_input13').value = 'NULL';
        localStorage.womanCost = parseInt(localStorage.womanCost) - parseInt(document.getElementById('item_woman_cost13').value);
        document.getElementById('item_woman_cost').textContent = localStorage.womanCost+"원";
        document.getElementById('item_woman_subject').textContent = subjet;
    }
});


