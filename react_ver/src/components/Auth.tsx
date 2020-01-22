import React, { ReactElement } from "react";
import LOGO from "../lib/img/icon/logo.png";
import { Link } from "react-router-dom";

interface Props {
    mode: boolean;
}

function Auth(props: Props): ReactElement {
    function Login(): ReactElement {
        return (
            <div className="login">
                <div className="login_wrap">
                    <div className="inner">
                        <img src={LOGO} alt="logo" />
                        <input type="text" placeholder="아이디" />
                        <input type="password" placeholder="비밀번호" />
                        <button>로그인</button>
                        <p>
                            <Link to="/register">회원가입하기</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    function Register(): ReactElement {
        return (
            <div className="register">
                <div className="register_wrap">
                    <div className="inner">
                        <div className="box">
                            <h1 className="blind">회원가입</h1>
                            <img src={LOGO} alt="logo" />
                            <input type="text" placeholder="아이디" />
                            <input type="email" placeholder="이메일" />
                            <input type="password" placeholder="비밀번호" />
                            <input type="password" placeholder="비밀번호 확인" />
                            <input type="number" placeholder=" 나이" />
                            <button>완료</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return <div>{props.mode ? <Login /> : <Register />}</div>;
}

export default Auth;
