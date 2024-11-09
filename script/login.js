//check if login
//localStorage.clear()
if ( localStorage.getItem("login2") === 'passed11' ) {
    console.log('pass');
} else {
    window.location.href = ("../index.html");
}

document.getElementById('welc').innerText = localStorage.getItem("nameper");
document.getElementById('welc5').innerText = localStorage.getItem("nameper");
document.getElementById('welc6').innerText = localStorage.getItem("numberper");
document.getElementById('welc7').innerText = localStorage.getItem("passper");
document.getElementById('welc8').innerText = localStorage.getItem("plan");
let totalsum1 = localStorage.getItem("checkbox01") - 1 + 1;
let totalsum2 = localStorage.getItem("checkbox02") - 1 + 1;
let totalsum3 = localStorage.getItem("checkbox03") - 1 + 1;
let totalsum4 = localStorage.getItem("planprice") - 1 + 1;
let totalsum5 = totalsum1+totalsum2+totalsum3+totalsum4;
document.getElementById('welc9').innerText = "$"+totalsum5+"/mo";

document.getElementById('sum-2-1').innerText = "$"+localStorage.getItem("checkbox01")+"/mo";
//check if login 