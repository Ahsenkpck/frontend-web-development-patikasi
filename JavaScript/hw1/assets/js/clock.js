  let hrElement = document.querySelector(".hr");
let minElement = document.querySelector(".min");
let secElement = document.querySelector(".sec");
let nameElement = document.querySelector("#myName");
let dayElement = document.querySelector(".day");
const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

let hr, min, sec, day, name;
name = window.prompt("Adınız nedir? ");
nameElement.innerHTML = name;

setInterval(function(){
    hr = new Date().getHours();
    min = new Date().getMinutes();
    sec = new Date().getSeconds();
    day = new Date().getDay();

    hrElement.innerHTML = hr<10 ? `0${hr}`: hr;
    minElement.innerHTML = min<10 ? `0${min}` : min;
    secElement.innerHTML = sec<10 ? `0${sec}` : sec;
    dayElement.innerHTML = days[day];

},1000);