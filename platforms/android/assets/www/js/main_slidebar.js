/**
 * Created by byeongkwan on 2017-02-13.
 */
localStorage.NavCheck = 0;


$('#jsi-nav').sidebar({
    trigger: '.jsc-sidebar-trigger',
    scrollbarDisplay: true,
    pullCb: function () { console.log('pull'); },
    pushCb: function () { console.log('push'); }
});