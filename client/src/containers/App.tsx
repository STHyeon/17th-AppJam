import React from "react";
import { HeaderNav, Main } from "../components";
import { CommonContext } from "../context/context";
import { useQuery } from "@apollo/react-hooks";
import { LIST_QUERY } from "../lib/api/queries";

interface List {
    allList: {
        _id: String;
        title: String;
        content: String;
    };
}

const App: React.FC = () => {
    const { loading, error, data } = useQuery<List>(LIST_QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;
    return (
        <CommonContext>
            <div className="App">
                <HeaderNav />
                <Main data={data} />
            </div>
        </CommonContext>
    );
};

export default App;
