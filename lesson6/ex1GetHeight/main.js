var box = document.getElementsByTagName("div");
var max = 0;
for(var i = 0; i < box.length; i++){
    if(max < box[i].offsetHeight){
        max = box[i].offsetHeight;
    }
}

for(var j = 0; j < box.length; j++){
    box[j].style.height = max +"px"
    if((j+1)%2 == 0){
        box[j].style.background = "red"
    }
}

