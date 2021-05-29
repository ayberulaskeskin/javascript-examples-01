let ayber="ayber"
let info =document.querySelector("#info")
let userName=prompt("Kullanıcı adınız")



  info.innerHTML=`${userName.length>0 ? userName :"Kullancı adı bulunamadı"}`


