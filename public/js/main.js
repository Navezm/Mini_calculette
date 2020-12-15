// // //Exo 1
let input1 = document.getElementsByClassName("input1");
let btn1 = document.getElementById("btn1");
let span1 = document.getElementById("response1");
let result1;

btn1.addEventListener("click", function(){
    span1.innerHTML = Number(input1[0].value) + Number(input1[1].value);
});

// // //Exo 2
let input2 = document.getElementsByClassName("input2");
let btn2 = document.getElementById("btn2");
let span2 = document.getElementById("response2");
let select = document.getElementById("select2");

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

// // // Exo 3
let input3 = document.getElementsByClassName("input3");
let btnEqual = document.getElementById("btnEqual");
let btn3 = document.getElementsByClassName("btn3");
let span3 = document.getElementById("response3");
let operatorChange = document.getElementById("operatorChange");
let operator;

for (let i = 0; i < btn3.length; i++) {
    if(i == 0){
        btn3[i].addEventListener("click", function(){
            operator = "+";
            operatorChange.setAttribute("class", "fas fa-plus");
        });
    } else if (i == 1){
        btn3[i].addEventListener("click", function(){
            operator = "-";
            operatorChange.setAttribute("class", "fas fa-minus");
        });
    } else if (i == 2){
        btn3[i].addEventListener("click", function(){
            operator = "*";
            operatorChange.setAttribute("class", "fas fa-times");
        });
    } else if (i == 3){
        btn3[i].addEventListener("click", function(){
            operator = "/";
            operatorChange.setAttribute("class", "fas fa-divide");
        });
    };
};


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

// // // Exo 4
let input4 = document.getElementsByClassName("input4");
let btnEqual2 = document.getElementById("btnEqual2");
let btnChiffre = document.getElementsByClassName("btnChiffre");
let btnOperator = document.getElementsByClassName("btnOperator");
let span4 = document.getElementById("response4");
let operatorChange2 = document.getElementById("OPchange");
let operator2;

// Event Opérateur
for (let i = 0; i < btnOperator.length; i++) {
    if(i == 0){
        btnOperator[i].addEventListener("click", function(){
            operator2 = "+";
            operatorChange2.setAttribute("class", "fas fa-plus");
        });
    } else if (i == 1){
        btnOperator[i].addEventListener("click", function(){
            operator2 = "-";
            operatorChange2.setAttribute("class", "fas fa-minus");
        });
    } else if (i == 2){
        btnOperator[i].addEventListener("click", function(){
            operator2 = "*";
            operatorChange2.setAttribute("class", "fas fa-times");
        });
    } else if (i == 3){
        btnOperator[i].addEventListener("click", function(){
            operator2 = "/";
            operatorChange2.setAttribute("class", "fas fa-divide");
        });
    };
};

// // Event Chiffre 
// Déclaration variable et input
let input4_1;
let input4_2;

input4[0].addEventListener("click", function(e){
    input4_1 = true;
    input4_2 = false;
    e.stopPropagation();
});

input4[1].addEventListener("click", function(e){
    input4_2 = true;
    input4_1 = false;
    e.stopPropagation();
});

// Events bouttons
for (let i = 0; i < btnChiffre.length; i++) {
    btnChiffre[i].addEventListener("click", function(){
        if(i == 9){
            if(input4_1){
                input4[0].value = input4[0].value + "0";
            } else if(input4_2){
                input4[1].value = input4[1].value + "0";
            };
        } else {
            if(input4_1){
                input4[0].value = input4[0].value + (i + 1);
            } else if(input4_2){
                input4[1].value = input4[1].value + (i + 1);
            };
        };
    });
};

// Event btn Egal
btnEqual2.addEventListener("click", function(){
    if(operator2 == "+"){
        span4.innerHTML = Number(input4[0].value) + Number(input4[1].value);
    } else if(operator2 == "-"){
        span4.innerHTML = Number(input4[0].value) - Number(input4[1].value);
    } else if(operator2 == "*"){
        span4.innerHTML = Number(input4[0].value) * Number(input4[1].value);
    } else if(operator2 == "/"){
        span4.innerHTML = Number(input4[0].value) / Number(input4[1].value);
    };
});