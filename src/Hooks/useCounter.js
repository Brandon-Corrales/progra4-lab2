import { useState, useEffect } from "react";

export function useCounter() {
    const [count, setCount] = useState(() => {
        const savedCount = localStorage.getItem("count");
        return savedCount ? parseInt(savedCount, 10) : 0;
    });

    const FAVORITE_NUMBER_1 = 5; 
    const FAVORITE_NUMBER_2 = 10; 

    useEffect(() => {
        localStorage.setItem("count", count);
    }, [count]);

    const decreaseCount = () => {
        if (count > 0) setCount((count) => count - 1);
    };

    const increaseCount = () => {
        setCount((count) => count + 1);
    };

    const restartCount = () => {
        setCount(0);
    };

    let reachedFavorite = "";
    if (count === FAVORITE_NUMBER_1) {
        reachedFavorite = `¡El numero favorito de Brandon es: ${FAVORITE_NUMBER_1}!`;
    } else if (count === FAVORITE_NUMBER_2) {
        reachedFavorite = `¡El numero favorito de Jose es: ${FAVORITE_NUMBER_2}!`;
    }

    return { count, increaseCount, decreaseCount, restartCount, reachedFavorite };
}
