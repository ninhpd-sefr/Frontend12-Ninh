function Find(){
    var exampleVari = document.getElementById("inputExample").value;
    var text = document.getElementById("text").textContent
    
    var textNew = text.toLowerCase();
        textNew = textNew.split(" ");
        console.log(text)
    for(var i = 0; i < textNew.length; i++){
        textNew[i] = "<h1>"+textNew[i]+"</h1>"
    }

    document.getElementById("result").innerHTML = textNew.join("")

    var textAfter = document.getElementsByTagName("h1");
    for(var i = 0; i < textAfter.length; i++){
        if(textAfter[i].textContent == exampleVari){
            textAfter[i].style.color = "red"
        }
    }
    
}

