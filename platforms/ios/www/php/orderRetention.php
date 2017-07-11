<?php
    include("dbConnect.php");
    $id= $_POST['id'];
    $retention = $_POST['retention'];

        $sql = "UPDATE whatshoe_member SET retention = '$retention' WHERE id='$id'";

        if(mysqli_query($link,$sql)){
            mysqli_close($link);
            echo "1";
        } else{
            echo "2";
        }
?>