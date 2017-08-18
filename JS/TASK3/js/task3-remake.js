//提取上一个页面保存的数据
var impress = JSON.parse(localStorage.getItem("arr"));
console.log(impress);

var i = 1;
$(document).ready(function(){
    $("#btn").click(function () {
        if(i < 2 * impress.length){
            if(i % 2 == 1){
                var z = (i + 1)/2 - 1;
                $(".main-icon").toggle();
                $(".show").toggle();
                $("#btn").text("隐藏并传递给" + ((i + 1)/2 + 1) + "号");
                $("#role").text(impress[z]);
            } else if(i % 2 == 0){
                $(".main-icon").toggle();
                $(".show").toggle();
                $("#btn").text("查看" + (i / 2 + 1) + "号身份");
                $(".number").text(i / 2 + 1);
            }
        }
        var imp = impress[z]
        if(imp == "杀手"){
            $(".phrase").text("词组：爱新觉罗");
        }else{
            $(".phrase").text("词组：努尔哈赤");
        }
        if (i == 2 * impress.length - 1){
            $("#btn").text("法官查看")
            $("#btn").click(function(){
                window.location.href = "../task3/task3-view.html"
            })
        }
        i++;
    });
});


