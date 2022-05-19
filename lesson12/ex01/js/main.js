let listContent = ["content1","content2","content3"];
const btnNavs = document.querySelectorAll(".nav-item")
const contents = document.querySelector("#content p")
const index = getLocal()
contents.textContent = listContent[index];

btnNavs.forEach((btnNav,index) =>{
    btnNav.onclick = function () {
        contents.textContent = listContent[index] 
        localStorage.setItem('id', index);
    }
})

function getLocal(){
    return localStorage.getItem("id") ? localStorage.getItem("id") : 1 
}