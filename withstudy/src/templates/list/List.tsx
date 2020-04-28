import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { LISTQUERY } from "../../assets/utils/queries";
import { NewListCard } from "../../components/organisms";
import { Context } from "../../context/context";

interface List {
    allList: {
        _id: string;
        title: string;
        contents: string;
        createdAt: string;
    };
}

function List() {
    const { LoadingDiv } = useContext(Context);
    const { loading: listLoading, data: listData, error: listError } = useQuery(LISTQUERY);

    if (listLoading) return <LoadingDiv />;
    if (listError) return <p>서버 에러</p>;
    console.log(listData);

    return (
        <div>
            <ul className="Card clearfix">
                {listData.allQuestion.map((prop: any, key: any) => {
                    return <NewListCard key={key} data={prop} />;
                })}
            </ul>
        </div>
    );
}

export default List;
