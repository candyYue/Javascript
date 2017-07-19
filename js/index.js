$(function () {

    setInterval(play, 300);
    function play() {
        var leader=$(".news")[0].offsetTop;
        var num=-20;
        if(leader<-160){
            leader=0;
            $(".news")[0].style.top=leader + "px";
        }else{
            leader+=num;
            $(".news")[0].style.top = leader + "px";
        }

        console.log(leader);
    }


});