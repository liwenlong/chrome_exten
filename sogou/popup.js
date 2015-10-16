 // var ad = document.getElementById("ad");
 // ad.addEventListener("click",function(){
 //     chrome.tabs.executeScript(null,{ file: "jquery.js" },function(){
 //         chrome.tabs.executeScript(null,{ file: "hello.js" });
 //     });
 // })
alert("begin");
chrome.browserAction.onClicked.addListener(function(tab) {
   chrome.tabs.executeScript(null,{ file: "jquery.js" },function(){
       chrome.tabs.executeScript(null,{ file: "hello.js" });
   });
});
