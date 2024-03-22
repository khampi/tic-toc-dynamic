document.getElementById("player").innerHTML = localStorage.getItem("Winner");

document.getElementById("btn").onclick = function(){
    window.open("index.html","_self");
}