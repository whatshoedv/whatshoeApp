/**
 * Created by byeongkwan on 2017-02-08.
 */

function Client(Id, Name, Gender, Birth, Email, Phone){
    this.Id = Id;
    this.Name = Name;
    this.Gender = Gender;
    this.Birth = Birth;
    this.Email = Email;
    this.phone = Phone;
}

var client = new Client(localStorage.client_id, localStorage.client_name, localStorage.client_gender, localStorage.client_birth, localStorage.client_email, localStorage.client_phone);

