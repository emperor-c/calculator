var sum = "";

function myFunction1(){
    if(document.getElementById("fname").innerHTML == "0"){
        sum = "1";
    }else{
        sum = sum + "1";
    }

    if(sum.length > 10){
        sum = sum.substring(0, 10);
    }
    
    document.getElementById("fname").innerHTML = sum;  
}

function myFunction2(){
    if(document.getElementById("fname").innerHTML == "0"){
        sum = "2";
    }else{
        sum = sum + "2";
    }

    if(sum.length > 10){
        sum = sum.substring(0, 10);
    }

    document.getElementById("fname").innerHTML = sum;
}

function myFunction3(){
    if(document.getElementById("fname").innerHTML == "0"){
        sum = "3";
    }else{
        sum = sum + "3";
    }

    if(sum.length > 10){
        sum = sum.substring(0, 10);
    }

    document.getElementById("fname").innerHTML = sum;
}

function myFunction4(){
    if(!sum.includes("+")){
        sum = sum + "+";

        if(sum.length > 10){
            sum = sum.substring(0, 10);
        }

        document.getElementById("fname").innerHTML = sum;
    }
}

function myFunction5(){
    if(document.getElementById("fname").innerHTML == "0"){
        sum = "4";
    }else{
        sum = sum + "4";
    }

    if(sum.length > 10){
        sum = sum.substring(0, 10);
    }

    document.getElementById("fname").innerHTML = sum;
}

function myFunction6(){
    if(document.getElementById("fname").innerHTML == "0"){
        sum = "5";
    }else{
        sum = sum + "5";
    }

    if(sum.length > 10){
        sum = sum.substring(0, 10);
    }

    document.getElementById("fname").innerHTML = sum;
}

function myFunction7(){
    if(document.getElementById("fname").innerHTML == "0"){
        sum = "6";
    }else{
        sum = sum + "6";
    }

    if(sum.length > 10){
        sum = sum.substring(0, 10);
    }

    document.getElementById("fname").innerHTML = sum;
}

function myFunction8(){
    if(document.getElementById("fname").innerHTML == "0"){
        sum = "-";
    }else{
        sum = sum + "-";
    }

    if(sum.length > 10){
        sum = sum.substring(0, 10);
    }

    document.getElementById("fname").innerHTML = sum;
}

function myFunction9(){
    if(document.getElementById("fname").innerHTML == "0"){
        sum = "7";
    }else{
        sum = sum + "7";
    }

    if(sum.length > 10){
        sum = sum.substring(0, 10);
    }

    document.getElementById("fname").innerHTML = sum;
}

function myFunction10(){
    if(document.getElementById("fname").innerHTML == "0"){
        sum = "8";
    }else{
        sum = sum + "8";
    }

    if(sum.length > 10){
        sum = sum.substring(0, 10);
    }

    document.getElementById("fname").innerHTML = sum;
}

function myFunction11(){
    if(document.getElementById("fname").innerHTML == "0"){
        sum = "9";
    }else{
        sum = sum + "9";
    }

    if(sum.length > 10){
        sum = sum.substring(0, 10);
    }

    document.getElementById("fname").innerHTML = sum;
}

function myFunction12(){
    if(document.getElementById("fname").innerHTML == "0"){
        sum = "*";
    }else{
        sum = sum + "*";
    }

    if(sum.length > 10){
        sum = sum.substring(0, 10);
    }

    document.getElementById("fname").innerHTML = sum;
}

function myFunction13(){
    if(document.getElementById("fname").innerHTML == "0"){
        sum = "0";
    }else{
        sum = sum + "0";
    }

    if(sum.length > 10){
        sum = sum.substring(0, 10);
    }

    document.getElementById("fname").innerHTML = sum;
}

function myFunction14(){
    if(document.getElementById("fname").innerHTML == "0"){
        sum = "0.";
    }else{
        sum = sum + ".";
    }

    if(sum.length > 10){
        sum = sum.substring(0, 10);
    }

    document.getElementById("fname").innerHTML = sum;
}

function myFunction15(){
    let myArray;
    let number1;
    let number2;
    let result;

    if(sum.includes("+")){
        myArray = sum.split("+");
        number1 = parseFloat(myArray[0]);
        number2 = parseFloat(myArray[1]);
        result = number1 + number2;
    }else if(sum.includes("-")){
        myArray = sum.split("-");
        number1 = parseFloat(myArray[0]);
        number2 = parseFloat(myArray[1]);
        result = number1 - number2;
    }else if(sum.includes("*")){
        myArray = sum.split("*");
        number1 = parseFloat(myArray[0]);
        number2 = parseFloat(myArray[1]);
        result = number1 * number2;
    }else if(sum.includes("/")){
        myArray = sum.split("/");
        number1 = parseFloat(myArray[0]);
        number2 = parseFloat(myArray[1]);
        result = number1 / number2;
    }

    let resultInString = result.toString();
    if(resultInString.length > 10){
        let trimmedString = resultInString.substring(0, 10);
        document.getElementById("fname").innerHTML = trimmedString;
    }else{
        document.getElementById("fname").innerHTML = result;
    }

    sum = "";
}

function myFunction16(){
    if(document.getElementById("fname").innerHTML == "0"){
        sum = "/";
    }else{
        sum = sum + "/";
    }

    if(sum.length > 10){
        sum = sum.substring(0, 10);
    }

    document.getElementById("fname").innerHTML = sum;
}

function myFunction17(){
    document.getElementById("fname").innerHTML = "0";
    sum = "";
}