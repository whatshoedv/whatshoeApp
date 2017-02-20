/**
 * Created by byeongkwan on 2017-02-16.
 */
//백버튼
$('#mypage_head_back').click(function () {
   location.href="main.html";
});

//발사이즈 등록
$('#mypage_sizeRegister').click(function () {

});

//유효성 체크 후 저장
$('#mypage_save').click(function () {
    var Id = document.getElementById('mypage_myId_input').value;
    var Name = document.getElementById('mypage_myName_input').value;
    var Pw = document.getElementById('mypage_pw_input').value;
    var Birth = document.getElementById('mypage_birth_input').value;
    var Email = document.getElementById('mypage_mail_input').value;
    var Gender = document.getElementsByName('mypage_gender_chk');
    var Gender_value;
    var Phone = document.getElementById('mypage_phone').value;

    for(var i = 0 ; i<Gender.length;i++){
        if(Gender[i].checked === true){
            alert(Gender[i].value);
            Gender_value = Gender[i].value;
        }
    };

    if(!valid_Idcheck(Id)){
a
    } else if(!valid_NameCheck(Name)){

    } else if(!valid_PwCheck(Pw,Pw)){

    } else if(!valid_BirthCheck(Birth)){

    } else if(!valid_EmailCheck(Email)) {

    } else if(!valid_GenderCheck(Gender_value)){

    } else if(!valid_PhoneCheck(Phone)){

    } else {
        alert("변경완료");
        location.href="main.html"
        //document.getElementById('join_form').submit();
    }

});

//아동 발사이즈 모달
$('#mypage_baby_info').click(function () {
    Modal_child_size.show()
});

//모달정의
var Modal_child_size = new Example.Modal({
    id: "modal_child" // 모달창 아이디 지정
});

//모달 숨기기
$('#mypage_child_cancel').click(function () {
    Modal_child_size.hide();
});