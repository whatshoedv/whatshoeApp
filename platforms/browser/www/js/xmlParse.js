var xml ;

//여자 구두 xml 호출
var woman_array_service = [];
var woman_array_code = [];
var woman_len;
$.ajax({
    url:'http://whatshoe.co.kr/bk/www/xml/woman.xml',
    type:'GET',
    dataType:'xml',
    timeout: 1000,
    error:function () {
        alert("err");
    },
    success: function ($xml) {
        xml = $($xml).find("woman");
        woman_len = xml.find("service").length;
        for(var i = 1; i<=woman_len; i++){
            woman_array_code[i] = xml.find("service").eq(i-1).find("code").text();
            woman_array_service[i] = xml.find("service").eq(i-1).find("content").text();
        }
    }
});

//남자 구두 xml 호출
var man_array_service = [];
var man_array_code = [];
var man_len;
$.ajax({
    url:'http://whatshoe.co.kr/bk/www/xml/man.xml',
    type:'GET',
    dataType:'xml',
    timeout: 1000,
    error:function () {
        alert("err");
    },
    success: function ($xml) {
        xml = $($xml).find("man");
        man_len = xml.find("service").length;
        for(var i = 1; i<=man_len; i++){
            man_array_code[i] = xml.find("service").eq(i-1).find("code").text();
            man_array_service[i] = xml.find("service").eq(i-1).find("content").text();
        }
    }
});

//프리미엄 여자 구두 xml 호출
var prewoman_array_service = [];
var prewoman_array_code = [];
var prewoman_len;
$.ajax({
    url:'http://whatshoe.co.kr/bk/www/xml/prewoman.xml',
    type:'GET',
    dataType:'xml',
    timeout: 1000,
    error:function () {
        alert("err");
    },
    success: function ($xml) {
        xml = $($xml).find("prewoman");
        prewoman_len = xml.find("service").length;
        for(var i = 1; i<=prewoman_len; i++){
            prewoman_array_code[i] = xml.find("service").eq(i-1).find("code").text();
            prewoman_array_service[i] = xml.find("service").eq(i-1).find("content").text();
        }
    }
});

//프리미엄 남자 구두 xml 호출
var preman_array_service = [];
var preman_array_code = [];
var preman_len;
$.ajax({
    url:'http://whatshoe.co.kr/bk/www/xml/preman.xml',
    type:'GET',
    dataType:'xml',
    timeout: 1000,
    error:function () {
        alert("err");
    },
    success: function ($xml) {
        xml = $($xml).find("preman");
        preman_len = xml.find("service").length;
        for(var i = 1; i<=preman_len; i++){
            preman_array_code[i] = xml.find("service").eq(i-1).find("code").text();
            preman_array_service[i] = xml.find("service").eq(i-1).find("content").text();
        }
    }
});

//프리미엄 벨트 xml 호출
var belt_array_service = [];
var belt_array_code = [];
var belt_len;
$.ajax({
    url:'http://whatshoe.co.kr/bk/www/xml/belt.xml',
    type:'GET',
    dataType:'xml',
    timeout: 1000,
    error:function () {
        alert("err");
    },
    success: function ($xml) {
        xml = $($xml).find("belt");
        belt_len = xml.find("service").length;
        for(var i = 1; i<=belt_len; i++){
            belt_array_code[i] = xml.find("service").eq(i-1).find("code").text();
            belt_array_service[i] = xml.find("service").eq(i-1).find("content").text();
        }
    }
});

// 가방 xml 호출
var bag_array_service = [];
var bag_array_code = [];
var bag_len;
$.ajax({
    url:'http://whatshoe.co.kr/bk/www/xml/bag.xml',
    type:'GET',
    dataType:'xml',
    timeout: 1000,
    error:function () {
        alert("err");
    },
    success: function ($xml) {
        xml = $($xml).find("bag");
        bag_len = xml.find("service").length;
        for(var i = 1; i<=bag_len; i++){
            bag_array_code[i] = xml.find("service").eq(i-1).find("code").text();
            bag_array_service[i] = xml.find("service").eq(i-1).find("content").text();
        }
    }
});

//지갑 xml 호출
var wallet_array_service = [];
var wallet_array_code = [];
var wallet_len;
$.ajax({
    url:'http://whatshoe.co.kr/bk/www/xml/wallet.xml',
    type:'GET',
    dataType:'xml',
    timeout: 1000,
    error:function () {
        alert("err");
    },
    success: function ($xml) {
        xml = $($xml).find("wallet");
        wallet_len = xml.find("service").length;
        for(var i = 1; i<=wallet_len; i++){
            wallet_array_code[i] = xml.find("service").eq(i-1).find("code").text();
            wallet_array_service[i] = xml.find("service").eq(i-1).find("content").text();
        }
    }
});