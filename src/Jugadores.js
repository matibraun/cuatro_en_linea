import React, { useState, useEffect } from 'react';

function Jugadores() {
    const [jugadores, setJugadores] = useState({jugador1: '', jugador2: ''})
    const [mensajeBienvenida, setMensajeBienvenida] = useState('')
    const [turno, setTurno] = useState('')

    function handleChange(event) {
        const value = event.target.value;
        setJugadores({
          ...jugadores,
          [event.target.name]: value
        });
      };

    function handleClick() {
        let mensaje = 'Bienvenidos ' + jugadores.jugador1 + ' y ' + jugadores.jugador2
        setMensajeBienvenida(mensaje)
        let mensajeTurno = 'Es el turno de ' + jugadores.jugador1
        setTurno(mensajeTurno)
    };

    return(
        <div>
            Jugador 1:
            <input type="text" value={jugadores.jugador1} name='jugador1' onChange={handleChange}/> <br />
            Jugador 2:
            <input type="text" value={jugadores.jugador2} name='jugador2' onChange={handleChange}/> <br />
            <button onClick={handleClick}>Submit</button> <br />
            {mensajeBienvenida} <br />
            {turno}
        </div>
    )
};

export default Jugadores
