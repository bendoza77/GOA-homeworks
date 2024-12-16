const plusImage1 = document.getElementById("plusImage1");
const plusImage2 = document.getElementById("plusImage2");
const plusImage3 = document.getElementById("plusImage3");
const plusImage4 = document.getElementById("plusImage4");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const questions = document.getElementById("questions");
const main = document.getElementById("main");

answer1.style.display = "none";
answer2.style.display = "none";
answer3.style.display = "none";
answer4.style.display = "none";



function changeQuestion1(){
    answer1.style.display = "block";
    plusImage1.src = "./assets/images/icon-minus.svg";
    main.style.height = "72%";
    plusImage2.src = "./assets/images/icon-plus.svg";
    answer2.style.display = "none";
    answer3.style.display = "none"
    plusImage3.src = "./assets/images/icon-plus.svg";
    answer4.style.display = "none";
    plusImage4.src = "./assets/images/icon-plus.svg";
}

function changeQuestion2(){
    answer1.style.display = "none";
    plusImage1.src = "./assets/images/icon-plus.svg";
    plusImage2.src = "./assets/images/icon-minus.svg";
    answer2.style.display = "block";
    plusImage3.src = "./assets/images/icon-plus.svg";
     answer3.style.display = "none"
    answer4.style.display = "none";
    plusImage4.src = "./assets/images/icon-plus.svg";
}

function changeQuestion3(){
    answer1.style.display = "none";
    plusImage1.src = "./assets/images/icon-plus.svg";
    plusImage2.src = "./assets/images/icon-plus.svg";
    answer2.style.display = "none";
    answer3.style.display = "block"
    plusImage3.src = "./assets/images/icon-minus.svg";
    answer4.style.display = "none";
    plusImage4.src = "./assets/images/icon-plus.svg";
}

function changeQuestion4(){
    answer1.style.display = "none";
    plusImage1.src = "./assets/images/icon-plus.svg";
    plusImage2.src = "./assets/images/icon-plus.svg";
    answer2.style.display = "none";
    answer3.style.display = "none"
    plusImage3.src = "./assets/images/icon-plus.svg";
    answer4.style.display = "block";
    plusImage4.src = "./assets/images/icon-minus.svg";
}