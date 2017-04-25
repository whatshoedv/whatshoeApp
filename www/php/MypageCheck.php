<?php
    include("dbConnect.php");
    $id= $_POST['mypage_id'];
    $name = $_POST['mypage_name'];
    $pw= $_POST['mypage_pw'];
    $birth = $_POST['mypage_birth'];
    $mail = $_POST['mypage_mail'];
    $gender = $_POST['mypage_gender'];
    $phone = $_POST['mypage_phone'];


    $sql_id = "SELECT * FROM whatshoe_member WHERE id='".$id."';";

    $result_id = mysqli_query($link,$sql_id);

    $count_id = mysqli_num_rows($result_id);

    if($pw == "no") {
        $sql = "UPDATE whatshoe_member SET name = '$name',sex = '$gender',birth = '$birth',mail = '$mail',phone = '$phone' WHERE id='$id'";

        if(mysqli_query($link,$sql)){
            mysqli_close($link);
            echo "1";
        } else{
            echo "비번없다";
        }
    } else {
        $sql = "UPDATE whatshoe_member SET name = '$name',pass = '$pw', sex = '$gender',birth = '$birth',mail = '$mail',phone = '$phone' WHERE id='$id'";

            if(mysqli_query($link,$sql)){
                mysqli_close($link);
                echo "1";
            } else{
                echo "비번있다";
            }
    }
?>