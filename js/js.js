
/*
function start() {
    gameStart();
};

function gameStart(){
    //创建Div
    insertBox();
}
*/

/*function getStyle(obj,attr){
    return getComputedStyle(obj)[attr];
}*/
var main = document.getElementById("main");
var span = document.getElementById("span");
function insertBox(){
    //0~4的随机数 判断黑块位置
    /*var main = document.getElementById("main");*/
    var row = document.createElement("div");
    row.id = "row";

    var random = Math.floor(Math.random() * 4);
    for (var i=0 ; i<4 ; i++){
        var boxes = document.createElement("div");
        boxes.className="rectangle";
        row.appendChild(boxes);
    }
    var main = document.getElementById("main");
    if(main.children.length == 0){
        main.appendChild(row);
    }else{
        main.insertBefore(row,main.children[0]);
    }
   // console.log(main);
   // console.log(getComputedStyle(main)["top"]);
    //给予随机位置颜色
    row.children[random].className = "rectangle bgc";
}
var timer = null;
function moveLogic(){

    clearInterval(timer);
    //速度和分数
    var speed = 3;
    var point = 0 ;
    timer = setInterval(function(){
        var main = document.getElementById("main");
        var step = parseInt(getComputedStyle(main)["top"]) + speed;
        //移动
        console.log(step);
        main.style.top = step + "px";
        if(parseInt(getComputedStyle(main)["top"]) >= 0){
            insertBox();
            main.style.top = -150 + "px";
        }
        if(main.children.length == 5){
            for(var j = 0; j <4; j++){
                if(main.children[main.children.length-1].children[j].className == "rectangle bgc"){
                    main.style.top = "-150px";
                    clearInterval(timer);
                    alert("game over"+":"+"miss the black BlOCK");
                    document.getElementById("main").style.zIndex = "-1";
                    document.getElementById("border").style.backgroundColor = "white";
                    document.getElementById("over").style.display="block";
                    document.getElementById("over").onclick = function () {
                        window.location.reload();
                    }
                }
            }
            main.removeChild(main.children[main.children.length - 1]);
           /* alert("game over");
            window.location.reload();*/
        }
        //点击事件
        var span = document.getElementsByClassName("span");
        main.onclick = function(event){
            event = event || window.event;
            if(event.target.className == 'rectangle bgc'){
                event.target.style.backgroundColor = "white";
                event.target.className = 'rectangle';
                point ++;
                span[0].innerHTML = point;
                console.log(span);
                console.log(point);
            }
            //漏格
            else{
                console.log(123);
                alert("game over"+":"+"wrong BLOCK");
                clearInterval(timer);
                document.getElementById("main").style.zIndex = "-1";

                document.getElementById("border").style.backgroundColor = "white";
                document.getElementById("over").style.display="block";
                document.getElementById("over").onclick = function () {
                    window.location.reload();
                }
            }
            if(point%10 == 0){
                speed++;
            }
        }
    },20);
}
//开始
var start = document.getElementById("start");
/*var span = document.getElementsByClassName("");*/
start.onclick = function(){
    if(main.children.length){
        window.location.reload();
        main.innerHTML = "";
    }
    moveLogic();
};

