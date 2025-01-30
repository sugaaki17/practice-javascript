//function ClickCounterGame(){
    let count = 0;
    const gameContainar = document.getElementById("game-container");

    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let button3 = document.createElement("button");
    button1.textContent = "+1ボタン";
    button2.textContent = "+10ボタン";
    button3.textContent = "リセット";
    let counter = document.createElement("p");
    counter.textContent = count;
    
    button1.addEventListener("click",function(){
        count++;
        counter.textContent = count;
    })
    button2.addEventListener("click",function(){
        count = count+10;
        counter.textContent = count;
    })
    counter.addEventListener("click",function(){
        count = 0;
        counter.textContent = count;
    })
    gameContainar.appendChild(button1);
    gameContainar.appendChild(button2);
    gameContainar.appendChild(button3);
    gameContainar.appendChild(counter);
//}