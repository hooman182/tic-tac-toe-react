import Square from "./square"

function Board({xIsNext, squares, onPlay}) {

    
    function handleClick(i) {
        
        if (squares[i] || calculateWinner(squares)) {
            return
        }
        
        const nextSquares = squares.slice()
        if (xIsNext) {
            nextSquares[i] = "X"
        }else {
            nextSquares[i] = "O"
        }
        onPlay(nextSquares)
        
    }
    
    const winner = calculateWinner(squares)
    let status
    if (winner) {
        status = `Winner is ${winner}`
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`
    }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let i = 0; i < lines.length; i++) {

            const [a, b, c] = lines[i];

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }

        return null
    }

    return (
        <>
            <div className="grid grid-cols-3 grid-rows-3">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
            <div>
                <h1 className="text-2xl dark:text-white mt-2">{status}</h1>
            </div>
        </>
    )
}

export default Board