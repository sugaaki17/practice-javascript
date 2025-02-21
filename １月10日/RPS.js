function RPS(){
    const choices = ["gu","choki","pa"];
    let handImage =""
    let select = document.createElement("select");
    select.id ="choices"
    choices.forEach(choice => {
    let option =document.createElement("option");
    option.value=choice;
    option.textContent = choice;
    option.id=choice;
    select.appendChild(option);
});
gameContainer.appendChild(select);

    let choiceButton=document.createElement("button")
    choiceButton.textContent="決定"
    gameContainer.appendChild(choiceButton);
    


    let image = document.createElement('img');
    image.alt ="chice";
    image.style.width ='200px';
    image.style.height = '200px';

  
    let enemyImage =document.createElement("img");
    enemyImage.alt="choice";
    enemyImage.style.width="200px";
    enemyImage.style.height="200px";

    choiceButton.addEventListener("click",function(){
    switch(select.value){
        case "gu":
            image.src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiusq_ptNOOC9XkVvWTa88nhB6I7n12fsf95zdnS-n269HpN9dVRd0JCCV0iL2u_tWrDU5XySM8-i9u38-tXp0Wgu6qRF4p-5A1djjVskwkB0SQFxULDss8Uj1o7CYfbMNRpT-kfn3cG4E/s800/janken_gu.png";
            break;
        case "choki":
            image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRET6SrXbXMNMIdvoaqJ9yn0NwjMHhA2cn-4Q&s"
            break;
        case "pa":
            image.src="https://www.sozai-library.com/wp-content/uploads/2016/12/9357.jpg"
            break;
        default:
            break;
    }
    let enemyHand=choices[Math.floor(Math.ramdom() * choices.length)];
    
    switch(enemyHand){
        case "gu":
            enemyimage.src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiusq_ptNOOC9XkVvWTa88nhB6I7n12fsf95zdnS-n269HpN9dVRd0JCCV0iL2u_tWrDU5XySM8-i9u38-tXp0Wgu6qRF4p-5A1djjVskwkB0SQFxULDss8Uj1o7CYfbMNRpT-kfn3cG4E/s800/janken_gu.png";
            break;
        case "choki":
            enemyimage.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRET6SrXbXMNMIdvoaqJ9yn0NwjMHhA2cn-4Q&s"
            break;
        case "pa":
            enemyimage.src="https://www.sozai-library.com/wp-content/uploads/2016/12/9357.jpg"
            break;
        default:
            break;
    }
    })
    gameContainer.appendChild(image);
    gameContainer.appendChild(enemyImage);
}


    // forEach 配列など複数のデータがあるものに使える。全部やる関数。
    // 配列.forEach(配列の中身 => {命令})


 //この書き方は配列ですc言語参照
    // let select =document.createElement("select");
    // let option1 = document.createElement("option");
    // let option2 = document.createElement("option");
    // let option3 = document.createElement("option");
    // const gu ="gu"
    // option1.value=gu;
    // option1.textContent=gu;
    // select.appendChild(option1);
    // option2.value="choki";
    // option2.textContent="choki";
    // select.appendChild(option2);
    // option3.value="pa";
    // option3.textContent="pa";
    // select.appendChild(option3);
    // gameContainer.appendChild(select);