<?php
    include("dbConnect.php");
    $id= $_POST['login_id'];
    $size = $_POST['foot_size'];

        $sql = "UPDATE whatshoe_member SET foot_size = '$size' WHERE id='$id'";

        if(mysqli_query($link,$sql)){
            mysqli_close($link);
            echo "1";
        } else{
            echo "2";
        }
?>