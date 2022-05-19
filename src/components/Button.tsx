import React from "react";

export type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled: boolean
    ClassName: string
}
export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
            <button className={props.ClassName} disabled={props.disabled} onClick={onClickHandler}>{props.name}</button>
    )
}