/**
 * Created by byeongkwan on 2017-02-09.
 */
$('#login_btn').click(function () {
   var login_id = document.getElementById('login_id').value;
   var login_pw = document.getElementById('login_pw').value;

   if(!valid_Idcheck(login_id)){

   } else if(!valid_PwCheck(login_pw,login_pw)){

   } else {
      location.href = "main.html";
   }
});