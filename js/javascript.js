
let myName = prompt("İsminiz nedir?");
while(myName==="")
{
   myName = prompt("İsminizi girmediniz!");
}

document.querySelector("#myName").innerText = myName;


function showTime() {
 let date = new Date();
 let h = date.getHours();
 let m = date.getMinutes();
 let s = date.getSeconds();
 let day = date.getDay();
let arr =["Pazar","Pazartesi", "Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
let b =date.getSeconds();

 h = h < 10 ? "0" + h : h;
 m = m < 10 ? "0" + m : m;
 s = s < 10 ? "0" + s : s;

 let time = h + ":" + m + ":" + s + " " + arr[day];
 document.querySelector("#myClock").innerHTML = time;
 setTimeout(showTime, 1000);
}
showTime();
