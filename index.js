function myFunction() {
    var element=document.body;element.classList.toggle("dark-mode")
}

async function loadCoupon() {
    document.getElementById('coupon').style.display = 'block';
    document.getElementById('coupon').style.marginTop = '0px';
    document.body.style.overflow = 'hidden';
    document.getElementById('main').style.opacity = '0.6';
    checkLocation()
}

function closeCoupon(){
    document.getElementById('coupon').style.display = 'none';
    document.getElementById('main').style.opacity = '1';
    document.body.style.overflow = 'scroll';
}