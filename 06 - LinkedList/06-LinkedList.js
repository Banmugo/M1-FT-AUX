const { LinkedList, Node } = require("../estructuras")
  //agregar el metodo size al prototipo de LinkedList.
  // Este metodo deberia retornar la cantidad de elementos de la lista
  LinkedList.prototype.size=function(){
    let contador = 0;
    
    if (!this.head){
      return contador;
    }
    let current = this.head;
    while(current){
      contador++;
      current = current.next;
    }
    return contador;    
  }


// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [3]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [5] --> [4] --> [1]
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.
LinkedList.prototype.orderList = function () {
    // Tu código aca:     
     
  // let current= this.head;
 let current2 = this.head;
 let newArray = [];
 let conta = 0;
 while(current2){
     newArray.push(current2.value);
     current2 = current2.next;
 }
 newArray.sort(function(a,b){return b-a});
 
//  while(current){
//      current.value = newArray[conta];
//      conta++;
//      current= current.next;
//  }
//  return current;
this.head = null;
this.len = 0;
for (let i = 0; i < newArray.length; i++){
  this.add(newArray[i]);
}
  }; 

    
  //agregar el metodo insert al prototipo de LinkedList.
  // Este metodo deberia recibir una posicion y un valor
  // agregar el valor en la posicion indicada
  //tomar el head como posicion 1  

  // debemos agregar un date, en una posicion indicada (pos)

  
    
LinkedList.prototype.insert = function(data,pos) {
  // if (this.len < pos) return this.add(data);
  // let nuevoNodo = new Node(data);            //////////////////////////////////////////////////
  // if (pos === 1){                           /// este falta por organizar y que pase el test ///
  //   nuevoNodo.next = this.head;             //////////////////////////////////////////////////
  //   this.head = nuevoNodo; 
  //   this.len++; 
  // } 
  // let current = this.head;
  // let contador = 1;
  // while(contador !== pos -1){
  //   contador++;
  //   current = current.next;
  // }
  // nuevoNodo.next = current.next;
  // current.next = nuevoNodo;
  // this.len++;

  let current = this.head;
  let count = 1;
  if (this.head === null ) return false;

  while(count < pos){
    count++;
    current = current.next;
  }
  let aux = current.next;
  current.next = new Node(data);
  current.next.next = aux;

};
  




module.exports={
  LinkedList
}



