
let result = document.getElementsByTagName("input");

let calculate=(number)=>{
    result[0].value += number;
}

// let operation= eval
// {
//     add,sub,mul,div{
//         two numbers(a,b)
//     }
// }

let Result=()=>{
    
        result[0].value = eval(result[0].value)
    
    //  (err) {
    //     alert("enter the valid result");
    // }
}

function clr() {
    result[0].value="0";
}

function del() {
    result[0].value=result[0].value.slice(0,-1);
}

//mode//

// let body= document.querySelector('body');
// Mode.classlist.contains('fa-sun')
// body.setAttribute('data-theme', 'dark');
// body.setAttribute('data-theme', 'light');

