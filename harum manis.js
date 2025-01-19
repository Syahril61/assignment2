var delay = 500;

button1 = document.getElementById("button1");
button2 = document.getElementById("button2");
button3 = document.getElementById("button3");

const explanation = document.getElementsByClassName("explain");
main = document.getElementById("main");
benefit = document.getElementById("benefit");
route = document.getElementById("location");
whatsapp = document.getElementById("whatsapplink");

function mainFunction() {
    route.style.display = "none";
    benefit.style.display = "none";
    main.style.display = "block";
    button2.style.backgroundColor = "rgb(" + 28 + "," + 51 + "," + 51 + ")";
    button3.style.backgroundColor = "rgb(" + 28 + "," + 51 + "," + 51 + ")";
    button1.style.backgroundColor = "rgb(" + 37 + "," + 90 + "," + 72 + ")";
}

function benefitFunction() {
    route.style.display = "none";
    main.style.display = "none";
    benefit.style.display = "block";
    button1.style.backgroundColor = "rgb(" + 28 + "," + 51 + "," + 51 + ")";
    button3.style.backgroundColor = "rgb(" + 28 + "," + 51 + "," + 51 + ")";
    button2.style.backgroundColor = "rgb(" + 37 + "," + 90 + "," + 72 + ")";
}

function locationFunction() {
    main.style.display = "none";
    benefit.style.display = "none";
    route.style.display = "block";
    button1.style.backgroundColor = "rgb(" + 28 + "," + 51 + "," + 51 + ")";
    button2.style.backgroundColor = "rgb(" + 28 + "," + 51 + "," + 51 + ")";
    button3.style.backgroundColor = "rgb(" + 37 + "," + 90 + "," + 72 + ")";
}

function Time() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
    setTimeout(Time, 1000);
}

function expand(x){
    explanation[x].style.display="block"
}
function normal(x){
    explanation[x].style.display="none"
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function submitFunction() {
    const name = document.querySelector("input").value;
    if(name){
        document.getElementById("entertext").innerHTML =
        "Hello " + name + ", please contact this number below:";
        document.getElementById("ws").style.display = "block";  
    }
}
