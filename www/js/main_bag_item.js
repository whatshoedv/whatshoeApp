/**
 * Created by byeongkwan on 2017-02-10.
 */
localStorage.bagCost = 0;
$('#item_bag_item1').click(function () {
    var item_row = document.getElementById('item_bag_item1');
    if (document.getElementById('item_bag_input1').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_bag_input1').value = 'on';
        document.getElementById('item_bag_cost').textContent = localStorage.bagCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_bag_input1').value = 'NULL';
        document.getElementById('item_bag_cost').textContent = localStorage.bagCost+"원";
    }
});
$('#item_bag_item2').click(function () {
    var item_row = document.getElementById('item_bag_item2');
    if (document.getElementById('item_bag_input2').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_bag_input2').value = 'on';
        localStorage.bagCost = parseInt(localStorage.bagCost) + parseInt(document.getElementById('item_bag_cost2').value);
        document.getElementById('item_bag_cost').textContent = localStorage.bagCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_bag_input2').value = 'NULL';
        localStorage.bagCost = parseInt(localStorage.bagCost) - parseInt(document.getElementById('item_bag_cost2').value);
        document.getElementById('item_bag_cost').textContent = localStorage.bagCost+"원";
    }
});
$('#item_bag_item3').click(function () {
    var item_row = document.getElementById('item_bag_item3');
    if (document.getElementById('item_bag_input3').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_bag_input3').value = 'on';
        localStorage.bagCost = parseInt(localStorage.bagCost) + parseInt(document.getElementById('item_bag_cost3').value);
        document.getElementById('item_bag_cost').textContent = localStorage.bagCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_bag_input3').value = 'NULL';
        localStorage.bagCost = parseInt(localStorage.bagCost) - parseInt(document.getElementById('item_bag_cost3').value);
        document.getElementById('item_bag_cost').textContent = localStorage.bagCost+"원";
    }
});
$('#item_bag_item4').click(function () {
    var item_row = document.getElementById('item_bag_item4');
    if (document.getElementById('item_bag_input4').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_bag_input4').value = 'on';
        localStorage.bagCost = parseInt(localStorage.bagCost) + parseInt(document.getElementById('item_bag_cost4').value);
        document.getElementById('item_bag_cost').textContent = localStorage.bagCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_bag_input4').value = 'NULL';
        localStorage.bagCost = parseInt(localStorage.bagCost) - parseInt(document.getElementById('item_bag_cost4').value);
        document.getElementById('item_bag_cost').textContent = localStorage.bagCost+"원";
    }
});
$('#item_bag_item5').click(function () {
    var item_row = document.getElementById('item_bag_item5');
    if (document.getElementById('item_bag_input5').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_bag_input5').value = 'on';
        localStorage.bagCost = parseInt(localStorage.bagCost) + parseInt(document.getElementById('item_bag_cost5').value);
        document.getElementById('item_bag_cost').textContent = localStorage.bagCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_bag_input5').value = 'NULL';
        localStorage.bagCost = parseInt(localStorage.bagCost) - parseInt(document.getElementById('item_bag_cost5').value);
        document.getElementById('item_bag_cost').textContent = localStorage.bagCost+"원";
    }
});
$('#item_bag_item6').click(function () {
    var item_row = document.getElementById('item_bag_item6');
    if (document.getElementById('item_bag_input6').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_bag_input6').value = 'on';
        localStorage.bagCost = parseInt(localStorage.bagCost) + parseInt(document.getElementById('item_bag_cost6').value);
        document.getElementById('item_bag_cost').textContent = localStorage.bagCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_bag_input6').value = 'NULL';
        localStorage.bagCost = parseInt(localStorage.bagCost) - parseInt(document.getElementById('item_bag_cost6').value);
        document.getElementById('item_bag_cost').textContent = localStorage.bagCost+"원";
    }
});
$('#item_bag_item7').click(function () {
    var item_row = document.getElementById('item_bag_item7');
    if (document.getElementById('item_bag_input7').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_bag_input7').value = 'on';
        localStorage.bagCost = parseInt(localStorage.bagCost) + parseInt(document.getElementById('item_bag_cost7').value);
        document.getElementById('item_bag_cost').textContent = localStorage.bagCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_bag_input7').value = 'NULL';
        localStorage.bagCost = parseInt(localStorage.bagCost) - parseInt(document.getElementById('item_bag_cost7').value);
        document.getElementById('item_bag_cost').textContent = localStorage.bagCost+"원";
    }
});
$('#item_bag_item8').click(function () {
    var item_row = document.getElementById('item_bag_item8');
    if (document.getElementById('item_bag_input8').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_bag_input8').value = 'on';
        localStorage.bagCost = parseInt(localStorage.bagCost) + parseInt(document.getElementById('item_bag_cost8').value);
        document.getElementById('item_bag_cost').textContent = localStorage.bagCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_bag_input8').value = 'NULL';
        localStorage.bagCost = parseInt(localStorage.bagCost) - parseInt(document.getElementById('item_bag_cost8').value);
        document.getElementById('item_bag_cost').textContent = localStorage.bagCost+"원";
    }
});
$('#item_bag_item9').click(function () {
    var item_row = document.getElementById('item_bag_item9');
    if (document.getElementById('item_bag_input9').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_bag_input9').value = 'on';
        localStorage.bagCost = parseInt(localStorage.bagCost) + parseInt(document.getElementById('item_bag_cost9').value);
        document.getElementById('item_bag_cost').textContent = localStorage.bagCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_bag_input9').value = 'NULL';
        localStorage.bagCost = parseInt(localStorage.bagCost) - parseInt(document.getElementById('item_bag_cost9').value);
        document.getElementById('item_bag_cost').textContent = localStorage.bagCost+"원";
    }
});
$('#item_bag_item10').click(function () {
    var item_row = document.getElementById('item_bag_item10');
    if (document.getElementById('item_bag_input10').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_bag_input10').value = 'on';
        localStorage.bagCost = parseInt(localStorage.bagCost) + parseInt(document.getElementById('item_bag_cost10').value);
        document.getElementById('item_bag_cost').textContent = localStorage.bagCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_bag_input10').value = 'NULL';
        localStorage.bagCost = parseInt(localStorage.bagCost) - parseInt(document.getElementById('item_bag_cost10').value);
        document.getElementById('item_bag_cost').textContent = localStorage.bagCost+"원";
    }
});
$('#item_bag_item11').click(function () {
    var item_row = document.getElementById('item_bag_item11');
    if (document.getElementById('item_bag_input11').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_bag_input11').value = 'on';
        localStorage.bagCost = parseInt(localStorage.bagCost) + parseInt(document.getElementById('item_bag_cost11').value);
        document.getElementById('item_bag_cost').textContent = localStorage.bagCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_bag_input11').value = 'NULL';
        localStorage.bagCost = parseInt(localStorage.bagCost) - parseInt(document.getElementById('item_bag_cost11').value);
        document.getElementById('item_bag_cost').textContent = localStorage.bagCost+"원";
    }
});
$('#item_bag_item12').click(function () {
    var item_row = document.getElementById('item_bag_item12');
    if (document.getElementById('item_bag_input12').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_bag_input12').value = 'on';
        localStorage.bagCost = parseInt(localStorage.bagCost) + parseInt(document.getElementById('item_bag_cost12').value);
        document.getElementById('item_bag_cost').textContent = localStorage.bagCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_bag_input12').value = 'NULL';
        localStorage.bagCost = parseInt(localStorage.bagCost) - parseInt(document.getElementById('item_bag_cost12').value);
        document.getElementById('item_bag_cost').textContent = localStorage.bagCost+"원";
    }
});
