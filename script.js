function calculate(){

let total = Number(document.getElementById("total").value);
let present = Number(document.getElementById("present").value);
let bunk = Number(document.getElementById("bunk").value);

let newTotal = total + bunk;

let attendance = (present / newTotal) * 100;

let bar = document.getElementById("bar");

bar.style.width = attendance + "%";

let result = "Attendance: " + attendance.toFixed(2) + "%";

if(attendance < 75){

bar.style.background = "red";

let need = Math.ceil((0.75*newTotal - present)/(1-0.75));

result += "<br>⚠ Attendance low!";
result += "<br>Debar se bachne ke liye " + need + " classes aur attend karo.";

}

else{

bar.style.background = "lime";

result += "<br>✅ Safe! Debar nahi hoge.";

}

document.getElementById("output").innerHTML = result;

}