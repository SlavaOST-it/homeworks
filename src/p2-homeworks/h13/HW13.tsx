import React, {ChangeEvent, useState} from 'react';
import {Button13} from "./Button13";
import {requestsApi} from "./api/RequestsAPI";

export const HW13 = () => {
    const [check, setCheck] = useState<boolean>(true)
    const [response, setResponse] = useState<string>("")

const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        setCheck(e.currentTarget.checked)
}

    const sendRequest =()=>{
        requestsApi.postCheckBoxValue(check)
            .then((res)=>{
                console.log(res)
                setResponse(res.data)
            })
            .catch((error)=>{
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
            })
    }

    const Request = () => {
        return (
            <div>
                <input type={"checkbox"}
                       checked={check}
                       onChange={onChangeHandler}/>


                <Button13
                    callBack={sendRequest}
                    className={""}
                    title={"запрос"}/>

                <div>{response}</div>
            </div>
        );
    }


    return (
        <div>
            <Request/>
        </div>
    );
};
