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
          if(data != "2"){
              $.each(data, function (key, val) {
                  localStorage.client_id = val.id;
                  localStorage.client_name = val.name;
                  localStorage.client_gender = val.gender;
                  localStorage.client_birth = val.birth;
                  localStorage.client_email = val.email;
                  localStorage.client_phone = val.phone;
              });
              location.href="main.html";
          } else {
              alert(data);
             alert("아이디 혹은 비밀번호가 틀렸습니다.");
          }
      });
   }
});
