import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";

function App() {

    const [maxValue, setMaxValue] = useState(/*limitedValue*/ 5)        // максимальное значение в setting
    const [startValue, setStartValue] = useState(0)      // стартовое значение в setting
    const [number, setNumber] = useState<number>(startValue)      // число которое увеличивается в counter
    const [showNumber, setShowNumber] = useState(true) //не могу менять счетчик на текст ( 2 варианта)

    useEffect(() => {
        let maxValueFromLS = localStorage.getItem('maxValue')
        let startValueFromLS = localStorage.getItem('startValue')
        if (maxValueFromLS && startValueFromLS) {
            let newMaxValue = JSON.parse(maxValueFromLS);
            let newStartValue = JSON.parse(startValueFromLS);
            setMaxValue(newMaxValue)
            setStartValue(newStartValue)
            setNumber(newStartValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))//сохраняю значения max and start value
    }, [maxValue, startValue])

    const increaseNumber = () => { // что происходит при нажатии на кнопку inc
        setNumber(number + 1)
    }
    const resetNumber = () => {  // что происходит при нажатии на кнопку res
        setNumber(startValue)
    }

    const setSettings = () => {  // что происходит при нажатии на кнопку set
        setNumber(startValue)
        setShowNumber(true)
    }

    return (
        <div className="App">
            <Counter
                number={number}
                increaseNumber={increaseNumber}
                resetNumber={resetNumber}
                maxValue={maxValue}
                startValue={startValue}
                showNumber={showNumber}
            />

            <Settings
                maxValue={maxValue}
                startValue={startValue}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                setSettings={setSettings}
                showNumber={showNumber}
                setShowNumber={setShowNumber}
            />
        </div>
    );
}

export default App;
