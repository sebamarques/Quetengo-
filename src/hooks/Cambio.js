import menu from './comidas'
function cambiar(){
    let comidas = menu()
    const cambio = comidas.map(comida=>{
       return comida.Dia= "ABEJORRO"
    })
    return(
        <h1>{cambio}</h1>
    )
}

export default cambiar;