import React from "react";

interface Props {
    mapProps: any;
    units?: string;
    classNames?: string;
    classUnits?: string;
}

function CustomMap(props: Props) {
    const { mapProps, classNames, classUnits, units } = props;
    return (
        <ul className={`${classNames}`}>
            {mapProps.map((data: any, index: number) => (
                <li key={index}>
                    {data}
                    {
                        units ? <span className={`${classUnits}`}>{units}</span> : null
                    } 
                </li>
            ))}
        </ul>
    );
}

export default CustomMap;
