/*
chrome插件优化
ask请求  参数列表
ct请求  参数列表
广告类型 ct ft

转码url

请求的ip

广告的宽高

模拟广告请求 ，广告效果展示，打压
获得广告的ct的内容

*/

/*
 test ajax
 */
// var ajaxUrl = "http://inte.sogou.com/ask?id=262786&h=250&w=300&fv=19&if=16&sohuurl=http%3A%2F%2Fclub.xywy.com%2Fstatic%2F20150716%2F71315073.htm&refer=&rnd=14ecb33f9ec828c3&z=51d864f5dca68dfc&lmt=1444897809&srp=1440,900&ccd=24&lhi=8&eja=true&npl=6&nmi=8&ece=true&lan=zh-CN&bi=2&t1=6&t2=1444897809&pvt=1444897808992&ssi0=259&ti=%E8%83%86%E5%9B%8A%E6%81%AF%E8%82%89%E4%B8%8D%E7%94%A8%E5%81%9A%E6%89%8B%E6%9C%AF%E5%8F%AF%E4%BB%A5%E5%90%97%EF%BC%9F_%E5%AF%BB%E5%8C%BB%E9%97%AE%E8%8D%AF%E7%BD%91_xywy.com&bs=1423,815&cb=SOGOU_STAR_SETJSONADSLOT&fs=1&mi=0&tmp_cdif=0&bm=8";
// var ajaxUrl = "http://inte.sogou.com/ct?id=320590&h=250&w=300&fv=19&if=16&sohuurl=http%3A%2F%2Fclub.xywy.com%2Fstatic%2F20150716%2F71315073.htm&refer=&rnd=e8eb794ce6fcd8a6&z=65cc698aa05f7898&lmt=1444898574&srp=1440,900&ccd=24&lhi=8&eja=true&npl=6&nmi=8&ece=true&lan=zh-CN&bi=2&t1=19&t2=1444898574&pvt=1444898574286&ssi0=259&ti=%E8%83%86%E5%9B%8A%E6%81%AF%E8%82%89%E4%B8%8D%E7%94%A8%E5%81%9A%E6%89%8B%E6%9C%AF%E5%8F%AF%E4%BB%A5%E5%90%97%EF%BC%9F_%E5%AF%BB%E5%8C%BB%E9%97%AE%E8%8D%AF%E7%BD%91_xywy.com&bs=985,815&tmp_cdif=0&mi=0&m=MTQ0NDg5ODU3NF9wcmV0dHkgZG9nXzMyMDU5MAA-&ex=";
// $.ajax({
//   url:ajaxUrl,
//   success:function(data){
//     alert(data)
//   }
// })

var adList = $("[id^='starIframe_wrapper']");
var adWarp = $("<div id='adWarp'></div>");
var bodyDom = $("body");
(function(adWarp){
  var wbody = bodyDom.width();
  var wheight = bodyDom.height();
  adWarp.css({
    "width":wbody,
    "height":wheight,
    "position":"absolute",
    "z-index":"9999",
    "background":"rgb(102, 102, 102)",
    "opacity":"0.8"
  })

})(adWarp)
adList.each(function(index){
   var adBlock =  drawAd($(this),(index+1));
   adWarp.append(adBlock);

})
function drawAd(obj,index){
   var w = obj.width();
   var h = obj.height();
   var ot = obj.offset().top;
   var ol = obj.offset().left;
   var id =obj.id +"_ad_"+index;
   var newWarp = $("<div></div>");
   newWarp.html("这里是第"+index+"个广告")
   newWarp.css({
     "position":"absolute",
     "top":(ot-25)+"px",
     "left":(ol-25)+"px",
     "width":w+25,
     "height":h+25,
     "border":"5px solid rgba(0, 154, 226, 0.6)",
     "background":"white",
     "z-index":"99999"
   })
   return newWarp;

}
  bodyDom.prepend(adWarp);
