import { useCounter } from "../Hooks/useCounter";

function App() {
    const { count, increaseCount, decreaseCount, restartCount, reachedFavorite } = useCounter();

    return (
        <div>
            <h1>Contador: {count}</h1>
            {reachedFavorite && <p style={{ color: "green" }}>{reachedFavorite}</p>}
            <button onClick={increaseCount} style={{ margin: "5px", padding: "10px", fontSize: "16px" }}>➕</button>
            <button onClick={decreaseCount} style={{ margin: "5px", padding: "10px", fontSize: "16px" }}>➖</button>
            <button onClick={restartCount} style={{ margin: "10px", padding: "8px", fontSize: "15px" }}>Reiniciar</button>
        </div>
    );
}

export default App;