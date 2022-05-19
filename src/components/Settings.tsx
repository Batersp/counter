import React, {ChangeEvent} from "react";
import {Button} from "./Button";

export type SettingsPropsType = {
    maxValue: number
    startValue: number
    showNumber: boolean
    setMaxValue: (newValue: number) => void
    setStartValue: (newValue: number) => void
    setSettings: () => void
    setShowNumber: (v: boolean) => void
}

export const Settings = (props: SettingsPropsType) => {

    const inputClass = props.maxValue === props.startValue || props.maxValue < 0 || props.startValue < 0 || props.startValue > props.maxValue ? 'error' : ''

    const onMaxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(parseInt(e.currentTarget.value))
        props.setShowNumber(false)
    }

    const onStartValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(parseInt(e.currentTarget.value))
        props.setShowNumber(false)
    }

    const callBackHandler = () => {
        props.setSettings()
    }

    const setDisabled = props.showNumber || props.maxValue === props.startValue || props.startValue < 0 || props.maxValue < 0 || props.startValue > props.maxValue

    return (
        <div className='settings'>
            <div className='inputs'>
                <div className='input'>
                    max value: <input
                    value={props.maxValue}
                    type='number'
                    onChange={onMaxValueChangeHandler}
                    className={inputClass}
                />
                </div>
                <div className='input'>
                    start value: <input
                    value={props.startValue}
                    type='number'
                    onChange={onStartValueChangeHandler}
                    className={inputClass}
                />
                </div>
            </div>
            <div className='settingBtn'>
                <Button name={'set'}
                        callBack={callBackHandler}
                        disabled={setDisabled}
                        ClassName='setbtn'
                />
            </div>
        </div>
    )
}