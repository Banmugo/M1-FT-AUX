const { BinarySearchTree } = require("../estructuras")

// En el prototipo de BinarySearchTree crear la funcion search que debe recibir un parametro y buscarlo en el arbol
// si lo encuentra, debe retornar el nodo. En caso contrario retornar el mensaje correspondiente.
// Ejemplo      (10)          
//             /     \
//          (7)     (12)       
//         /  \      /  \
//      (2)  (9)  (11)  (15)   
BinarySearchTree.prototype.search= function(value){
    if(value === this.value){return this.value}
    if(value < this.value && this.left){
        return this.left.search(value);
    }
    else if (value > this.value && this.right){
        return this.right.search(value);
    }
    return "no se encontró el valor";     
}


// En el prototipo de BinarySearchTree crear la funcion height que debe retornar la altura del mismo (cantidad de niveles)
// Ejemplo      (10)           ----> nivel 0
//             /     \
//          (7)     (12)       ----> nivel 1
//         /  \      /  \
//      (2)   (9)  (11)  (15)   ----> nivel 2


BinarySearchTree.prototype.height= function(){    
    if(!this.left && !this.right) return 0;
    if(this.left && !this.right) return 1 + this.left.height();
    if(!this.left && this.right) return 1 + this.right.height();
    if(this.left && this.right){
        return Math.max(1 + this.left.height(),1 + this.right.height());
    }
 
}

module.exports={
    BinarySearchTree
}