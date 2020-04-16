import React from "react";

interface Props {
    children: string;
    onButtonFunc?: () => void;
    disabled?: any;
    classNames?: string;
}

function CustomButton(props: Props) {
    const { children, onButtonFunc, disabled, classNames } = props;
    return (
        <button type="button" className={`CustomButton ${classNames}`} onClick={onButtonFunc} disabled={disabled}>
            {children}
        </button>
    );
}

export default CustomButton;
