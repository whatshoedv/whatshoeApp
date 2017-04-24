<?php
	header("Content-Type:text/html;charset=utf-8");
	header("Content-Type:application/json");
    include("dbConnect.php");
    $id= $_POST['login_id'];
    $pw= $_POST['login_pw'];
    mysqli_query($link,"set names utf8");

    //$sql = "SELECT * FROM bk_customer WHERE _id='$id'AND _pw='$pw';";
    //$sql = mysqli_query($link,$sql);
    //$sql = mysqli_num_rows($sql);


            $sql = "SELECT * FROM bk_customer WHERE _id='$id'AND _pw='$pw';";
            $result = $sql = mysqli_query($link,$sql);
            $sql = mysqli_num_rows($sql);
            if($sql){
                    $obj = array();
                    while($row = mysqli_fetch_object($result)){
                        $res = new stdClass();
                        $res->id = $row->_id;
                        $res->name = $row->_name;
                        $res->gender = $row->_gender;
                        $res->birth = $row->_birth;
                        $res->email = $row->_mail;
                        $res->phone = $row->_phone;
                        $obj[] = $res;
                        unset($res);
                    }
                    echo json_encode($obj);
            } else{
                    echo "2";
            }

?>