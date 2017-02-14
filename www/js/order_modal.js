/**
 * Created by byeongkwan on 2017-02-14.
 */

var Modal_deliverNotice = new Example.Modal({
    id: "modal_deliverNotice" // 모달창 아이디 지정
});
Modal_deliverNotice.show();
$('#deliverModal_confirm').click(function () {
   Modal_deliverNotice.hide();
});