
var number = 5;
var str = "a"
for(var i = 0; i <= number;i++){
    for(var j = i+1; j <= number;j++){
        if(j == number){
            document.write(j)
        }else{
            document.write(j + str)
        }
       
    }
    document.write("<br>")
}