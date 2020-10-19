import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { LISTQUERY } from "../../assets/utils/queries";
import { NewListCard } from "../../components/organisms";
import { Context } from "../../context/context";

interface ListProps {
    _id?: string;
    title?: string;
    desc?: string;
    createdAt?: string;
}

function List() {
    const { LoadingDiv } = useContext(Context);
    const { loading: listLoading, data: listData, error: listError } = useQuery(LISTQUERY);

    if (listLoading) return <LoadingDiv />;
    if (listError) return <p>서버가 꺼져있을 확률이 큽니다.</p>;

    return (
        <div>
            <ul className="Card clearfix">
                {listData.allQuestion.map((prop: ListProps, key: number) => {
                    return <NewListCard key={key} data={prop} />;
                })}
            </ul>
        </div>
    );
}

export default List;
