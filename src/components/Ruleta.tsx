import React from 'react'


const numeroJugador = Math.floor(Math.random() * 8)
console.log("Tu accion a realizar es la numero", numeroJugador)

const posibilidad:{[clave:number]:string} = {
    1: 'Tomar un trago',
    2: 'Ceder tu trago',
    3: 'Una hora sin el celular',
    4: 'Tomar 2 tragos seguidos',
    5: 'Preparar un trago',
    6: 'Perdes un turno ',
    7: 'Dejas de participar en el juego',
    8: 'Cantar una parte de una cancion',
    
}

export const Ruleta = () => {
  return (
    <div className='contenedor_principal'>
        <p className='parrafo'>Tu Ruleta ! ! ! ! </p>
        <div className='boton'></div>
        <div className='container_numero'></div>
        <div className='numero_a_mostrar'></div>
    </div>
  )
}








            
        
        
        
