function RPS(){
    const choices =["gu","choki","pa"];
    let handImage=""
    //この書き方は、配列です。c言語参照
    //let select = document.createElement("select");
    //let option1 = document.createElement("option");
    //let option2 = document.createElement("option");
    //let option3= document.createElement("option");
    // const gu = "gu";
    // option1.value = gu;
    // option1.textContent = gu;
    // select.appendChild(option1);
    // option1.value = "choki";
    // option1.textContent = "choki";
    // select.appendChild(option2);
    // option1.value = "pa";
    // option1.textContent = "pa";
    // select.appendChild(option3);
    // gameContainer.appendChild(select);

    let select = document.createElement("select");
    select.id = "choices"
    choices.forEach(choice =>{
    let option = document.createElement("option");
    option.value = choice;
    option.textContent = choice;
    option.id = choice;
    select.appendChild(option);
});
    gameContainer.appendChild(select);

    let choicebutton = document.createElement("button")
    choicebutton.textContent="決定"
    
    gameContainer.appendChild(choicebutton)


    let image = document.createElement("img");
    image.alt = "Choice";
    image.style.width = "300px";
    image.style.height ="300px";


    choicebutton.addEventListener("click",function(){
    switch(select.value){
        case"gu":
        image.src = "https://illust8.com/wp-content/uploads/2018/07/janken_guu_illust_716.png";
        break;
       
        case"choki":
        image.src = "https://tegakisozai.com/wp-content/uploads/2020/01/hand_tyoki1.png";
        break;
        
        case"pa":
        image.src = "https://illust8.com/wp-content/uploads/2018/07/janken_hand_illust_714.png";
        break;

        default:
        break;
    }
    let enemyHand = choices
    

    gameContainer.appendChild(image);
    })
}

        //forEach 配列など複数のデータがあるもの使える。全部やる関数。
        //配列.forEach(配列の中身 => {命令})