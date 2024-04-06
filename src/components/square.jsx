export default ({value, onSquareClick}) => {
    return <button className="square" onClick={onSquareClick}>{value}</button>
}