var numberSecret = 0;
let gradesBtn = document.querySelector(".grades");
const introBtn = document.querySelector(".rules");
const playGame = document.querySelector(".playgame");
const layoutCenter = document.querySelector(".layout-center");
let introMess = document.querySelector(".layout-right-intro-mess")

// number secret
function getNumberSecret(number) {
    return Math.floor(Math.random() * number) + 1;
}

// control music
let playMusic = document.querySelector("#myAudio");
let offMucsic = document.querySelector(".offMusic");
offMucsic.onclick = function () {
    if (offMucsic.innerHTML == '<i class="fa-solid fa-bell"></i>') {
        playMusic.play();
        offMucsic.innerHTML = '<i class="fa-solid fa-bell-slash"></i>'
    } else {
        playMusic.pause();
        offMucsic.innerHTML = '<i class="fa-solid fa-bell"></i>'
    }
}

//click play again
function rePlaygame() {
    localStorage.removeItem("NumberChoosed");
    location.reload();
    document.querySelector(".layout-center-choosed").innerHTML = "";

}
// click play game
playGame.onclick = function () {
    localStorage.removeItem("NumberChoosed");
    layoutCenter.style.display = "block";
    document.getElementById("myImageId").src="./img/instructor.png"
    introMess.innerHTML = "let's find the secret number"
    document.querySelector(".layout-center-choosed").innerHTML = "";
    count = 0;
    getGrades(3);
    slotPlay(3);

}

renderLevel("level 1");
var levelDefault = 1;
let levelPlay = document.querySelector(".layout-left-level h3");
// next level btn
const nextBtn = document.querySelector(".fa-forward-step");
nextBtn.onclick = function () {
    if (levelDefault < 3) {
        levelDefault += 1;
        let levelResult = '';
        levelResult = `level ${levelDefault}`
        levelPlay.innerHTML = levelResult;
        renderLevel(levelPlay.innerHTML);
    } else {
        levelDefault = 1;
        let levelResult = '';
        levelResult = `level ${levelDefault}`
        levelPlay.innerHTML = levelResult;
        renderLevel(levelPlay.innerHTML);
    }
}
// relevel btn
const prevBtn = document.querySelector(".fa-backward-step");
prevBtn.onclick = function () {
    if (levelDefault > 1) {
        levelDefault -= 1;
        let levelResult = '';
        levelResult = `level ${levelDefault}`
        levelPlay.innerHTML = levelResult;
        renderLevel(levelPlay.innerHTML);
    } else {
        levelDefault = 3;
        let levelResult = '';
        levelResult = `level ${levelDefault}`
        levelPlay.innerHTML = levelResult;
        renderLevel(levelPlay.innerHTML);
    }
}

// pause game btn
const pauseBtnMain = document.querySelector(".layout-center-control-pause");
pauseBtnMain.onclick = function () {
    if (pauseBtnMain.innerHTML == '<i class="fa-solid fa-circle-pause"></i>') {
        pauseBtnMain.innerHTML = '<i class="fa-solid fa-play"></i>'
    } else {
        pauseBtnMain.innerHTML = '<i class="fa-solid fa-circle-pause"></i>'
    }
}

var maxNumber = 0;

// render by level
function renderLevel(value) {
    if (value == "level 1") {
        maxNumber = 30;
    } else if (value == "level 2") {
        maxNumber = 60;
    } else if (value == "level 3") {
        maxNumber = 70;
    }

    numberSecret = getNumberSecret(maxNumber);
    console.log(numberSecret)

    var resultRender = "";
    for (let i = 1; i <= maxNumber; i++) {
        resultRender += ` <span class="layout-center-item">${i}</span>`
    }

    document.querySelector(".layout-center-list").innerHTML = resultRender;
    chechTrueFalse();
}




// check value is true or false
var count = 0;
function chechTrueFalse() {
    let inputsGame = document.querySelectorAll(".layout-center-item");
    inputsGame.forEach(function (inputGame) {
        inputGame.onclick = function () {
            if (inputGame.innerHTML == numberSecret) {
                congratu();
                layoutCenter.style.display = "none";

            } else {
                tryagain(inputGame.innerHTML);
                count += 1;
                getGrades(3 - count)
                slotPlay(3 - count);
                if (count == 3) {
                    rePlaygame()
                }
            }
        }

    })
}
chechTrueFalse();



// if user choose correct
function congratu() {
    introMess.innerHTML = "congratulation !!!!!"
    document.getElementById("myImageId").src="./img/congratulation.png"
    document.getElementById("myImageId").style.width = 500 +"px"
}

// if user choose incorrect
function tryagain(number) {
    introMess.innerHTML = "Let's try again"
    document.getElementById("myImageId").src="./img/imgbin-nobita-nobi-doraemon-desktop-fujiko-fujio-doraemon-characters-PyahwNQjc7cwrWfgNMJ1s6PDK_t-removebg-preview.png"
    var choosedNumber = getNumberFromLocal();
    choosedNumber.push(number);
    localStorage.setItem("NumberChoosed", JSON.stringify(choosedNumber));
    renderChoosedNumber(choosedNumber);
}

// render choose number
renderChoosedNumber(getNumberFromLocal());
function renderChoosedNumber(numbers) {
    var resultChoosedNumber = "";
    numbers.forEach(function (number, index) {
        resultChoosedNumber += `<span>${number}</span>`
    })
    document.querySelector(".layout-center-choosed").innerHTML = resultChoosedNumber
}


// render slot to play
function slotPlay(number) {
    let slotPLayElem = "";
    for (let i = 1; i <= number; i++) {
        slotPLayElem += `<i class="fa-solid fa-heart slotRemain"></i>`
    }
    document.querySelector(".layout-right-slot-remain").innerHTML = slotPLayElem;
}

// get suggestion
const ideaBtn = document.querySelector(".ideaBtn");
ideaBtn.onclick = function () {
    if (numberSecret > 0 && numberSecret < 26) {
        introMess.innerHTML = "secret number more than 1 and less than 25"
    } else if (numberSecret > 25 && numberSecret < 51) {
        introMess.innerHTML = "secret number more than 25 and less than 50"
    } else if (numberSecret > 50 && numberSecret <= 70) {
        introMess.innerHTML = "secret number more than 50 and less than or equal 70"
    }
}


// get grades
var grades = document.querySelector(".grades")
function getGrades(number) {
    grades.innerHTML = `Grades : ${number * 30}`
}

// get local
function getNumberFromLocal() {
    return localStorage.getItem('NumberChoosed') ? JSON.parse(localStorage.getItem('NumberChoosed')) : [];
}

function getSlotFromLocal() {
    return localStorage.getItem('slot') ? JSON.parse(localStorage.getItem('slot')) : [];
}


// watch ads
var videoAds = document.querySelector(".video-ads");
function playAds(){
    videoAds.classList.toggle("video-ads-none");
    setTimeout(function () {
        videoAds.classList.toggle("video-ads-none");
        videoAds.innerHTML = ""
    }, 10000)
    count+=1;
    
}





// jquery
$(function () {
    $(document).tooltip();
});