import { ResizableBox } from 'react-resizable';
import React from "react"
import './App.css';

function App() {
    const [numRows, setNumRows] = React.useState(2);
    const [numCols, setNumCols] = React.useState(2);
    const [squareSize, setSquareSize] = React.useState(100);

    const handleResize = (index, size) => {
        setSquareSize(size.width / numCols);
    };

    const renderSquare = (rowIndex, colIndex) => {
        return (
            <ResizableBox
                key={`${rowIndex}-${colIndex}`}
                width={squareSize}
                height={squareSize}
                onResize={(event, { size }) => handleResize(rowIndex * numCols + colIndex, size)}
                resizeHandles={['se']}
                minConstraints={[squareSize, squareSize]}
                maxConstraints={[squareSize, squareSize]}
                className="square"
            >
                {/*{rowIndex * numCols + colIndex + 1}*/}
            </ResizableBox>
        );
    };

    const renderGrid = () => {
        const squares = [];
        for (let i = 0; i < numRows; i++) {
            const rowSquares = [];
            for (let j = 0; j < numCols; j++) {
                rowSquares.push(renderSquare(i, j));
            }
            squares.push(<div key={`row-${i}`} className="row">{rowSquares}</div>);
        }
        return <div className="grid">{squares}</div>;
    };

    return (
        <div className="App">
            <div className="group-button">
                <div>
                    <label>Rows:</label>
                    <input type="number" value={numRows} onChange={(event) => setNumRows(Number(event.target.value))} />
                </div>
                <div>
                    <label>Columns:</label>
                    <input type="number" value={numCols} onChange={(event) => setNumCols(Number(event.target.value))} />
                </div>
                <div>
                    <label>Square size:</label>
                    <input type="text" value={squareSize} onChange={(event) => setSquareSize(Number(event.target.value))} />
                </div>
                <div className="print-button">
                    <button onClick={() => window.print()}>Print</button>
                </div>
            </div>

            {renderGrid()}
        </div>
    );
}

export default App;
