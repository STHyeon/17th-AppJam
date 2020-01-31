import React from "react";
import MAIN_IMG from "../lib/img/icon/main.jpg";

interface List {
    _id: String;
    title: String;
    content: String;
}

type title = {
    title: String;
};

function Main(props: any) {
    const { allList } = props.data;
    const Card: React.SFC<title> = ({ title }) => {
        return (
            <div className="mainBox">
                <div className="card">
                    김관자
                    <h1>{title}</h1>
                    <img src={MAIN_IMG} alt="" />
                </div>
            </div>
        );
    };

    const CardMap: React.ReactElement[] = allList.map((list: List, index: number) => <Card key={index} title={list.title} />);
    return (
        <main>
            <div className="inner clearfix">
                <div className="header_hidden"></div>
                {CardMap}
            </div>
        </main>
    );
}

export default Main;
