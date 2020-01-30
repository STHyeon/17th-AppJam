import React, { useState, ReactElement } from "react";
import PLUS from "../lib/img/icon/plus.png";

interface image {
    name: string;
    lastModified: number;
}

function Form(): ReactElement {
    let newList: image[] = [];
    const [file, setFile] = useState<any>([]);
    const handleChange = (e: any) => {
        for (let i = 0; i < e.target.files.length; i++) {
            // newList = [...file, { blob: URL.createObjectURL(e.target.files[i]) }];
            // setFile(URL.createObjectURL(e.target.files[i]));
            // newList = newList.push(URL.createObjectURL(e.target.files[i]));
            // setFile(newList);
            // console.log(e.target.files);
            // console.log(newList);
            // console.log("i " + i);
            // console.log("file " + file);
            // console.log(e.target.files[0]);
            console.log(...file);
            setFile([...file, e.target.files[i]]);
        }
        console.log(file);

        // {
        //     e.target.files.length > 1 && setFile(newList);
        // }
        // console.log(newList);
    };

    return (
        <div className="form">
            <div className="inner">
                <div className="formBox">
                    <input type="text" placeholder="구체적인 제목을 입력해주세요." />
                    <textarea placeholder="본문을 입력해주세요."></textarea>
                    <label htmlFor="imgInput" className="imgInput">
                        <img src={PLUS} alt="" />
                    </label>
                    <input type="file" id="imgInput" className="blind" onChange={e => handleChange(e)} multiple />
                    {/* {file.map((data: any, index: any) => ( */}
                    {/* <img src={data} alt="" key={index} /> */}
                    {/* ))} */}
                    <div className="img_box">
                        <img src={PLUS} alt="" className="preview" />
                        <img src={PLUS} alt="" className="preview" />
                        <img src={PLUS} alt="" className="preview" />
                        <img src={PLUS} alt="" className="preview" />
                        <img src={PLUS} alt="" className="preview" />
                        <img src={PLUS} alt="" className="preview" />
                        <img src={PLUS} alt="" className="preview" />
                        <img src={PLUS} alt="" className="preview" />
                        <img src={PLUS} alt="" className="preview" />
                        <img src={PLUS} alt="" className="preview" />
                        <img src={PLUS} alt="" className="preview" />
                        <img src={PLUS} alt="" className="preview" />
                        <img src={PLUS} alt="" className="preview" />
                        <img src={PLUS} alt="" className="preview" />
                    </div>
                    <button className="submit">완료</button>
                </div>
            </div>
        </div>
    );
}

export default Form;
