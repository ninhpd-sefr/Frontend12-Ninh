let backgroundText = document.querySelector(".contentNews");
let text = document.querySelector(".contentNews p");
const btnFont = document.querySelector(".btn-font") 
const btnCopy = document.querySelector(".btn-copy") 
const btnColor = document.querySelector(".btn-color") 
let colorList = document.querySelector(".color-list")
let colorItems = document.querySelectorAll(".color-list li")
const btnDark = document.querySelector(".btn-dark") 

// change color text
btnColor.onclick = function(){
    colorList.classList.toggle("none")
}

colorItems.forEach(item =>{
    item.onclick = function(){
        let colorToSet = item.getAttribute("value");
        text.style.color = colorToSet;
    }
})

// dark mode
btnDark.onclick = function(){
    backgroundText.classList.toggle("dark-mode");
}

// control size
var count = 15;
btnFont.onclick = function(){
    if(count >= 25){
        count = 15;
        text.style.fontSize = count + "px";
    }else{
        count += 2;
        text.style.fontSize = count + "px";
    }
}

// copy 


btnCopy.onclick = function(){
        navigator.clipboard.writeText(text.textContent);
        alert("copied")
}