var imgDefault = "https://www.madeireiraestrela.com.br/images/joomlart/demo/default.jpg"

var imgItem = document.getElementsByTagName("img")
for(let i = 0;i < imgItem.length; i++){
    if(imgItem[i].getAttribute("src") == ""){
        imgItem[i].src = imgDefault;
    }   
}
