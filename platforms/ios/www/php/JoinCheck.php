<?php
    include("dbConnect.php");
    $id= $_POST['join_id'];
    $name = $_POST['join_name'];
    $pw= $_POST['join_pw'];
    $gender = $_POST['join_gender'];
    $birth = $_POST['join_birth'];
    $mail = $_POST['join_mail'];

    $sql_id = "SELECT id FROM whatshoe_member WHERE id='".$id."';";
    $sql_mail = "SELECT mail FROM whatshoe_member WHERE mail='".$mail."';";

    $result_id = mysqli_query($link,$sql_id);
    $result_mail = mysqli_query($link,$sql_mail);

    $count_id = mysqli_num_rows($result_id);
    $count_mail = mysqli_num_rows($result_mail);

    if($count_id == 1 || $count_mail == 1 )
    {
        echo "2";
    } else {
        $sql = "INSERT INTO whatshoe_member (id,name,pass,sex,birth,mail,permit) VALUES ('$id','$name','$pw','$gender','$birth','$mail',1);";
        mysqli_query($link,$sql);
        mysqli_close($link);
        echo "1";
        //echo("<script>location.replace('/');</script>");
    }
?>