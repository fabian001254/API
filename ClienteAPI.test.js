const cliente = require ('./ClienteAPI.js')
test(
    'Retorno valido de la api',async ()=>{
        const datos = await cliente(2);
        expect(datos.userId).toEqual(1);
    }
)