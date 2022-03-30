
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"
    let newArray = [];
    for (let i = array.length-1; i >= 0; i--){
        if ((array[i] < 10 && array[i] > 0) || array[i].length < 2){
            newArray.push(array[i]);
        }        
    } 
    return newArray; 
};
console.log(invertirOrden([1, 4, 24, 10, 8])); // [8, 4, 1]


function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos
    let valorComun ;    
    let menor ;
    for(let i = 0; i < array1.length; i++){
        for(let j = 0; j < array2.length; j++){
            if (array1[i] === array2[j]){
                return valorComun = array1[i];                
            }  
            var newArray = array1 + ","+ array2;            
            menor = newArray.split(",").sort(function ab(a,b){return a-b});
            valorComun = Number(menor[0]);                                    
        }
    }
    return valorComun;      
};
console.log (newArray);
console.log(numeroEnComun([10, 15, 24], [2, 19, 10])); // 10
console.log(numeroEnComun([3, 6, 10, 11], [2, 4, 5, 2])); // 2



function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
   let newArray = [];
   array.forEach(element => {
       if (Array.isArray(element) && element.length === 2){
           newArray.push(element[0] + element[1]);
       }  
       else if (typeof element === 'number'){
           newArray.push(element);
       }     
   });
   return newArray;
};
console.log(sumaDeArrays([[1, 3], [10, 20], [4, 5], 2])); // [4, 30, 9, 2]


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false
    let array = [];
    if (numero % divisor !== 0){
        return false;
    }
    let contador = 0;
    let divicion = numero/divisor;      
    while(contador < divisor){
        array.push(divicion);
        contador++
    }
    return array;
};
console.log(mismoValorMismosElementos(10, 2)); // [5, 5]


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
    let menorMayor = [];
    // array.sort(function comparar(a,b){return a-b});
    // menorMayor.push(array[0]);
    // menorMayor.push(array[array.length-1]);  
    let menor = array[0];
    let mayor = array[0];
    //     [2, 4, 9, 1]
    //      i
    for (let i = 0; i < array.length; i++){
        if (array[i] < menor){
            menor = array[i];            
        }
        if (array[i] > mayor){
            mayor = array[i];            
        }
    }
    menorMayor.push(menor);
    menorMayor.push(mayor); 

    return menorMayor;
};
console.log(elementoMenorYMayor([2, 4, 9, 1])); // [1, 9]



module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};