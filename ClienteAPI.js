const url = "https://jsonplaceholder.typicode.com/todos/";

async function ObtenerTodo(id){
    const respuesta = await fetch(`${url}${id}`);
    const datos = await respuesta.json();
    ProcesarJson(datos)
    return datos;
}
function ProcesarJson(dato){
        console.log(dato);
}

ObtenerTodo(2);
module.exports = ObtenerTodo;