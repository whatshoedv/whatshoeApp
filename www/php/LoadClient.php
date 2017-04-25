<?php
	header("Content-Type:text/html;charset=utf-8");
	header("Content-Type:application/json");
    include("dbConnect.php");
    $id= $_POST['login_id'];
    mysqli_query($link,"set names utf8");


            $sql = "SELECT * FROM whatshoe_member WHERE id='$id';";
            $result = $sql = mysqli_query($link,$sql);
            $sql = mysqli_num_rows($sql);
            if($sql){
                    $obj = array();
                    while($row = mysqli_fetch_object($result)){
                        $res = new stdClass();
                        $res->index = $row->_index;
                        $res->id = $row->id;
                        $res->name = $row->name;
                        $res->gender = $row->sex;
                        $res->birth = $row->birth;
                        $res->email = $row->mail;
                        $res->phone = $row->phone;
                        $res->foot_size = $row->foot_size;
                        $res->point = $row->point;
                        $res->permit = $row->permit;
                        $res->retention = $row->retention;
                        $obj[] = $res;
                        unset($res);
                    }
                    echo json_encode($obj);
            } else{
                    echo "2";
            }

?>