let turno = 0;
let tablero = "";
let str = " ";
let strv = " ";
let strd = " ";
let erx = /xxx/;
let ero = /ooo/;
function fill(name){
    if(turno == 0 || turno == 2 || turno == 4 || turno == 6 || turno == 8 ){
        if(turno == 8){
            winner('e');
        }
        document.getElementById(name).innerHTML = 'X';
        tablero[name.slice(3, 4)] = 'x';

        document.getElementById('demo').innerHTML = tablero;
        document.getElementById(name).disabled = true;
        turno = turno + 1;
        if(turno >= 5){
            check3inline();
        }
    }else{
        document.getElementById(name).innerHTML = 'O';
        tablero[name.slice(3, 4)] = 'o';
        document.getElementById(name).disabled = true;
        turno = turno + 1;
        if(turno >= 5){
            check3inline();
        }
    }
}
function check3inline(){
    for(let i = 0; i < 9; i++){
        str = str + tablero[i];
        if(i == 2){
            str = str + " ";
        }else if(i == 5){
            str = str + " ";
        }
    }
    for(let c = 0; c < 3; c++){
        for(let i = c; i < 9; i = i + 3){
            strv = strv + tablero[i];
        }
        strv = strv + " ";
    }
    for(let i = 0; i < 9; i = i + 4){
        strd = strd + tablero[i];
    }
    strd = strd + " ";
    for(let i = 2; i < 7; i = i + 2){
        strd = strd + tablero[i];
    }
    if(erx.test(str) || erx.test(strv) || erx.test(strd)){
        winner('x');
    }
    if(ero.test(str) || ero.test(strv) || ero.test(strd)){
        winner('o');
    }
    str = "";
    strv = "";
    strd = "";
}

function reset(){
    document.getElementById('btn0').disabled = false;
    document.getElementById('btn1').disabled = false;
    document.getElementById('btn2').disabled = false;
    document.getElementById('btn3').disabled = false;
    document.getElementById('btn4').disabled = false;
    document.getElementById('btn5').disabled = false;
    document.getElementById('btn6').disabled = false;
    document.getElementById('btn7').disabled = false;
    document.getElementById('btn8').disabled = false;
    document.getElementById('btn0').innerHTML = '';
    document.getElementById('btn1').innerHTML = '';
    document.getElementById('btn2').innerHTML = '';
    document.getElementById('btn3').innerHTML = '';
    document.getElementById('btn4').innerHTML = '';
    document.getElementById('btn5').innerHTML = '';
    document.getElementById('btn6').innerHTML = '';
    document.getElementById('btn7').innerHTML = '';
    document.getElementById('btn8').innerHTML = '';
    document.getElementById('winner').style.display = 'none';
    turno = 0;
    str = " ";
    strv = " ";
    strd = " ";
    tablero = [];
}
function winner(p){
    if(p == 'x'){
        document.getElementById('winner').innerHTML = 'Ganador: X';
        document.getElementById('winner').style.display = 'block';
    }else if(p == 'o'){
        document.getElementById('winner').innerHTML = 'Ganador: O';
        document.getElementById('winner').style.display = 'block';
    }else{
        document.getElementById('winner').innerHTML = 'Empate';
        document.getElementById('winner').style.display = 'block';
    }
    document.getElementById('btn0').disabled = true;
    document.getElementById('btn1').disabled = true;
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn3').disabled = true;
    document.getElementById('btn4').disabled = true;
    document.getElementById('btn5').disabled = true;
    document.getElementById('btn6').disabled = true;
    document.getElementById('btn7').disabled = true;
    document.getElementById('btn8').disabled = true;
}