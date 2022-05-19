import React from "react";
import {Button} from "./Button";

export type CounterPropsType = {
    number: number
    startValue: number
    maxValue: number
    showNumber: boolean
    increaseNumber: () => void
    resetNumber: () => void
}

export const Counter = (props: CounterPropsType) => {

    const textForCounter = props.maxValue === props.startValue || props.maxValue < 0 || props.startValue < 0 || props.startValue > props.maxValue ? 'error' : 'enter your settings'

    const numberClass = props.maxValue === props.number || props.maxValue === props.startValue || props.maxValue < 0 || props.startValue < 0 || props.startValue > props.maxValue ? 'count red' : 'count'

    const classForCounter = textForCounter === 'enter your settings' && !props.showNumber ? 'count' : numberClass

    const incDisabled = props.number === props.maxValue || !props.showNumber || props.startValue < 0 || props.startValue > props.maxValue;

    const resDisabled = props.number === props.startValue || !props.showNumber;

    return (
        <div className='counter'>
            <div
                className={classForCounter}>{props.showNumber && props.startValue >= 0 && props.maxValue !== props.startValue && props.startValue < props.maxValue
                ? props.number
                : textForCounter
            }</div>
            <div className='counterBtn'>
                <div><Button ClassName='btn' name={'inc'} callBack={props.increaseNumber} disabled={incDisabled}/></div>
                <div><Button ClassName='btn' name={'res'} callBack={props.resetNumber} disabled={resDisabled}/></div>
            </div>
        </div>
    )
}