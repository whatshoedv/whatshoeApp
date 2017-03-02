<?php
    $link = mysqli_connect("db.whatshoe.co.kr","whatshoe","dhkttb1234","dbwhatshoe");
    mysqli_query($link,"set names utf8");
     if($link){
                echo "성공";
        }else{
                 echo "실패";
             }

?>