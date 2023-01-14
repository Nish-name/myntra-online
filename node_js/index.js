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

//geo location//

function geolocation() {
    let x = document.getElementById('output');
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        x.innerText = "Geo Not Supported"
    }
}

function showPosition(data) {
    console.log(data);
    let lat = data.coords.latitude;
    let long = data.coords.longitude;
    //let out = `Latitude is ${lat} & longitude is ${long}`
    
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    ///api calling
    fetch(url,{method: 'GET'})
    //return promise
    .then((res) => res.json())
    //return data
    .then((data) => {
        console.log(data)
        let city = data.city.name
        let temp = data.list[0].temp.day
        document.getElementById('output').innerHTML = Math.round(temp) + "&#8451;";
    })
}



