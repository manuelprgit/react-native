import { createContext, PropsWithChildren, useState } from "react"

interface IAuthContext{
    count:number,
    increseBy: (value:number)=>void,
    reseatCounter: ()=>void
  }
  
export const CounterContext = createContext({} as IAuthContext);

export const CounterProvider = ({children}: PropsWithChildren) => {

    const [count, setCount] = useState(0);

    const increseBy = (value: number):void => {
        setCount(count + value);
    }

    const reseatCounter = ():void => {
        setCount(0);
    }

  return (
    <CounterContext.Provider value={{
        count,
        increseBy,
        reseatCounter
    }}>
        {children}
    </CounterContext.Provider>
  )
}
