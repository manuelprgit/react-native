// hacer un estado global que tenga la funcion de:
/**
 * sumar un numero.
 * Restar un numero.
 * Sumar de 10 en 10.
 * resetear el label.
 */

import { useState } from "react"
import { customCounter } from "../../Hooks/CounterHook";

export const Counter = () => {
    
    const {
        count, 
        increseBy,
        reseatCounter
    } = customCounter();

    return (
        <div className="flex flex-col items-center gap-5">
            <h3 className='text-xl'>Counter</h3>
            <p>{count}</p>
            <div className="flex">
                <button 
                    onClick={()=>{increseBy(+10)}}
                    className="w-14 bg-blue-400 m-2 h-9 rounded-lg hover:bg-blue-600 transition active:bg-blue-400"
                >
                    +10
                </button>
                <button 
                    onClick={()=>{increseBy(+1)}}
                    className="w-14 bg-blue-400 m-2 h-9 rounded-lg hover:bg-blue-600 transition active:bg-blue-400"
                >
                    +1
                </button>
                <button 
                    onClick={()=>{increseBy(-1)}}
                    className="w-14 bg-red-400 m-2 h-9 rounded-lg hover:bg-red-600 transition active:bg-red-400"
                >
                    -1
                </button>
                <button 
                    onClick={()=>{increseBy(-10)}}
                    className="w-14 bg-red-400 m-2 h-9 rounded-lg hover:bg-red-600 transition active:bg-red-400"
                >
                    -10
                </button>
                <button 
                    onClick={()=>{reseatCounter()}}
                    className="w-14 bg-gray-400 m-2 h-9 rounded-lg hover:bg-gray-600 transition active:bg-gray-400"
                >
                    Reset
                </button>
            </div>
        </div>
    )
}
