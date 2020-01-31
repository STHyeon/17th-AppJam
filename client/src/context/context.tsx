import React, { createContext } from "react";
import { FootNav } from "../components";

const Context = createContext<any>({});

function CommonContext({ children }: { children: React.ReactNode }) {
    return (
        <Context.Provider value={{}}>
            {children}
            <FootNav />
        </Context.Provider>
    );
}

export { CommonContext, Context };
