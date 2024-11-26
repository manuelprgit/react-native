// import { customCounter } from "../../Hooks/CounterHook";

import { useContext } from "react";
import { AuthContext } from "../../assets/Context/AuthContext/AuthContext";

export const Counter = () => {

    const buttonClasses = (color:string) => 
        `w-14 bg-${color}-400 m-2 h-9 rounded-lg hover:bg-${color}-600 transition active:bg-${color}-400`
    
    const {
        count,
        increseBy,
        reseatCounter
    } = useContext(AuthContext);

    return (
        <div className="flex flex-col items-center gap-5">
            <h3 className='text-xl'>Counter</h3>
            <p>{count}</p>
            <div className="flex">
                <button 
                    onClick={()=>{increseBy(+10)}}
                    className={buttonClasses('blue')}
                >
                    +10
                </button>
                <button 
                    onClick={()=>{increseBy(+1)}}
                    className={buttonClasses('blue')}
                >
                    +1
                </button>
                <button 
                    onClick={()=>{increseBy(-1)}}
                    className={buttonClasses('red')}
                >
                    -1
                </button>
                <button 
                    onClick={()=>{increseBy(-10)}}
                    className={buttonClasses('red')}
                >
                    -10
                </button>
                <button 
                    onClick={()=>{reseatCounter()}}
                    className={buttonClasses('gray')}
                >
                    Reset
                </button>
            </div>
        </div>
    )
}
