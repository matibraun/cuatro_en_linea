import React, { useState, useEffect } from 'react';

function Ganador() {

    const [ganador, setGanador] = useState('aun no hay ganadorssss')

    const tablero = [
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]

    function handleClick () {
        for (var f = tablero.length - 1; f > 2; f--) {
            for (var c = tablero[f].length - 1; c > -1; c--) {
                console.log(f, c)
                console.log(tablero[f][c])
                if (tablero[f][c] !== 0 && tablero [f - 1][c] === tablero[f][c] && tablero [f - 2][c] === tablero[f][c] && tablero [f - 3][c] === tablero[f][c]) {
                    setGanador('hay un ganador');
                    console.log('hay un ganador')
                }
            };
        };

        for (var f = tablero.length - 1; f > -1; f--) {
            for (var c = tablero[f].length - 1; c > 2; c--) {
                console.log(f, c)
                console.log(tablero[f][c])
                if (tablero[f][c] !== 0 && tablero [f][c - 1] === tablero[f][c] && tablero [f][c - 2] === tablero[f][c] && tablero [f][c - 3] === tablero[f][c]) {
                    setGanador('hay un ganador');
                    console.log('hay un ganador')
                }
            };
        };

        for (var f = tablero.length - 1; f > 2; f--) {
            for (var c = tablero[f].length - 1; c > 2; c--) {
                console.log(f, c)
                console.log(tablero[f][c])
                if (tablero[f][c] !== 0 && tablero [f - 1][c - 1] === tablero[f][c] && tablero [f - 2][c - 2] === tablero[f][c] && tablero [f - 3][c - 3] === tablero[f][c]) {
                    setGanador('hay un ganador');
                    console.log('hay un ganador')
                }
            };
        };

        for (var f = 0 ; f < tablero.length - 3; f++) {
            for (var c = tablero[f].length - 1; c > 2; c--) {
                console.log(f, c)
                console.log(tablero[f][c])
                if (tablero[f][c] !== 0 && tablero [f + 1][c - 1] === tablero[f][c] && tablero [f + 2][c - 2] === tablero[f][c] && tablero [f + 3][c - 3] === tablero[f][c]) {
                    setGanador('hay un ganador');
                    console.log('hay un ganador')
                }
            };
        };
    };

    return (
        <div>
            <div>
                {tablero.map((fila, index) => <div key={index}> {fila} </div>)}    
            </div>
            <button onClick={handleClick}>
                {ganador}
            </button>
        </div>
    )


    
};

export default Ganador;

