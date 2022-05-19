import React from "react";
import {Button} from "./Button";

export type CounterPropsType = {
    number: number
    incDisabled: boolean
    resDisabled: boolean
    /*limitedValue: number*/
    startValue: number
    maxValue: number
    showNumber: boolean
    setDisabled: boolean
    increaseNumber: () => void
    resetNumber: () => void


}


export const Counter = (props: CounterPropsType) => {

    const textForCounter = props.maxValue === props.startValue || props.maxValue < 0 || props.startValue < 0 || props.startValue > props.maxValue ? 'error' : 'enter your settings'

    const numberClass = props.maxValue === props.number || props.maxValue === props.startValue || props.maxValue < 0 || props.startValue < 0 || props.startValue > props.maxValue ? 'count red' : 'count'

    return (
        <div className='counter'>
            <div className={ props.setDisabled? numberClass : 'count' }>{props.showNumber
                ? props.number
                : textForCounter}</div>
            <div className='counterBtn'>
                <div><Button ClassName='btn' name={'inc'} callBack={props.increaseNumber} disabled={props.incDisabled}/></div>
                <div><Button ClassName='btn' name={'res'} callBack={props.resetNumber} disabled={props.resDisabled}/></div>
            </div>
        </div>
    )
}