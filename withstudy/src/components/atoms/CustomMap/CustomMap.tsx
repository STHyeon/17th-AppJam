import React from "react";

interface Props {
    mapProps: any;
    classNames?: string;
}

function CustomMap(props: Props) {
    const { mapProps, classNames } = props;
    return (
        <ul className={`${classNames}`}>
            {mapProps.map((data: any, index: number) => (
                <li key={index}>{data}</li>
            ))}
        </ul>
    );
}

export default CustomMap;
