=========================================================================================================
## Para le metodo evaluarFuncion se le pasan 2 parametros el primero el string de la funcion a evaluar y el segundo el valor a evaluar osea la x 
pd: despues tendremos que ver como adaptamos la interfaz para manejar mas de una variable que en el algoritmo ya esta implementado solo queda decidor como sera la interfaz 

### Ejemplo de este seria   /evaluarFuncion(polinomio:string,x:string )/
/evaluarFuncion(2x+5,2)/  //=9

### Return 
/number con el resultado de la evaluacion /
=========================================================================================================

=========================================================================================================
## Para el metodo mBiseccion se la pasan 4 parametros 1ro el string con el polinomio \\,2do el primer intervalo ,3ro el segundo intervalo ,4to el error 
pd: Tenemos que ver como majeamos lo que nos dijo el profe hay que implemnar una funcion que al momento que el usuario rellene le campo del polinomio le sugiera los intervalos de las raices antes de que rellene el segundo input (\\)  se queda para despues pero bueno 

### Ejemplo de este seria   /mBiseccion(polinomio:string, primerInte:int ,segundoInte:int , error:int  )/

/mBiseccion('2x', 0, 1, 0.1)

### Return 
Un objeto con 2 atrivutos 1ro (raiz:number)el resulatod de la intrpolacion como number , 2do (resultado:array) un array de objetos con el resulatdo de cada iteracion de las respectivas variables 

return ([
  {
    iteracion: 1,
    a: 0,
    fa: 0,
    b: 1,
    fb: 2,
    c: 0.5,
    fc: 9.313225746154785e-10
  },
  {
    iteracion: 2,
    a: 0,
    fa: 0,
    b: 0.5,
    fb: 9.313225746154785e-10,
    c: 0.25,
    fc: 4.336808689942018e-19
  },
  {
    iteracion: 3,
    a: 0,
    fa: 0,
    b: 0.25,
    fb: 4.336808689942018e-19,
    c: 0.125,
    fc: 2.0194839173657902e-28
  },
  {
    iteracion: 4,
    a: 0,
    fa: 0,
    b: 0.125,
    fb: 2.0194839173657902e-28,
    c: 0.0625,
    fc: 9.4039548065783e-38
  }
])
=========================================================================================================