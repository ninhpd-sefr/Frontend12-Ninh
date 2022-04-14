
var number = 5;

for(var i = 0; i <= number;i++){
    for(var j = i+1; j <= number;j++){
        if(j == number){
            document.write(j)
        }else{
            document.write(j + "a")
        }
       
    }
    document.write("<br>")
}