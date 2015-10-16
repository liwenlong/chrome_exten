(function(w,$){
   function SOGOU_AD(){
      this.option={
        "warpId":"sogou_ad_helper"
      }
      this.init();
   }
   SOGOU_AD.prototype={
      init:function(){
        if(!this.creatDom()){
          console.log("not need init~");
          return;
        };
      },
      creatDom:function(){
         var warpId = $("#"+this.option.warpId);
         if(warpId.length > 0){
             console.log("已经存在");
             return false; //说明已经存在，无法点击再出现
          }
         $("body").prepend($("<div id='"+this.option.warpId+"'>test123</div>"));
         return true;
      }

   }
   var test = new SOGOU_AD();

})(window,jQuery)
