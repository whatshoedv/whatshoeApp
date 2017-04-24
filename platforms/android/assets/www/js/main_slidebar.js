/**
 * Created by byeongkwan on 2017-02-13.
 */
$(document).ready(function () {
   document.getElementById('sidebar_name').textContent = client.Name;
});
$('#head_menu').click(function () {

    var sidebar = document.getElementById("sidebar");

    console.log(sidebar.style.left);

    if(sidebar.style.left == "-80%")
    {
        sidebar.style.left = "0px";
    }
});
$('#main_cancel').click(function () {
   var sidebar = document.getElementById('sidebar');

   if(sidebar.style.left == "0px"){
       sidebar.style.left = "-80%";
   }
});
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-57883751-1', 'auto');
ga('send', 'pageview');