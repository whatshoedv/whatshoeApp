<?php
    include("dbConnect.php");
    $id= $_POST['join_id'];
    $name = $_POST['join_name'];
    $pw= $_POST['join_pw'];
    $gender = $_POST['join_gender'];
    $birth = $_POST['join_birth'];
    $mail = $_POST['join_mail'];

    $sql_id = "SELECT _id FROM bk_customer WHERE _id='".$id."';";
    $sql_mail = "SELECT _mail FROM bk_customer WHERE _mail='".$mail."';";

    $result_id = mysqli_query($link,$sql_id);
    $result_mail = mysqli_query($link,$sql_mail);

    $count_id = mysqli_num_rows($result_id);
    $count_mail = mysqli_num_rows($result_mail);

    if($count_id == 1 || $count_mail == 1 )
    {
        echo "2";
    } else {
        $sql = "INSERT INTO bk_customer (_id,_name,_pw,_gender,_birth,_mail,_join_type) VALUES ('$id','$name','$pw','$gender','$birth','$mail','original');";
        mysqli_query($link,$sql);
        mysqli_close($link);
        echo "1";
        //echo("<script>location.replace('/');</script>");
    }
?>