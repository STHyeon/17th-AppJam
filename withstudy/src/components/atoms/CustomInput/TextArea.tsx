import React, { useState, useEffect } from "react";

interface Props {
    children?: string;
    onGetValue(value: any): void;
}

function TextArea(props: Props) {
    const { children, onGetValue } = props;
    const [inData, setInData] = useState<string>("");
    const [textHeight, setTextHeight] = useState("");
    const handleTextArea = (e: any) => {
        setTextHeight(`${e.target.scrollHeight}px`);
        e.target.style.height = textHeight;
    };

    useEffect(() => {
        onGetValue(inData);
    }, [inData]);

    return (
        <textarea
            className="TextArea"
            onKeyDown={handleTextArea}
            placeholder={children}
            onChange={({ target: { value } }) => {
                setInData(value);
            }}
        ></textarea>
    );
}

export default TextArea;
