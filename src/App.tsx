import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";
import {log} from "util";

function App() {
    /*   const [limitedValue, setLimitedValue] = useState(5)*/ //макс значение для счетчика


    const [incDisabled, setIncDisabled] = useState(false) // кнопка inc
    const [resDisabled, setResDisabled] = useState(true)  // кнопка res
    const [setDisabled, setSetDisabled] = useState(true) // кнопка set
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
        setResDisabled(false)
        if (/*limitedValue*/ maxValue - 1 === number) {
            setIncDisabled(true)
        }

    }
    const resetNumber = () => {  // что происходит при нажатии на кнопку res
        setNumber(startValue)
        setResDisabled(true)
        setIncDisabled(false)
    }

    const setSettings = () => {  // что происходит при нажатии на кнопку set
       /* setLimitedValue(maxValue)*/
        setSetDisabled(true)
        setNumber(startValue)
        setIncDisabled(false)
        setShowNumber(true)
    }


    return (
        <div className="App">
            <Counter
                number={number}
                increaseNumber={increaseNumber}
                resetNumber={resetNumber}
                incDisabled={incDisabled}
                resDisabled={resDisabled}
               /* limitedValue={limitedValue}*/
                maxValue={maxValue}
                startValue={startValue}
                showNumber={showNumber}
                setDisabled={setDisabled}

            />

            <Settings
                setDisabled={setDisabled}
                maxValue={maxValue}
                startValue={startValue}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                setSetDisabled={setSetDisabled}
                setSettings={setSettings}
                showNumber={showNumber}
                setShowNumber={setShowNumber}
                setIncDisabled={setIncDisabled}
                setResDisabled={setResDisabled}
            />
        </div>
    );
}

export default App;
