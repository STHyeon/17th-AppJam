import React from "react";
import { Link } from "react-router-dom";

interface Prop {
    children: React.ReactNode;
    link: string;
    classNames?: string;
}

function CustomLink(props: Prop) {
    const { children, link, classNames } = props;
    return (
        <Link to={link} className={`link ${classNames}`}>
            {children}
        </Link>
    );
}

export default CustomLink;
