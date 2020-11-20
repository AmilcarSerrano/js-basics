let miAuto = {
    marca: 'Nissan',
    modelo: 'Versa',
    anio: 2020,
    tipo: 'Sedan',
    detalle: function(){
        console.log(`Auto ${this.modelo} ${this.anio}`); //This es una variable que hace referencia al objeto (En este caso a su padre(miAuto)).
    }
};
console.log(miAuto); //Imprime todo el objeto
console.log(miAuto.marca); //Imprime solo el atributo al que se hace referencia
miAuto.detalle();
