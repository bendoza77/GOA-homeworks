const amount = document.getElementById("amount");
const myForm = document.getElementById("myForm");
const euro = document.getElementById("euro");
const logo = document.getElementById("logo");
const rate = document.getElementById("rate");
const years = document.getElementById("years");
const field = document.getElementById("field");
const field1 = document.getElementById("field1");
const year = document.getElementById("year");
const logo1 = document.getElementById("logo1");
const logo2 = document.getElementById("logo2");
const main = document.getElementById("main");
const pro = document.getElementById("pro");
const field2 = document.getElementById("field2");
const field3 = document.getElementById("field3");
const repayment = document.getElementById("repayment");
const interset = document.getElementById("interset");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const image = document.getElementById("image");
const result = document.getElementById("result");
const finalyResult = document.getElementById("finalyResult");
const repay = document.getElementById("total");
let total = 0;

result.style.opacity = "0";


function clearForm(){
    result.style.opacity = "0";
    image.style.opacity = "1";
    document.getElementById("myForm").reset();
}

function changeBorderColor(){
    amount.style.borderColor = "hsl(61, 70%, 52%)";
    euro.style.borderColor = "hsl(61, 70%, 52%)";
    euro.style.backgroundColor ="hsl(61, 70%, 52%)";
    logo.style.color = "white";
    rate.style.borderColor = "hsl(202, 55%, 16%)";
    pro.style.borderColor = "hsl(202, 55%, 16%)";
    pro.style.backgroundColor = "hsl(202, 86%, 94%)";
    pro.style.color = "gray";
    pro.style.fontWeight = "500";
    years.style.borderBlockColor = "hsl(202, 55%, 16%)";
    year.style.backgroundColor = "hsl(202, 86%, 94%)";
    year.style.borderColor = "hsl(202, 55%, 16%)";
    logo1.style.color = "gray";
    logo1.style.fontWeight = "500";
}

function clearColor(){
    rate.style.borderColor = "hsl(202, 55%, 16%)";
    pro.style.borderColor = "hsl(202, 55%, 16%)";
    pro.style.backgroundColor = "hsl(202, 86%, 94%)";
    pro.style.color = "gray";
    pro.style.fontWeight = "500";
    years.style.borderBlockColor = "hsl(202, 55%, 16%)";
    year.style.backgroundColor = "hsl(202, 86%, 94%)";
    year.style.borderColor = "hsl(202, 55%, 16%)";
    logo1.style.color = "gray";
    logo1.style.fontWeight = "500";
    amount.style.borderColor = "hsl(202, 55%, 16%)";
    euro.style.borderColor = "hsl(202, 55%, 16%)";
    euro.style.backgroundColor ="hsl(202, 86%, 94%)";
    logo.style.color = "gray";
    logo.style.fontWeight = "500";
}

function changeColor(){
    amount.style.borderColor = "hsl(202, 55%, 16%)";
    euro.style.borderColor = "hsl(202, 55%, 16%)";
    euro.style.backgroundColor ="hsl(202, 86%, 94%)";
    logo.style.color = "gray";
    logo.style.fontWeight = "500";
    years.style.borderBlockColor = "hsl(61, 70%, 52%)";
    year.style.backgroundColor = "hsl(61, 70%, 52%)";
    year.style.borderColor = "hsl(61, 70%, 52%)";
    logo1.style.color = "white";
    rate.style.borderColor = "hsl(202, 55%, 16%)";
    pro.style.borderColor = "hsl(202, 55%, 16%)";
    pro.style.backgroundColor = "hsl(202, 86%, 94%)";
    pro.style.color = "gray";
    pro.style.fontWeight = "500";
}

function change(){
    amount.style.borderColor = "hsl(202, 55%, 16%)";
    euro.style.borderColor = "hsl(202, 55%, 16%)";
    euro.style.backgroundColor ="hsl(202, 86%, 94%)";
    logo.style.color = "gray";
    logo.style.fontWeight = "500";
    years.style.borderBlockColor = "hsl(202, 55%, 16%)";
    year.style.backgroundColor = "hsl(202, 86%, 94%)";
    year.style.borderColor = "hsl(202, 55%, 16%)";
    logo1.style.color = "gray";
    logo1.style.fontWeight = "500";
    rate.style.borderColor = "hsl(61, 70%, 52%)";
    pro.style.borderColor = "hsl(61, 70%, 52%)";
    pro.style.backgroundColor = "hsl(61, 70%, 52%)";
    pro.style.color = "white";
}

function changeRadio(){
    radio1.style.borderColor = "hsl(61, 70%, 52%)";
    radio1.style.backgroundColor  = "rgb(251, 251, 145)";
    radio2.style.borderColor = "hsl(202, 55%, 16%)";
    radio2.style.backgroundColor = "white";
}

function changeRadio1(){
    radio1.style.borderColor = "hsl(202, 55%, 16%)";
    radio1.style.backgroundColor  = "white";
    radio2.style.borderColor = "hsl(61, 70%, 52%)";
    radio2.style.backgroundColor = "rgb(251, 251, 145)";

}

myForm.addEventListener("submit", function(e){
    e.preventDefault();
    if(amount.value.trim() === ""){
        amount.style.borderBlockColor = "hsl(4, 69%, 50%)";
        euro.style.borderBlockColor = "hsl(4, 69%, 50%)";
        euro.style.backgroundColor = "hsl(4, 69%, 50%)";
        logo.style.color = "white";
        field.textContent = "This field is required";
        field.style.color = "hsl(4, 69%, 50%)";
        main.style.height = "73%";

    } else{
        amount.style.borderBlockColor = "hsl(202, 55%, 16%)";
        euro.style.borderBlockColor = "hsl(202, 55%, 16%)";
        euro.style.backgroundColor = "hsl(202, 86%, 94%)";
        field.textContent = "";
        logo.style.color = "gray";
        main.style.height = "69%";
    }
    if(years.value.trim() === ""){
        years.style.borderBlockColor = "hsl(4, 69%, 50%)";
        year.style.borderBlockColor = "hsl(4, 69%, 50%)";
        year.style.backgroundColor = "hsl(4, 69%, 50%)";
        logo1.style.color = "white";
        field1.textContent = "This field is required";
        field1.style.color = "hsl(4, 69%, 50%)";
    } else{
        years.style.borderBlockColor = "hsl(202, 55%, 16%)";
        year.style.borderBlockColor = "hsl(202, 55%, 16%)";
        year.style.backgroundColor = "hsl(202, 86%, 94%)";
        field1.textContent = "";
        logo1.style.color = "gray";
        main.style.height = "71%";
    }

    if(rate.value.trim() === ""){
        rate.style.borderBlockColor = "hsl(4, 69%, 50%)";
        rate.style.borderBlockColor = "hsl(4, 69%, 50%)";
        pro.style.backgroundColor = "hsl(4, 69%, 50%)";
        logo2.style.color = "white";
        field2.textContent = "This field is required";
        field2.style.color = "hsl(4, 69%, 50%)";
    } else{
        rate.style.borderBlockColor = "hsl(202, 55%, 16%)";
        rate.style.borderBlockColor = "hsl(202, 55%, 16%)";
        pro.style.backgroundColor = "hsl(202, 86%, 94%)";
        logo2.style.color = "white";
        field2.textContent = "";
        main.style.height = "69%";
    }

    if(!(repayment.checked) && !(interset.checked)){
        field3.textContent = "This field is required";
        field3.style.color = " hsl(4, 69%, 50%)";
        main.style.height = "79%";
    } else{
        field3.textContent = "";
        main.style.height = "69";
    }

    if(repayment.checked  && rate.value.trim() !== "" && years.value.trim() !== "" && amount.value.trim() !== ""){
        image.style.opacity = "0";
        result.style.opacity = "1";
        total = Math.round(Number(amount.value) / Number(years.value) * Number(rate.value),2);
        finalyResult.textContent = total;
        repay.textContent = total * 400000;
    }

    if(interset.checked && rate.value.trim() !== "" && years.value.trim() !== "" && amount.value.trim() !== ""){
        image.style.opacity = "0";
        result.style.opacity = "1";
        total = Math.round(Number(amount.value) * 2 / Number(years.value) * Number(rate.value),2);
        finalyResult.textContent = total;
        repay.textContent = total * 400000;
    }

    

})

