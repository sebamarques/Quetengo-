import menu from '../hooks/comidas'
function Menu(){
    const llamar = menu()
    console.log(llamar)
    const dias = llamar.map(comida=>{
        return(
        <>
        <li key={comida.id}>
        <p>Comida Mañana:<br></br>{comida.Mañana}</p>
        <p>Comida Noche:<br></br>{comida.Noche}</p>
        </li>
        </>
        )
    })
    return(
        <>
            {dias}
        </>
    )
}

export default Menu;