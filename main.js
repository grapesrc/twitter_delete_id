

function kesu(){
    var element = document.getElementsByClassName('css-18t94o4');

    console.log("aaaaaaaaaaaaaaaaaaaaa")

for(var i = 0;i < element.length;i++){
    if(element[i].getAttribute("aria-label") == "アカウントメニュー"){
        element[i].parentNode.removeChild(element[i]);
        clearInterval(interval)
        break;
    }
}
}

var interval = setInterval(kesu,3000)