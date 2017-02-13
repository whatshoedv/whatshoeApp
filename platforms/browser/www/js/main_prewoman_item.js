/**
 * Created by byeongkwan on 2017-02-10.
 */
/**
 * Created by byeongkwan on 2017-02-09.
 */
localStorage.prewomanCost = 0;
$('#item_prewoman_item1').click(function () {
    var item_row = document.getElementById('item_prewoman_item1');
    if (document.getElementById('item_prewoman_input1').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_prewoman_input1').value = 'on';
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_prewoman_input1').value = 'NULL';
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    }
});
$('#item_prewoman_item2').click(function () {
    var item_row = document.getElementById('item_prewoman_item2');
    if (document.getElementById('item_prewoman_input2').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_prewoman_input2').value = 'on';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) + parseInt(document.getElementById('item_prewoman_cost2').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_prewoman_input2').value = 'NULL';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost2').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    }
});
$('#item_prewoman_item3').click(function () {
    var item_row = document.getElementById('item_prewoman_item3');
    if (document.getElementById('item_prewoman_input3').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_prewoman_input3').value = 'on';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) + parseInt(document.getElementById('item_prewoman_cost3').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_prewoman_input3').value = 'NULL';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost3').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    }
});
$('#item_prewoman_item4').click(function () {
    var item_row = document.getElementById('item_prewoman_item4');
    if (document.getElementById('item_prewoman_input4').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_prewoman_input4').value = 'on';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) + parseInt(document.getElementById('item_prewoman_cost4').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_prewoman_input4').value = 'NULL';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost4').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    }
});
$('#item_prewoman_item5').click(function () {
    var item_row = document.getElementById('item_prewoman_item5');
    if (document.getElementById('item_prewoman_input5').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_prewoman_input5').value = 'on';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) + parseInt(document.getElementById('item_prewoman_cost5').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_prewoman_input5').value = 'NULL';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost5').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    }
});
$('#item_prewoman_item6').click(function () {
    var item_row = document.getElementById('item_prewoman_item6');
    if (document.getElementById('item_prewoman_input6').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_prewoman_input6').value = 'on';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) + parseInt(document.getElementById('item_prewoman_cost6').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_prewoman_input6').value = 'NULL';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost6').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    }
});
$('#item_prewoman_item7').click(function () {
    var item_row = document.getElementById('item_prewoman_item7');
    if (document.getElementById('item_prewoman_input7').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_prewoman_input7').value = 'on';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) + parseInt(document.getElementById('item_prewoman_cost7').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_prewoman_input7').value = 'NULL';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost7').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    }
});
$('#item_prewoman_item8').click(function () {
    var item_row = document.getElementById('item_prewoman_item8');
    if (document.getElementById('item_prewoman_input8').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_prewoman_input8').value = 'on';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) + parseInt(document.getElementById('item_prewoman_cost8').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_prewoman_input8').value = 'NULL';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost8').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    }
});
$('#item_prewoman_item9').click(function () {
    var item_row = document.getElementById('item_prewoman_item9');
    if (document.getElementById('item_prewoman_input9').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_prewoman_input9').value = 'on';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) + parseInt(document.getElementById('item_prewoman_cost9').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_prewoman_input9').value = 'NULL';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost9').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    }
});
$('#item_prewoman_item10').click(function () {
    var item_row = document.getElementById('item_prewoman_item10');
    if (document.getElementById('item_prewoman_input10').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_prewoman_input10').value = 'on';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) + parseInt(document.getElementById('item_prewoman_cost10').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_prewoman_input10').value = 'NULL';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost10').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    }
});
$('#item_prewoman_item11').click(function () {
    var item_row = document.getElementById('item_prewoman_item11');
    if (document.getElementById('item_prewoman_input11').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_prewoman_input11').value = 'on';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) + parseInt(document.getElementById('item_prewoman_cost11').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_prewoman_input11').value = 'NULL';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost11').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    }
});
$('#item_prewoman_item12').click(function () {
    var item_row = document.getElementById('item_prewoman_item12');
    if (document.getElementById('item_prewoman_input12').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_prewoman_input12').value = 'on';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) + parseInt(document.getElementById('item_prewoman_cost12').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_prewoman_input12').value = 'NULL';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost12').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    }
});
$('#item_prewoman_item13').click(function () {
    var item_row = document.getElementById('item_prewoman_item13');
    if (document.getElementById('item_prewoman_input13').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_prewoman_input13').value = 'on';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) + parseInt(document.getElementById('item_prewoman_cost13').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_prewoman_input13').value = 'NULL';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost13').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    }
});
$('#item_prewoman_item14').click(function () {
    var item_row = document.getElementById('item_prewoman_item14');
    if (document.getElementById('item_prewoman_input14').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_prewoman_input14').value = 'on';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) + parseInt(document.getElementById('item_prewoman_cost14').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_prewoman_input14').value = 'NULL';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost14').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    }
});
$('#item_prewoman_item15').click(function () {
    var item_row = document.getElementById('item_prewoman_item15');
    if (document.getElementById('item_prewoman_input15').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_prewoman_input15').value = 'on';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) + parseInt(document.getElementById('item_prewoman_cost15').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_prewoman_input15').value = 'NULL';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost15').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    }
});
$('#item_prewoman_item16').click(function () {
    var item_row = document.getElementById('item_prewoman_item16');
    if (document.getElementById('item_prewoman_input16').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_prewoman_input16').value = 'on';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost16').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_prewoman_input16').value = 'NULL';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost16').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";

    }
});
$('#item_prewoman_item17').click(function () {
    var item_row = document.getElementById('item_prewoman_item17');
    if (document.getElementById('item_prewoman_input17').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_prewoman_input17').value = 'on';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost17').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_prewoman_input17').value = 'NULL';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost17').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    }
});
$('#item_prewoman_item18').click(function () {
    var item_row = document.getElementById('item_prewoman_item18');
    if (document.getElementById('item_prewoman_input18').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_prewoman_input18').value = 'on';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost18').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_prewoman_input18').value = 'NULL';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost18').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    }
});
$('#item_prewoman_item19').click(function () {
    var item_row = document.getElementById('item_prewoman_item19');
    if (document.getElementById('item_prewoman_input19').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_prewoman_input19').value = 'on';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost19').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_prewoman_input19').value = 'NULL';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost19').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    }
});
$('#item_prewoman_item20').click(function () {
    var item_row = document.getElementById('item_prewoman_item20');
    if (document.getElementById('item_prewoman_input20').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_prewoman_input20').value = 'on';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost20').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_prewoman_input20').value = 'NULL';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost20').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    }
});
$('#item_prewoman_item21').click(function () {
    var item_row = document.getElementById('item_prewoman_item21');
    if (document.getElementById('item_prewoman_input21').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_prewoman_input21').value = 'on';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) + parseInt(document.getElementById('item_prewoman_cost21').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_prewoman_input21').value = 'NULL';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost21').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    }
});
$('#item_prewoman_item22').click(function () {
    var item_row = document.getElementById('item_prewoman_item22');
    if (document.getElementById('item_prewoman_input22').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_prewoman_input22').value = 'on';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) + parseInt(document.getElementById('item_prewoman_cost22').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_prewoman_input22').value = 'NULL';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost22').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    }
});
$('#item_prewoman_item23').click(function () {
    var item_row = document.getElementById('item_prewoman_item23');
    if (document.getElementById('item_prewoman_input23').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_prewoman_input23').value = 'on';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) + parseInt(document.getElementById('item_prewoman_cost23').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_prewoman_input23').value = 'NULL';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost23').value);
        document.getElementById('item_prewoman_cost23').textContent = localStorage.prewomanCost+"원";
    }
});
$('#item_prewoman_item24').click(function () {
    var item_row = document.getElementById('item_prewoman_item24');
    if (document.getElementById('item_prewoman_input24').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_prewoman_input24').value = 'on';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) + parseInt(document.getElementById('item_prewoman_cost24').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_prewoman_input24').value = 'NULL';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost24').value);
        document.getElementById('item_prewoman_cost24').textContent = localStorage.prewomanCost+"원";
    }
});
$('#item_prewoman_item25').click(function () {
    var item_row = document.getElementById('item_prewoman_item25');
    if (document.getElementById('item_prewoman_input25').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_prewoman_input25').value = 'on';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) + parseInt(document.getElementById('item_prewoman_cost25').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_prewoman_input25').value = 'NULL';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost25').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    }
});
$('#item_prewoman_item26').click(function () {
    var item_row = document.getElementById('item_prewoman_item26');
    if (document.getElementById('item_prewoman_input26').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_prewoman_input26').value = 'on';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) + parseInt(document.getElementById('item_prewoman_cost26').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_prewoman_input26').value = 'NULL';
        localStorage.prewomanCost = parseInt(localStorage.prewomanCost) - parseInt(document.getElementById('item_prewoman_cost26').value);
        document.getElementById('item_prewoman_cost').textContent = localStorage.prewomanCost+"원";
    }
});


