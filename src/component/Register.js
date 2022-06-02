import React,  { useCallback, useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { Increment, Decrement, Setname, Setservicename } from "../action/Actions";

const Register = ({red, blue, Setname, Increment, Setservicename}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const onChangeName = useCallback((e) => {
        setName(e.target.value);
    });

    const onChangeEmail = useCallback((e) => {
        setEmail(e.target.value);
    });

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    });

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        Setname("이름 변경 이벤트");
        Increment("zzzz");
        Setservicename("서비스 변경");
    },
    [name, email, password]);

    return (
        <>              
            Value={red.guest.name}, Increment={red.guest.email}, BlueName={blue.service.name}
            <form onSubmit={onSubmit}>
                <input type="name" name="name" onChange={onChangeName} />
                <input type="email" name="email" onChange={onChangeEmail} />
                <input type="password" name="password" onChange={onChangePassword} />
                <input type="Submit" />
            </form>
        </>
    );
};

export default connect(
    state => ({ red: state.red, blue: state.blue }), 
    { 
        Setname, Increment, Setservicename
    }
)(Register);