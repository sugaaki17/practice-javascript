function errorInput(){
    const month=document.getElementById("month").value;
    const day=document.getElementById("day").value;
    if(month<1||month>12){
        alert("適切な値ではありません")
        return
    }    

    console.log("Month:",month,"Day:",day)

}


//document.getElementByid("month")はタグを確認するだけ
//valueはそのタグの値を示す


/*
javaScriptのプログラムとHTMLファイルはどこで対応しているかタグについているIDで紐ずく
タグの中にある付加情報のことを属性という
console.log()はｃ言語でいうところのprintf();です*/
