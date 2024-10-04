function changeColor(){
document.getElementById("text").style.color="red";
}




//docment.getElementIdById("text")style.color="red";
/*これは、ドキュメントの中の｛text｝というIDを持っている
タグのスタイルの色を赤にしてください*/



//document.querySelectorAll("h1").style.color="red";
let count=0;
function increaseCount(){

count++;
document.getElementById("counter").innerText=count;
}
function herasukaunto(){

count--;
document.getElementById("counter").innerText=count;
}
