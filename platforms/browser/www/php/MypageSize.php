<?php
    include("dbConnect.php");
    $id= $_POST['login_id'];
    $size = $_POST['foot_size'];

        $sql = "UPDATE bk_customer SET _foot_size = '$size' WHERE _id='$id'";

        if(mysqli_query($link,$sql)){
            mysqli_close($link);
            echo "1";
        } else{
            echo "2";
        }
?>