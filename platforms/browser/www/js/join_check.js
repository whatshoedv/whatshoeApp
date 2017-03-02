/**
 * Created by byeongkwan on 2017-02-09.
 */

//성별 하나만 클릭할 수 있도록 설정
$('#gender_man').click(function (){
    document.getElementById('join_gender').value = "man";
    var man = document.getElementById('gender_man');
    var woman = document.getElementById('gender_girl');
    var none = document.getElementById('gender_none');

    man.style.backgroundImage="url(../images/join_sex_man_press.png)";
    man.style.backgroundRepeat="no-repeat";
    man.style.backgroundSize="cover";

    woman.style.backgroundImage="url(../images/join_sex_woman.png)";
    woman.style.backgroundRepeat="no-repeat";
    woman.style.backgroundSize="cover"

    none.style.backgroundImage="url(../images/join_sex_no.png)";
    none.style.backgroundRepeat="no-repeat";
    none.style.backgroundSize="cover";
});
$('#gender_girl').click(function (){
    document.getElementById('join_gender').value = "woman";

    var man = document.getElementById('gender_man');
    var woman = document.getElementById('gender_girl');
    var none = document.getElementById('gender_none');

    man.style.backgroundImage="url(../images/join_sex_man.png)";
    man.style.backgroundRepeat="no-repeat";
    man.style.backgroundSize="cover";

    woman.style.backgroundImage="url(../images/join_sex_woman_press.png)";
    woman.style.backgroundRepeat="no-repeat";
    woman.style.backgroundSize="cover"

    none.style.backgroundImage="url(../images/join_sex_no.png)";
    none.style.backgroundRepeat="no-repeat";
    none.style.backgroundSize="cover";;
});
$('#gender_none').click(function (){
    document.getElementById('join_gender').value = "none";

    var man = document.getElementById('gender_man');
    var woman = document.getElementById('gender_girl');
    var none = document.getElementById('gender_none');

    man.style.backgroundImage="url(../images/join_sex_man.png)";
    man.style.backgroundRepeat="no-repeat";
    man.style.backgroundSize="cover";

    woman.style.backgroundImage="url(../images/join_sex_woman.png)";
    woman.style.backgroundRepeat="no-repeat";
    woman.style.backgroundSize="cover"

    none.style.backgroundImage="url(../images/join_sex_no_press.png)";
    none.style.backgroundRepeat="no-repeat";
    none.style.backgroundSize="cover";;
});

//가입하기 버튼 눌렀을 때 유효성 체크 후 서버에 전송
$('#join_btn').click(function () {
    var id = document.getElementById('join_id').value;
    var pw = document.getElementById('join_pw').value;
    var pw_more = document.getElementById('join_pw1').value;
    var name = document.getElementById('join_name').value;
    var birth = document.getElementById('join_birth').value;
    var email = document.getElementById('join_mail').value;
    var gender = document.getElementById('join_gender').value;

    //회원가입 요소 유효 체크
    if(!valid_Idcheck(id)){

    } else if(!valid_NameCheck(name)){

        } else if(!valid_PwCheck(pw,pw_more)){

            } else if(!valid_GenderCheck(gender)){

                } else if(!valid_BirthCheck(birth)) {

                    } else if(!valid_EmailCheck(email)){

                        } else {
                            document.getElementById('join_form').submit();
                        }
});