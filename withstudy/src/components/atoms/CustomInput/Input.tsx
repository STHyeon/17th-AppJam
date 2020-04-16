import React, { useState, useEffect } from "react";

interface Props {
    children?: string;
    onGetValue?: any;
}

function Input(props: Props) {
    let { children, onGetValue } = props;
    const [inData, setInData] = useState<string>("");

    useEffect(() => {
        onGetValue(inData);
    }, [inData]);

    return (
        <input
            type="text"
            className="Input"
            value={inData}
            placeholder={children}
            onChange={({ target: { value } }) => {
                setInData(value);
            }}
        />
    );
}

export default Input;
