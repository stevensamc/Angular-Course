
interface Xmen{
    nombre:string,
    poder:string
}




function enviarMision(xmen:any)
{
    console.log("Enviando a: " + xmen.nombre);
};


function enviarCuartel(xmen:any)
{
    console.log("Enviando al Cuartel: " + xmen.nombre);
};
let wolverine:Xmen = {
    nombre:"Wolverine",
    poder:"Regeneracion"
};

enviarMision(wolverine);
enviarCuartel(wolverine);