 $(".subBox").each(function(index){
            // this:原声js对象
            // $(this):jquery对象
            $(this).css({"left":200*index+"px","transitionDelay":index*0.5+"s"});
            $(this).find(".sub").css("backgroundPosition",-200*index+"px");
        });
         var num = 0;
       $(".controll .prev").on("click",function(){
            $('.subBox').css("transform","rotateX("+(--num*-90)+"deg)");
        });
        $(".controll .next").on("click",function(){
            $('.subBox').css("transform","rotateX("+(++num*-90)+"deg)");
        });
        $(".box").hover(function(){
            clearInterval(timer);
        },function(){
            timer = setInterval(moveFn,3000);
        });
        function moveFn(){
            $('.subBox').css("transform","rotateX("+(++num*-90)+"deg)");
        }