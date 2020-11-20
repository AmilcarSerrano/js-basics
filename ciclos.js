//FOR
let estudiantes = ['Pedro', 'Juan', 'Jose'];

function saludaEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`);
}
/*
for(let i = 0; i < estudiantes.length; i++){
    saludaEstudiantes(estudiantes[i]);
}
//FOR OF
for(let student of estudiantes){
    saludaEstudiantes(student);
}*/
let j = 0;
while(j < estudiantes.length){
    saludaEstudiantes(estudiantes[j]);
    j++;
}