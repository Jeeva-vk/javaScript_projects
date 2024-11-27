//selecting popup attributes

var popupoverlay = document.querySelector(".popupoverlay")
var popupbox = document.querySelector(".popup-box")
var popupbtn = document.querySelector("#popup")

popupbtn.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
/* function f(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
} */


//selecting cancel btn
var cancelbtn = document.getElementById("cancel-bk")  

cancelbtn.addEventListener("click",function(event){
        event.preventDefault()
        popupoverlay.style.display="none"
        popupbox.style.display="none"
})

//selecting container,add-bk-button,bk-title-ip,bk-author-ip,bk-desc-ip

var container = document.querySelector(".container")
var addbook = document.getElementById("add-bk")
var bktitle = document.getElementById("bk-title-ip")
var bkauthor = document.getElementById("bk-author-ip")
var bkdesc = document.getElementById("bk-desc-ip")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","bk-container")
    div.innerHTML = ` <h2>${bktitle.value}</h2>
            <h5>S${bkauthor.value}</h5>
            <p>${bkdesc.value}</p>
            <button onclick="del(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function del(event){
    event.target.parentElement.remove()  //closest
} 