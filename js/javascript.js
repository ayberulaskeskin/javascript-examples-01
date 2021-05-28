

let main=document.querySelector("#main")
main.classList.add("background")


var randomSayi = Math.floor(Math.random() * 10);

//Girdiğimiz sayıyı aklında tutması için prompt değişkene atanır

var tahmin = prompt("1-10'a kadar bir sayı gir ve rastgele sayıyı bulmaya çalış!");

if (tahmin === randomSayi && tahmin != null) alert("Bildin!!!");
else if (tahmin == "") alert("Boş giriş yaptınız!");
else if (tahmin == null) alert("Giriş yapmaktan vazgeçtiniz!");
else {
  alert("Bir daha denee :(, Random sayi: " + randomSayi);
}


