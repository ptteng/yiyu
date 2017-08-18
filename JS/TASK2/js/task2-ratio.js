//声明变量
var set = document.getElementById("set");
var playernum = document.getElementById("playernum");
var reduce = document.getElementById("reduce");
var raise = document.getElementById("raise");
var range = document.getElementById("range");
var block = document.getElementsByClassName("block");
var role = document.getElementsByClassName("role");
var content = document.getElementsByClassName("num");
var deal = document.getElementById("deal");
var killer;
var commoner;

function LoseFocus(){
    range.value = playernum.value;
    var p = playernum.value;
    if(p < 4 || p > 18){
        $(function(){
            var txt = "请输入4到18之间的人数！";
            window.wxc.xcConfirm(txt);
        });
        range.value = 4;
        playernum.value = 4;
    }
};

function OnInput() {
     playernum.value = range.value;
};

function Reduce(){
    var re = --range.value
    playernum.value = range.value;
    if(re < 4){
        $(function(){
            var txt = "不能再减少了！";
            window.wxc.xcConfirm(txt);
        });
        re=4;
    }
};

function Raise() {
    var ra = ++range.value
    playernum.value = range.value;
    if(ra > 18){
        $(function(){
            var txt = "不能再增加了！";
            window.wxc.xcConfirm(txt);
        });
        re=18;
    }
};

function ArrNum(){
    var part = [];
    for(var k = 0;k < killer; k++){
        part.push("杀手");
    };
    for(var c = 0; c < commoner; c++){
        part.push("平民");
    }
    return part;
}
//数组乱序
function chaos(){
    var sum = ArrNum();
    var len = sum.length;
    for (var i = 0; i < len - 1; i++){
        var index = Math.floor(Math.random() * (len - i));
        var temp = sum[index];
        sum[index] = sum[len - i - 1];
        sum[len - i - 1] = temp;
    }
    return sum;
}

function Set(){
    for(var n = 0; n < 18 ;n++){
        content[n].innerHTML = ""
    };

    for(var n = 0; n < playernum.value; n++){
        content[n].innerHTML = "<span class=\"block\"></span><span class=\"role\">平民</span>";
    };

    var num = playernum.value = range.value;
    killer = Math.floor(num / 3);
    commoner = num - killer;
    console.log(killer, commoner);

    //保存玩家和杀手的人数用于后面页面判断游戏是否结束
    localStorage.setItem("killer", JSON.stringify(killer));
    localStorage.setItem("commoner", JSON.stringify(commoner));


    // 将乱序后的数组保存在本地浏览器中，用于下一个页面
    impress = chaos();
    console.log(impress);
    localStorage.setItem("arr", JSON.stringify(impress));
    console.log(JSON.stringify(impress));

    var sum = chaos();
    var len = sum.length;
    for(var m = 0; m < len; m++){
        if(role[m].innerHTML == sum[m]){
            block[m].style.backgroundColor = "#fab344";
        }
        else{
            role[m].innerHTML = "杀手";
            block[m].style.backgroundColor = "#29bde0";
        };
    };
}

function Deal(){
    var c = chaos();
    var p = playernum.value;
    if(c.length == p){
        window.location.href = "../task3/task3-remake.html"
    }else{
        $(function(){
            var txt = "请先确认身份！";
            window.wxc.xcConfirm(txt);
        });
    };
}

