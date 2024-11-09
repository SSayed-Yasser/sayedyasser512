//personal-info js-code

if ( localStorage.getItem("login2") === 'passed11' ) {
    console.log('pass');
    //window.location.href = ("../login.html");
} else {
    function button1() {
        const perName = document.getElementById('name').value;
        const pernumber = document.getElementById('number').value;
        const perpass = document.getElementById('password').value;
        if ( perName === '', pernumber === '', perpass === '' ) {
            console.log('empty');
            if (perName === '') {
                document.getElementById('name').style.border = '#ff0000 solid 0.5px' 
            } else {
                document.getElementById('name').style.border = '#013659 solid 0.5px'
            }
            if (pernumber === '') {
                document.getElementById('number').style.border = '#ff0000 solid 0.5px' 
            } else {
                document.getElementById('number').style.border = '#013659 solid 0.5px'
            }
            if (perpass === '') {
                document.getElementById('password').style.border = '#ff0000 solid 0.5px' 
            } else {
                document.getElementById('password').style.border = '#013659 solid 0.5px'
            }
        } else {
            document.getElementById('personal-info').style.display = 'none';
            document.getElementById('personal-plan').style.display = 'block';
            document.getElementById('step10').style.backgroundColor = '#00000000';
            document.getElementById('step01').style.color = '#ffffff';
            document.getElementById('step30').style.backgroundColor = '#00000000';
            document.getElementById('step03').style.color = '#ffffff';
            document.getElementById('step40').style.backgroundColor = '#00000000';
            document.getElementById('step04').style.color = '#ffffff';
            document.getElementById('step20').style.backgroundColor = '#ffffff';
            document.getElementById('step02').style.color = '#000000';
            const timen = Date();
            console.log(timen);
            localStorage.clear();
            localStorage.setItem("nameper",perName);   
            localStorage.setItem("numberper",pernumber);
            localStorage.setItem("passper",perpass);
            localStorage.setItem("time",timen);
            //localStorage.setItem("login2",'passed11');
            console.log('not-pass-fan');
        }
    };
    console.log('not-pass');
}
//personal-info js-code

//personal-plan js-code
if ( localStorage.getItem("plan") === null ) {
    const saveplan = 'Arcade';
    const saveplanprice = '0';
    document.getElementById('plan001').style.border = '#013659 solid 1px';
    document.getElementById('plan001').style.boxShadow = '#013659 2px 2px 10px';
    //
    document.getElementById('plan002').style.border = '#01365985 solid 1px';
    document.getElementById('plan002').style.boxShadow = '#013659 0px 0px 0px';
    document.getElementById('plan003').style.border = '#01365985 solid 1px';
    document.getElementById('plan003').style.boxShadow = '#013659 0px 0px 0px';
    localStorage.setItem("plan",saveplan);
    localStorage.setItem("planprice",saveplanprice)
    document.getElementById('getplan').innerHTML = localStorage.getItem("plan");
    document.getElementById('getplan1').innerHTML = localStorage.getItem("planprice");
}
if ( localStorage.getItem("plan") === 'Arcade' ) {
    const saveplan = 'Arcade';
    const saveplanprice = '0';
    document.getElementById('plan001').style.border = '#013659 solid 1px';
    document.getElementById('plan001').style.boxShadow = '#013659 2px 2px 10px';
    //
    document.getElementById('plan002').style.border = '#01365985 solid 1px';
    document.getElementById('plan002').style.boxShadow = '#013659 0px 0px 0px';
    document.getElementById('plan003').style.border = '#01365985 solid 1px';
    document.getElementById('plan003').style.boxShadow = '#013659 0px 0px 0px';
    localStorage.setItem("plan",saveplan);
    localStorage.setItem("planprice",saveplanprice)
    document.getElementById('getplan').innerHTML = localStorage.getItem("plan");
    document.getElementById('getplan1').innerHTML = localStorage.getItem("planprice");
}
if ( localStorage.getItem("plan") === 'Advanced' ) {
    const saveplan = 'Advanced';
    const saveplanprice = '8';
    document.getElementById('plan002').style.border = '#013659 solid 1px';
    document.getElementById('plan002').style.boxShadow = '#013659 2px 2px 10px';
    //
    document.getElementById('plan001').style.border = '#01365985 solid 1px';
    document.getElementById('plan001').style.boxShadow = '#013659 0px 0px 0px';
    document.getElementById('plan003').style.border = '#01365985 solid 1px';
    document.getElementById('plan003').style.boxShadow = '#013659 0px 0px 0px';
    localStorage.setItem("plan",saveplan)
    localStorage.setItem("planprice",saveplanprice)
    document.getElementById('getplan').innerHTML = localStorage.getItem("plan");
    document.getElementById('getplan1').innerHTML = localStorage.getItem("planprice");
}
if ( localStorage.getItem("plan") === 'Pro' ) {
    const saveplan = 'Pro';
    const saveplanprice = '20';
    document.getElementById('plan003').style.border = '#013659 solid 1px';
    document.getElementById('plan003').style.boxShadow = '#013659 2px 2px 10px';
    //
    document.getElementById('plan002').style.border = '#01365985 solid 1px';
    document.getElementById('plan002').style.boxShadow = '#013659 0px 0px 0px';
    document.getElementById('plan001').style.border = '#01365985 solid 1px';
    document.getElementById('plan001').style.boxShadow = '#013659 0px 0px 0px';
    localStorage.setItem("plan",saveplan)
    localStorage.setItem("planprice",saveplanprice)
    document.getElementById('getplan').innerHTML = localStorage.getItem("plan");
    document.getElementById('getplan1').innerHTML = localStorage.getItem("planprice");
}

function plan0001() {
    const saveplan = 'Arcade';
    const saveplanprice = '0';
    document.getElementById('plan001').style.border = '#013659 solid 1px';
    document.getElementById('plan001').style.boxShadow = '#013659 2px 2px 10px';
    //
    document.getElementById('plan002').style.border = '#01365985 solid 1px';
    document.getElementById('plan002').style.boxShadow = '#013659 0px 0px 0px';
    document.getElementById('plan003').style.border = '#01365985 solid 1px';
    document.getElementById('plan003').style.boxShadow = '#013659 0px 0px 0px';
    localStorage.setItem("plan",saveplan)
    localStorage.setItem("planprice",saveplanprice)
    document.getElementById('getplan').innerHTML = localStorage.getItem("plan");
    document.getElementById('getplan1').innerHTML = localStorage.getItem("planprice");
}
function plan0002() {
    const saveplan = 'Advanced';
    const saveplanprice = '8';
    document.getElementById('plan002').style.border = '#013659 solid 1px';
    document.getElementById('plan002').style.boxShadow = '#013659 2px 2px 10px';
    //
    document.getElementById('plan001').style.border = '#01365985 solid 1px';
    document.getElementById('plan001').style.boxShadow = '#013659 0px 0px 0px';
    document.getElementById('plan003').style.border = '#01365985 solid 1px';
    document.getElementById('plan003').style.boxShadow = '#013659 0px 0px 0px';
    localStorage.setItem("plan",saveplan)
    localStorage.setItem("planprice",saveplanprice)
    document.getElementById('getplan').innerHTML = localStorage.getItem("plan");
    document.getElementById('getplan1').innerHTML = localStorage.getItem("planprice");
}
function plan0003() {
    const saveplan = 'Pro';
    const saveplanprice = '20';
    document.getElementById('plan003').style.border = '#013659 solid 1px';
    document.getElementById('plan003').style.boxShadow = '#013659 2px 2px 10px';
    //
    document.getElementById('plan002').style.border = '#01365985 solid 1px';
    document.getElementById('plan002').style.boxShadow = '#013659 0px 0px 0px';
    document.getElementById('plan001').style.border = '#01365985 solid 1px';
    document.getElementById('plan001').style.boxShadow = '#013659 0px 0px 0px';
    localStorage.setItem("plan",saveplan)
    localStorage.setItem("planprice",saveplanprice)
    document.getElementById('getplan').innerHTML = localStorage.getItem("plan");
    document.getElementById('getplan1').innerHTML = localStorage.getItem("planprice");
}

function button2() {
    document.getElementById('personal-plan').style.display = 'none';
    document.getElementById('personal-ons').style.display = 'block';
    document.getElementById('step10').style.backgroundColor = '#00000000';
    document.getElementById('step01').style.color = '#ffffff';
    document.getElementById('step20').style.backgroundColor = '#00000000';
    document.getElementById('step02').style.color = '#ffffff';
    document.getElementById('step40').style.backgroundColor = '#00000000';
    document.getElementById('step04').style.color = '#ffffff';
    document.getElementById('step30').style.backgroundColor = '#ffffff';
    document.getElementById('step03').style.color = '#000000';
}
//personal-plan js-code

//add-ons js-code
var checkbox1 = document.getElementById('checkbox-ons1');
var checkbox2 = document.getElementById('checkbox-ons2');
var checkbox3 = document.getElementById('checkbox-ons3');
function checkboxFun() {
    if ( checkbox1.checked) {
        localStorage.setItem("checkbox01",1);
    } else {
        localStorage.setItem("checkbox01",0);
    }
    if ( checkbox2.checked) {
        localStorage.setItem("checkbox02",2);
    } else {
        localStorage.setItem("checkbox02",0);
    }
    if ( checkbox3.checked) {
        localStorage.setItem("checkbox03",2);
    } else {
        localStorage.setItem("checkbox03",0);
    }
}
function button3() {
    document.getElementById('personal-summary').style.display = 'block';
    document.getElementById('personal-ons').style.display = 'none';
    document.getElementById('step10').style.backgroundColor = '#00000000';
    document.getElementById('step01').style.color = '#ffffff';
    document.getElementById('step20').style.backgroundColor = '#00000000';
    document.getElementById('step02').style.color = '#ffffff';
    document.getElementById('step30').style.backgroundColor = '#00000000';
    document.getElementById('step03').style.color = '#ffffff';
    document.getElementById('step40').style.backgroundColor = '#ffffff';
    document.getElementById('step04').style.color = '#000000';
    mytotal()
}
//add-ons js-code


//personal-summary js-code
mytotal()
function mytotal() {
    document.getElementById('sum-plan-name').innerText = localStorage.getItem("plan");
document.getElementById('sum-plan-price').innerText = "$"+localStorage.getItem("planprice")+"/mo";

if ( localStorage.getItem("checkbox01") === "1") {
    document.getElementById('sum-1-1').style.display = 'block';
    document.getElementById('sum-1-1').style.display = 'flex';
    document.getElementById('sum-2-1').innerText = "$"+localStorage.getItem("checkbox01")+"/mo";
} else {
    document.getElementById('sum-1-1').style.display = 'none';
}

if ( localStorage.getItem("checkbox02") === "2") {
    document.getElementById('sum-1-2').style.display = 'block';
    document.getElementById('sum-1-2').style.display = 'flex';
    document.getElementById('sum-2-2').innerText = "$"+localStorage.getItem("checkbox02")+"/mo";
} else {
    document.getElementById('sum-1-2').style.display = 'none';
}

if ( localStorage.getItem("checkbox03") === "2") {
    document.getElementById('sum-1-3').style.display = 'block';
    document.getElementById('sum-1-3').style.display = 'flex';
    document.getElementById('sum-2-3').innerText = "$"+localStorage.getItem("checkbox03")+"/mo";
} else {
    document.getElementById('sum-1-3').style.display = 'none';
}

let totalsum1 = localStorage.getItem("checkbox01") - 1 + 1;
let totalsum2 = localStorage.getItem("checkbox02") - 1 + 1;
let totalsum3 = localStorage.getItem("checkbox03") - 1 + 1;
let totalsum4 = localStorage.getItem("planprice") - 1 + 1;
let totalsum5 = totalsum1+totalsum2+totalsum3+totalsum4;
document.getElementById('total-p-s').innerText = "$"+totalsum5+"/mo";
}
function removeacc() {
    localStorage.clear()
    //window.location.href = ("../index.html");
}
function button4() {
    window.location.href = ("../login.html");
    localStorage.setItem("login2",'passed11');
}

//personal-summary js-code
