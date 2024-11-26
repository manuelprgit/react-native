import { useState } from "react";

export const customCounter = () => {
    const [count, setCount] = useState(0);

    const increseBy = (value: number) => {
        setCount(count + value);
    }

    const reseatCounter = () => {
        setCount(0);
    }

    return {
        count,
        increseBy,
        reseatCounter
    }
}