function timeConversion(time){
// dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
// Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
//las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 
if (!time){return false;}
let a = time.split(":");  
if (a[0] >= "25" || a[1] >= "59" || (a[2] > "59" || !a[2] )){
    return false;
}
if (a[0] === "12" && a[2][2] === "A" ){
    a[0] = "00";   
}
if ((a[0] >= "01"  && a[2][2] === "P"  ) && (a[0] <= "11"  && a[2][2] === "P"  )){
    a[0] = String(Number(a[0]) + 12);    
}
let b = a[2].split("");  
b.pop();
b.pop();
a[2]= b.join("");    

return String(a.join(":"));  
}


                             

module.exports = {
    timeConversion
}


