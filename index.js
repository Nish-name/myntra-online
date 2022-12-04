function myFunction() {
    var element=document.body;element.classList.toggle("dark-mode")
}

function loadcoupen() {
    document.getElementById('coupon').style.visibility = 'visible'
    document.getElementById('main').style.opacity = '0.7' ;
}

function closecoupen() {
    document.getElementById('coupon').style.visibility = 'hidden'
    document.getElementById('main').style.opacity = '1' ;
}

