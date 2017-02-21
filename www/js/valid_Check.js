/**
 * Created by byeongkwan on 2017-02-08.
 */
function valid_Idcheck(valid_id){
    var Id = valid_id;
    if(!Id){
        alert("아이디가 입력되지 않았습니다.");
        return false;
    } else if((!/^[a-zA-Z0-9]{4,12}$/.test(Id))){
            alert("아이디 4자리 이상 입력");
            return false;
        } else {
        return true;
        }
}   //아이디 유효성 체크

function valid_PwCheck(valid_pw, valid_pw_more) {
    var pw = valid_pw;
    var pw_more = valid_pw_more;
    if(!pw){
        alert("비밀번호 입력되지 않았습니다.");
        return false;
    } else if(!/^[a-zA-Z0-9]{8,12}$/.test(pw)) {
        alert("숫자와 영문 혼합 8~12자리");
        return false;
        } else if(pw != pw_more) {
        alert("비밀번호 확인이 일치하지 않습니다.");
        return false;
    } else {
        return true;
    }
}   //비밀번호 유효성 체크

function valid_NameCheck(valid_name) {
    var name = valid_name;
    if (!name) {
        alert("이름이 입력되지 않았습니다");
        return false;
    } else {
        return true;
    }
}   //이름 유효성 체크
function valid_GenderCheck(valid_gender){
    var gender = valid_gender;
    if(gender == "NULL" || gender==undefined){
        alert("성별 선택점");
        return false;
    } else {
        return true;
    }
}       //성별 유효성 체크

function valid_BirthCheck(valid_birth){
    var birth = valid_birth;
    if(!birth){
        alert("생년월일이 입력 안됬습니다.");
        return false;
    } else if(!/^[0-9]{6,6}$/.test(birth)) {
        alert("형식이 잘못됬습니다.");
        return false;
    } else {
        return true;
    }
}       //생년월일 유효성 체크

function valid_EmailCheck(valid_email){
    var email = valid_email;
    if(!email){
        alert("이메일이 입력 안됬습니다.");
        return false;
    } else if(!/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(email)) {
        alert("형식이 맞지 않습니다");
        return false;
    } else {
        return true;
    }
}       //이메일 유효성 체크

function valid_PhoneCheck(valid_phone) {
    var phone = valid_phone;
    if(!phone){
        alert("번호 입력이 안됬습니다");
        return false;
    } else if(!/^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/){
        alert("형식이 잘못됬습니다.");
        return false;
    } else {
        return true;
    }
}       //휴대폰 번호 유효성 체크