import React, { useState, useEffect } from 'react';

function Tablero (props) {

    const filaProvisional = [];
    const tableroProvisional = [];
    const botones = [];

    for (var i = 0; i < props.columnas; i++) {
        filaProvisional.push(0)
    };

    for (var j = 0; j < props.filas; j++) {
        tableroProvisional.push(filaProvisional)
    };

    const [tablero, setTablero] = useState(tableroProvisional);

    for (var k = 0; k < props.columnas; k++) {
        botones.push(k)
    };

    function handleClick (event) {

        const tableroProvisional2 = [...tablero];
        
        for (var l = props.filas; l > 0; l--) {
            console.log(l, event.target.name)
        
            if (tableroProvisional2[l - 1][parseInt(event.target.name)] === 0) {
                console.log(tableroProvisional2)
                console.log(tableroProvisional2[l - 1][parseInt(event.target.name)]);
                tableroProvisional2[l - 1][parseInt(event.target.name)] = 1;
                console.log(tableroProvisional2[l - 1][parseInt(event.target.name)]);
                console.log(tableroProvisional2);
                
                setTablero(tableroProvisional2);
            }
        }
        
    }



    return (
        <div>
            {botones.map((boton, index) => 
            <button
            onClick={handleClick}
            name={boton}
            key={index}
            style={{width: '80px'}}>
                columna {boton + 1}
            </button>)}
            {tablero.map((fila) => (
                <div>
                    {fila.map((columna, index) => <span key={index} style={{width: '80px'}}> {columna} </span>)}
                </div>
            ))}
        </div>
    );

}

export default Tablero;