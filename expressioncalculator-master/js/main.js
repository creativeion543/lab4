function include(url) {
    let script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

include("js/calc.js");
let calc = new MathCalc();

document.getElementById('btn').addEventListener('click', function(){
    let expressionString = document.getElementById("calc").innerHTML;

    if(!expressionString){
        alert("No expression given");
        return;
    }

    let expr = calc.parse(expressionString.replace(new RegExp("<br>", 'g'), ""));

    if (expr.error) {
        alert(expressionString + ' : ' + expr.error.text);
    }else {
        let res = expr.eval();

        document.getElementById("exp").innerHTML = expressionString;
        document.getElementById("result").innerHTML = res;
    }
}, false);

// Prevent enter in content editable
document.getElementById("calc").addEventListener("keydown", function(e){
    return e.which !== 13;
}, false);

document.getElementById('button-1').addEventListener('click',function (){
    document.getElementById('calc').innerText += '1';
})
document.getElementById('button-2').addEventListener('click',function (){
    document.getElementById('calc').innerText += '2';
})
document.getElementById('button-3').addEventListener('click',function (){
    document.getElementById('calc').innerText += '3';
})
document.getElementById('button-4').addEventListener('click',function (){
    document.getElementById('calc').innerText += '4';
})
document.getElementById('button-5').addEventListener('click',function (){
    document.getElementById('calc').innerText += '5';
})
document.getElementById('button-6').addEventListener('click',function (){
    document.getElementById('calc').innerText += '6';
})
document.getElementById('button-7').addEventListener('click',function (){
    document.getElementById('calc').innerText += '7';
})
document.getElementById('button-8').addEventListener('click',function (){
    document.getElementById('calc').innerText += '8';
})
document.getElementById('button-9').addEventListener('click',function (){
    document.getElementById('calc').innerText += '9';
})
document.getElementById('button-0').addEventListener('click',function (){
    document.getElementById('calc').innerText += '0';
})
document.getElementById('button-+').addEventListener('click',function (){
    document.getElementById('calc').innerText += '+';
})
document.getElementById('button--').addEventListener('click',function (){
    document.getElementById('calc').innerText += '-';
})
document.getElementById('button-*').addEventListener('click',function (){
    document.getElementById('calc').innerText += '*';
})
document.getElementById('button-/').addEventListener('click',function (){
    document.getElementById('calc').innerText += '/';
})
document.getElementById('button-+-').addEventListener('click',function (){
   var e = document.getElementById('calc').innerText;
    document.getElementById('calc').innerText = `${-e}`;
})
document.getElementById('button-(').addEventListener('click',function (){
    document.getElementById('calc').innerText += '(';
})
document.getElementById('button-)').addEventListener('click',function (){
    document.getElementById('calc').innerText += ')';
})
document.getElementById('button-backspace').addEventListener('click',function (){
    document.getElementById('calc').innerHTML = document.getElementById('calc').innerHTML.replace(/.$/, '');
})
document.getElementById('button-mod').addEventListener('click',function (){
    document.getElementById('calc').value += '%';
})
document.getElementById('button-cc').addEventListener('click',function (){
    document.getElementById('calc').innerText = '';
})
document.getElementById('button-M+').addEventListener('click',function (){
    var rez = +document.getElementById('calc').innerText ;
    var rezMR = +document.getElementById('result').innerText;
    var val = rezMR + rez;
    document.getElementById('result').innerText = `${val}`;
})
document.getElementById('button-MR').addEventListener('click',function (){
    var rez = +document.getElementById('calc').innerText ;
  document.getElementById('exp').innerText += rez;
})
document.getElementById('button-MC').addEventListener('click',function (){
    document.getElementById('result').innerText = '';
})
document.getElementById('button-с').addEventListener('click',function (){
    document.getElementById('calc').innerText += '';
})



