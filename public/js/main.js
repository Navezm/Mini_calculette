// Exo 1
let input1 = document.getElementsByClassName("input1");
let btn1 = document.getElementById("btn1");
let span1 = document.getElementById("response1");
let result1;

btn1.addEventListener("click", function(){
    span1.innerHTML = Number(input1[0].value) + Number(input1[1].value);
});

// Exo 2
let input2 = document.getElementsByClassName("input2");
let btn2 = document.getElementById("btn2");
let span2 = document.getElementById("response2");
let option = document.getElementsByTagName("option");
let select = document.getElementById("select2");
let result2;

btn2.addEventListener("click", function(){
    if(select.value == "+"){
        span2.innerHTML = Number(input2[0].value) + Number(input2[1].value);
    } else if (select.value == "-"){
        span2.innerHTML = Number(input2[0].value) - Number(input2[1].value);
    } else if (select.value == "*"){
        span2.innerHTML = Number(input2[0].value) * Number(input2[1].value);
    } else if (select.value == "/"){
        span2.innerHTML = Number(input2[0].value) / Number(input2[1].value);
    };
});

// Exo 3
let input3 = document.getElementsByClassName("input3");
let btnEqual = document.getElementById("btnEqual");
let btn3 = document.getElementsByClassName("btn3");
let span3 = document.getElementById("response3");
let result3;
let operator;

for (let i = 0; i < btn3.length; i++) {
    if(i == 0){
        btn3[i].addEventListener("click", function(){
            operator = "+";
        });
    } else if (i == 1){
        btn3[i].addEventListener("click", function(){
            operator = "-";
        });
    } else if (i == 2){
        btn3[i].addEventListener("click", function(){
            operator = "*";
        });
    } else if (i == 3){
        btn3[i].addEventListener("click", function(){
            operator = "/";
        });
    };
};

for (let i = 0; i < btn3.length; i++) {
    btnEqual.addEventListener("click", function(){
        if(operator == "+"){
            span3.innerHTML = Number(input3[0].value) + Number(input3[1].value);
        } else if(operator == "-"){
            span3.innerHTML = Number(input3[0].value) - Number(input3[1].value);
        } else if(operator == "*"){
            span3.innerHTML = Number(input3[0].value) * Number(input3[1].value);
        } else if(operator == "/"){
            span3.innerHTML = Number(input3[0].value) / Number(input3[1].value);
        };
    });
};