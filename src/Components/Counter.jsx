import { useCounter } from "../Hooks/useCounter"

export default function Counter() {
    const { count, increaseCount, dicreaseCount, restartCount } = useCounter()
    return (
        <div className="card">
            <p>{count}</p>
            <button onClick={increaseCount} style={{ marginRight: "10px" }}>
                ➕
            </button>

            <button onClick={dicreaseCount}>
                ➖
            </button>


            <button onClick={restartCount} style={{}}>
                <>Restart Counter</>
            </button>
        </div>
    )
}