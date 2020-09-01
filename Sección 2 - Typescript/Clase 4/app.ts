
//////////////////////////////////////////////////////////
let miFuncion = function(a)
{
    return a;
}

let mifuncionF = (a) => a;


console.log(miFuncion("Normal"));
console.log(mifuncionF("Flecha"));

///////////////////////////////////////////////////////////////
let miFuncion2 = function(a:number, b:number){
    return a + b;
}

let miFuncion2F = (a:number, b:number)=> a + b;

///////////////////////////////////////////////////////////////
let miFuncion3 = function(nombre:string)
{
    nombre = nombre.toUpperCase();
    return nombre;
}

let miFuncion3F = (nombre:string)=>{
    nombre = nombre.toUpperCase();
    return nombre;
}
 
///////////////////////////////////////////////////////////////////

let hulk = 
{
    nombre:"Hulk",
    smash()
    {
        setTimeout(() => console.log(this.nombre + " smash!!"), 1500);
    }
}

hulk.smash(); 
