
// 随机获取一种颜色
function getRandomColor(){
    var rgb=('#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6));
    return rgb;
}

function getRandomNum(){
    var box1,box2,box3;
    do{
        box1 = Math.floor(Math.random()*9);
        box2 = Math.floor(Math.random()*9);
        box3 = Math.floor(Math.random()*9);
    }
    while (box1==box2 || box2==box3 || box3==box1);
    arr=[];
    arr[0]=box1;
    arr[1]=box2;
    arr[2]=box3;
    return arr;
}

function change(){
    getRandomNum();
    for (var n=0;n<=2;n++){
        document.getElementById('num'+arr[n]).style.backgroundColor=getRandomColor();
    }
    function reset() {
        for(var n=0;n<=2;n++){
            document.getElementById('num'+arr[n]).style.backgroundColor="orange";
        }
    }
    setTimeout(reset,250);
}

var time;
function newChange(){
    time=setInterval(change,500);
}


function over(){
    for (var i = 0;i <= 8;i++){
        document.getElementById('num' + i).style.backgroundColor='orange';
    }
    clearInterval(time);
}


