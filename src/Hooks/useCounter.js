import { useState } from "react"

export function useCounter() {
    const [count, setCount] = useState(0)
    const dicreaseCount = () => {
        if (count > 0)
            setCount((count) => count - 1)
    }

    const increaseCount = () => {
        setCount((count) => count + 1)
    }

    const restartCount = () => {
        setCount((count) => 0)
    }

    return { count, increaseCount, dicreaseCount, restartCount }
}