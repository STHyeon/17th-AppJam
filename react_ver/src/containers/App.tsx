import React from "react";
import { FootNav, HeaderNav, Main } from "../components";
const App: React.FC = () => {
    return (
        <div className="App">
            <HeaderNav />
            <Main />
            <FootNav />
        </div>
    );
};

export default App;
