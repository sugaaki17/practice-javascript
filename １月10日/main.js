//function ClickCounterGame(){
    let count = 0;
    const gameContainar = document.getElementById("game-container");

    let button1 = document.createElement("button");
    button1.textContent = "+1ボタン";
    
    let counter = document.createElement("p");
    counter.textContent = count;
    
    button1.addEventListener("click",function(){
        count++;
        counter.textContent = count;
    })
    gameContainar.appendChild(button1);
    gameContainar.appendChild(counter);
//}