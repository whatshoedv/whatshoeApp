<?php
    include("dbConnect.php");
    $id= $_POST['id'];
    $time = $_POST['time'];
    $code= $_POST['code'];
    $addr = $_POST['addr'];
    $phone = $_POST['phone'];
    $text = $_POST['text'];
    $with = $_POST['with'];
    $admin = $_POST['admin'];

        $sql = "INSERT INTO whatshoe_order (id, order_time, order_code, order_address, order_state, order_phone, order_Text, order_with, _whatshoeman) VALUES ('$id','$time','$code','$addr', 0, '$phone','$text', '$with', '$admin');";
        if(mysqli_query($link,$sql)){
            echo "1";
        } else{
            echo "2";
        }
       mysqli_close($link);

?>