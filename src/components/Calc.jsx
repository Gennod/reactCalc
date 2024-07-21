import { useState } from "react";

function Calc() {
    let [value, setValue] = useState(0);


    function changeResult (elemValue) {
        if (value == 0) {
            setValue(elemValue);
        } else if (elemValue == "=") {
            let sepValues = value.split("/\s(?=[^0-9])/");
            console.log(sepValues);
            //setValue(+sepValues[0] + +sepValues[1]);
        }
        else {
            setValue(value + elemValue);
        }
    }

    function handleClick (evt) {
        evt.preventDefault();
        let elem = evt.target;
        let elemValue = evt.target.innerHTML;
        switch (elemValue) {
            case "+":
                
                break;
        }
        changeResult(elemValue);
    }

    return (
        <div className="calc">
            <div className="calc__view">
                <input value="50/1" className="calc__history" readOnly></input>
                <input value={value} className="calc__result" readOnly></input>
            </div>
            <div className="calc__nav">
                <button onClick={handleClick} className="calc__exp color_blue">e</button>
                <button onClick={handleClick} className="calc__power color_blue">**</button>
                <button onClick={handleClick} className="calc__sin color_blue">sin</button>
                <button onClick={handleClick} className="calc__deg color_blue">deg</button>
                <button onClick={handleClick} className="calc__ac color_gray">Ac</button>
                <button onClick={handleClick} className="calc__delete color_gray">del</button>
                <button onClick={handleClick} className="calc__div color__dblue">/</button>
                <button onClick={handleClick} className="calc__mult color__dblue">*</button>
                <button onClick={handleClick} className="calc__7 color_blue">7</button>
                <button onClick={handleClick} className="calc__8 color_blue">8</button>
                <button onClick={handleClick} className="calc__9 color_blue">9</button>
                <button onClick={handleClick} className="calc__minus color__dblue">-</button>
                <button onClick={handleClick} className="calc__4 color_blue">4</button>
                <button onClick={handleClick} className="calc__5 color_blue">5</button>
                <button onClick={handleClick} className="calc__6 color_blue">6</button>
                <button onClick={handleClick} className="calc__plus color__dblue">+</button>
                <button onClick={handleClick} className="calc__1 color_blue">1</button>
                <button onClick={handleClick} className="calc__2 color_blue">2</button>
                <button onClick={handleClick} className="calc__3 color_blue">3</button>
                <button onClick={handleClick} className="calc__0 color_blue">0</button>C
                <button onClick={handleClick} className="calc__dot color_blue">.</button>
                <button onClick={handleClick} className="calc__equal color_white">=</button>
            </div>
        </div>
    );
}

export default Calc;