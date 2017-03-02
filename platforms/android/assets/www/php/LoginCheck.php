<?php
    include("dbConnect.php");
    $id= $_POST['login_id'];
    $pw= $_POST['login_pw'];
    mysqli_query($link,"set names utf8");

    //$sql = "SELECT * FROM bk_customer WHERE _id='$id'AND _pw='$pw';";
    //$sql = mysqli_query($link,$sql);
    //$sql = mysqli_num_rows($sql);


            $sql = "SELECT * FROM bk_customer WHERE _id='$id'AND _pw='$pw';";
            $sql = mysqli_query($link,$sql);
            $sql = mysqli_num_rows($sql);
            if($sql){
                    echo("<script>location.replace('http://192.168.0.16:3000/main.html');</script>");
                    echo "성공2";
            } else{

            }

?>