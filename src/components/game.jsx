import { useState } from "react"
import Board from "./board"

function Game() {
    const [xIsNext, setXIsNext] = useState(true)
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)
    const currentSquares = history[currentMove]

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
        setXIsNext(!xIsNext)
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = `Go to move #${move}`
        }else {
            description = 'Go to game start'
        }

        return(
            <li key={move}><button className="btn" onClick={() => jumpTo(move)}>{description}</button></li>
        )
    })

    function jumpTo(nextMove) {
        setCurrentMove(nextMove)
        setXIsNext(nextMove % 2 == 0)
    }

    return (
        <div className="grid md:grid-cols-3">
            <div className="md:col-start-1 md:col-end-2">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="md:col-start-3 md:col-end-4">
                <ol>
                    {moves}
                </ol>
            </div>
        </div>
    )
}

export default Game