function errorInput(){
    const month=document.getElementById("month").value;
    const day=document.getElementById("day").value;
    if(month<1||month>12){
        alert("適切な値ではありません")
        return
    }    

    console.log("Month:",month,"Day:",day)

}

const monthselect=document.getElementById("month2");
monthselectlist();
function monthselectlist(){
    for (let i=1;i<12;i++){
        let option=document.createElement('otion');
        option.value=i;
        monthselect.appendChild(option);

    }
}
//document.getElementByid("month")はタグを確認するだけ
//valueはそのタグの値を示す


/*
javaScriptのプログラムとHTMLファイルはどこで対応しているかタグについているIDで紐ずく
タグの中にある付加情報のことを属性という
console.log()はｃ言語でいうところのprintf();です*/
