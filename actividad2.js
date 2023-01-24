class Claseprueba{
    constructor(_nom,_num1,_num2){
        this._nom = null;
        this._num1 = 0;
        this._num2 = 0;
    }
    saludar(){
        return('Hola '+this._nom+', sus números son: '+this._num1+' y '+this._num2);
    }
//-------------------------------------
    get num1(){
        return this._num1;
    }
    set num1(num1){
        this._num1 = num1;
    }
    get num2(){
        return this._num2;
    }
    set num2(num2){
        this._num2 = num2;
    }
//----------------------------------------
    get nombre(){
        return this._nom;
    }
    set nombre(nom){
        this._nom = nom;
    }
//----------------------------------------
    get saludo(){
        return this.saludar();
    }
}


class Aritmetica{
    constructor(_num1,_num2){
        this._num1 = 0;
        this._num2 = 0;
    }
//-------------------------------------
    get imprimir(){
        return (this.suma()+this.resta()+this.muliplicacion()+this.division());
    }
    suma(){
        return('Suma de los valores: '+(this._num1+this._num2))
    }
    resta(){
        return('\nResta de los valores: '+(this._num1-this._num2))
    }
    muliplicacion(){
        return('\nMultiplicación de los valores: '+(this._num1*this._num2))
    }
    division(){
        return('\nDivision de los valores: '+(this._num1/this._num2))
    }
//---------------------------------------- 
    get num1(){
        return this._num1;
    }
    set num1(num1){
        this._num1 = num1;
    }
    get num2(){
        return this._num2;
    }
    set num2(num2){
        this._num2 = num2;
    }
//---------------------------------------------
}
class Caluladora extends Aritmetica{
    constructor(_num1,_num2){
        super(_num1,_num2);
        this.aritmetica = new Aritmetica(_num1,_num2);
    }

    calcpoten(){
        return(this._num1+" elevado a la potencia de "+
               this._num2+" es igual a: "+(this._num1**this._num2));
    }

    get potencia(){
        return this.calcpoten();
    }
}

const Classprba1 = new Claseprueba();
const Aritmet1 = new Aritmetica();
const Potenc1 = new Caluladora();

Classprba1.nombre = "Gabi";
(Classprba1.num1)=(Potenc1._num1)= 10;
(Classprba1.num2)=(Potenc1._num2)= 2;


console.log(Classprba1.saludo);
console.log(Potenc1.imprimir);
console.log(Potenc1.potencia);



