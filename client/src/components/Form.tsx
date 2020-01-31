import React, { useState, ReactElement } from "react";
import PLUS from "../lib/img/icon/plus.png";
import { Context } from "../context/context";

interface image {
    name: string;
    lastModified: number;
}

type W_Input = {
    onCreate: (title: string, content: string) => void;
};

function Form({ onCreate }: W_Input): ReactElement {
    // let newList: image[] = [];
    let newList: any = [];
    const [file, setFile] = useState<any>([]);
    const handleChange = (e: any) => {
        // setFile(e.target.files);
        // console.log(file);
        // for (let i = 0; i < e.target.files.length; i++) {
        //     setFile(e.target.files);
        //     console.log(file[0]);
        // newList = [...file, { blob: URL.createObjectURL(e.target.files[i]) }];
        // // setFile(URL.createObjectURL(e.target.files[i]));
        // // newList = newList.push(URL.createObjectURL(e.target.files[i]));
        // // setFile(newList);
        // // console.log(e.target.files);
        // // console.log(newList);
        // // console.log("i " + i);
        // // console.log("file " + file);
        // // console.log(e.target.files[0]);
        // console.log(...file);
        // setFile([...file, e.target.files[i]]);
        // }
        // {
        // e.target.files.length > 1 && setFile(newList);
        // console.log(file);
        // }
        // console.log(newList);
        // setFile({ file: [...file, ...e.target.files] });
    };

    const [w_title, setW_title] = useState<string>("");
    const [w_content, setW_content] = useState<string>("");

    return (
        <div className="form">
            <div className="inner">
                <div className="formBox">
                    <input
                        type="text"
                        placeholder="구체적인 제목을 입력해주세요."
                        value={w_title}
                        onChange={({ target: { value } }) => {
                            setW_title(value);
                        }}
                    />
                    <textarea
                        placeholder="본문을 입력해주세요."
                        value={w_content}
                        onChange={({ target: { value } }) => {
                            setW_content(value);
                        }}
                    ></textarea>
                    <label htmlFor="imgInput" className="imgInput">
                        <img src={PLUS} alt="" />
                    </label>
                    <input type="file" id="imgInput" className="blind" onChange={e => handleChange(e)} multiple />
                    <div className="img_box">
                        {/* {file.map((data: any, index: any) => (
                            <img src={data} alt="" key={index} />
                        ))} */}
                        {/* <img src={PLUS} alt="" className="preview" /> */}
                    </div>
                    <button className="submit" onClick={() => onCreate(w_title, w_content)}>
                        완료
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Form;
