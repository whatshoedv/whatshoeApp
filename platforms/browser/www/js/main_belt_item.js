localStorage.beltCost = 0;
$('#item_belt_item1').click(function () {
    var item_row = document.getElementById('item_belt_item1');
    if (document.getElementById('item_belt_input1').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_belt_input1').value = 'on';
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_belt_input1').value = 'NULL';
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
    }
});
$('#item_belt_item2').click(function () {
    var item_row = document.getElementById('item_belt_item2');
    if (document.getElementById('item_belt_input2').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_belt_input2').value = 'on';
        localStorage.beltCost = parseInt(localStorage.beltCost) + parseInt(document.getElementById('item_belt_cost2').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_belt_input2').value = 'NULL';
        localStorage.beltCost = parseInt(localStorage.beltCost) - parseInt(document.getElementById('item_belt_cost2').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";

    }
});
$('#item_belt_item3').click(function () {
    var item_row = document.getElementById('item_belt_item3');
    if (document.getElementById('item_belt_input3').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_belt_input3').value = 'on';
        localStorage.beltCost = parseInt(localStorage.beltCost) + parseInt(document.getElementById('item_belt_cost3').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_belt_input3').value = 'NULL';
        localStorage.beltCost = parseInt(localStorage.beltCost) - parseInt(document.getElementById('item_belt_cost3').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
    }
});
$('#item_belt_item4').click(function () {
    var item_row = document.getElementById('item_belt_item4');
    if (document.getElementById('item_belt_input4').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_belt_input4').value = 'on';
        localStorage.beltCost = parseInt(localStorage.beltCost) + parseInt(document.getElementById('item_belt_cost4').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_belt_input4').value = 'NULL';
        localStorage.beltCost = parseInt(localStorage.beltCost) - parseInt(document.getElementById('item_belt_cost4').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
    }
});
$('#item_belt_item5').click(function () {
    var item_row = document.getElementById('item_belt_item5');
    if (document.getElementById('item_belt_input5').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_belt_input5').value = 'on';
        localStorage.beltCost = parseInt(localStorage.beltCost) + parseInt(document.getElementById('item_belt_cost5').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_belt_input5').value = 'NULL';
        localStorage.beltCost = parseInt(localStorage.beltCost) - parseInt(document.getElementById('item_belt_cost5').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
    }
});
$('#item_belt_item6').click(function () {
    var item_row = document.getElementById('item_belt_item6');
    if (document.getElementById('item_belt_input6').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_belt_input6').value = 'on';
        localStorage.beltCost = parseInt(localStorage.beltCost) + parseInt(document.getElementById('item_belt_cost6').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_belt_input6').value = 'NULL';
        localStorage.beltCost = parseInt(localStorage.beltCost) - parseInt(document.getElementById('item_belt_cost6').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
    }
});
$('#item_belt_item7').click(function () {
    var item_row = document.getElementById('item_belt_item7');
    if (document.getElementById('item_belt_input7').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_belt_input7').value = 'on';
        localStorage.beltCost = parseInt(localStorage.beltCost) + parseInt(document.getElementById('item_belt_cost7').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_belt_input7').value = 'NULL';
        localStorage.beltCost = parseInt(localStorage.beltCost) - parseInt(document.getElementById('item_belt_cost7').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
    }
});
$('#item_belt_item8').click(function () {
    var item_row = document.getElementById('item_belt_item8');
    if (document.getElementById('item_belt_input8').value == 'NULL') {
        item_row.style.backgroundColor = "#f5f5f5";
        document.getElementById('item_belt_input8').value = 'on';
        localStorage.beltCost = parseInt(localStorage.beltCost) + parseInt(document.getElementById('item_belt_cost8').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
    } else {
        item_row.style.backgroundColor = "#ffffff";
        document.getElementById('item_belt_input8').value = 'NULL';
        localStorage.beltCost = parseInt(localStorage.beltCost) - parseInt(document.getElementById('item_belt_cost8').value);
        document.getElementById('item_belt_cost').textContent = localStorage.beltCost+"원";
    }
});
