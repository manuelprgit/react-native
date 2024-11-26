import { createContext, PropsWithChildren, useState } from "react";

interface IAuthContext{
  count:number,
  increseBy: (value:number)=>void,
  reseatCounter: ()=>void
}

export const AuthContext = createContext({} as IAuthContext)

export const AuthProvider = ({children}:PropsWithChildren) => {

  
    const [count, setCount] = useState(0);

    const increseBy = (value: number):void => {
        setCount(count + value);
    }

    const reseatCounter = ():void => {
        setCount(0);
    }

  return(
    <AuthContext.Provider value={{
      count,
      increseBy,
      reseatCounter
    }}>
      {children}
    </AuthContext.Provider>
  )
}