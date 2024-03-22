let b1,b2,b3,b4,b5,b6,b7,b8,b9;

var winner = localStorage.setItem("Winner","");


function check(){
    console.log(b1,b2,b3,b4,b5,b6,b7,b8,b9)
    if(b1 === 'X' && b2 === 'X' && b3 ==='X' ||
    b1 === 'X' && b4 === 'X' && b7 ==='X' ||
    b1 === 'X' && b5 === 'X' && b9 ==='X' ||
    b2 === 'X' && b5 === 'X' && b8 ==='X' ||
    b3 === 'X' && b6 === 'X' && b9 ==='X' ||
    b4 === 'X' && b5 === 'X' && b6 ==='X' ||
    b7 === 'X' && b8 === 'X' && b9 ==='X' ||
    b3 === 'X' && b5 === 'X' && b7 ==='X' )
    {
            winner = 'X';
            localStorage.setItem("Winner",winner);
            window.open("gameover.html","_self");
    }
    else if(b1 === 'O' && b2 === 'O' && b3 ==='O' ||
    b1 === 'O' && b4 === 'O' && b7 ==='O' ||
    b1 === 'O' && b5 === 'O' && b9 ==='O' ||
    b2 === 'O' && b5 === 'O' && b8 ==='O' ||
    b3 === 'O' && b6 === 'O' && b9 ==='O' ||
    b4 === 'O' && b5 === 'O' && b6 ==='O' ||
    b7 === 'O' && b8 === 'O' && b9 ==='O' ||
    b3 === 'O' && b5 === 'O' && b7 ==='O' )
    {
        winner = 'O';
        localStorage.setItem("Winner",winner);
        window.open("gameover.html","_self");


      

        

    }
}


var c = 0;


document.getElementById("1").onclick = function(){
    c++;
    if(c%2==0){
        b1 = document.getElementById("1").innerHTML="O";
    }
    else{
        b1 = document.getElementById("1").innerHTML="X";
         
    }
    check();
   
    
   

}
document.getElementById("2").onclick = function(){
    c++;
    if(c%2==0){
       b2 = document.getElementById("2").innerHTML="O";
    }
    else{
       b2 = document.getElementById("2").innerHTML="X";
         
    }
    check();
    
}
document.getElementById("3").onclick = function(){
    c++;
    if(c%2==0){
        b3 = document.getElementById("3").innerHTML="O";
    }
    else{
        b3 = document.getElementById("3").innerHTML="X";
         
    }
    check();
    
}
document.getElementById("4").onclick = function(){
    c++;
    if(c%2==0){
        b4 = document.getElementById("4").innerHTML="O";
    }
    else{
        b4 = document.getElementById("4").innerHTML="X";
         
    }
    check();

}
document.getElementById("5").onclick = function(){
    c++;
    if(c%2==0){
        b5 = document.getElementById("5").innerHTML="O";
    }
    else{
        b5 = document.getElementById("5").innerHTML="X";
         
    }
    check();

}
document.getElementById("6").onclick = function(){
    c++;
    if(c%2==0){
        b6 = document.getElementById("6").innerHTML="O";
    }
    else{
       b6 = document.getElementById("6").innerHTML="X";
         
    }
    check();

}
document.getElementById("7").onclick = function(){
    c++;
    if(c%2==0){
       b7 = document.getElementById("7").innerHTML="O";
    }
    else{
        b7 = document.getElementById("7").innerHTML="X";
         
    }
    check();

}
document.getElementById("8").onclick = function(){
    c++;
    if(c%2==0){
       b8 = document.getElementById("8").innerHTML="O";
    }
    else{
       b8 =  document.getElementById("8").innerHTML="X";
         
    }
    check();

}
document.getElementById("9").onclick = function(){
    c++;
    if(c%2==0){
       b9 = document.getElementById("9").innerHTML="O";
    }
    else{
       b9 = document.getElementById("9").innerHTML="X";
         
    }
    check();

}

