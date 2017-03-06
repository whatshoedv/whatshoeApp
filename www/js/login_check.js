/**
 * Created by byeongkwan on 2017-02-09.
 */
$('#login_btn').click(function () {

   var login_id = document.getElementById('login_id').value;
   var login_pw = document.getElementById('login_pw').value;

   if(!valid_Idcheck(login_id)){

   } else if(!valid_PwCheck(login_pw,login_pw)){

   } else {
       //document.getElementById('login_form').submit();
      $.post("http://whatshoe.co.kr/bk/www/php/LoginCheck.php",
          {
             login_id : login_id,
              login_pw : login_pw
          },
      function (data, status) {
          if(data === "1"){
             alert(data + "성공!");
             localStorage.LoginId = login_id;
             location.href="main.html";
          } else {
             alert(data + "실패!");
          }
      });
   }
});