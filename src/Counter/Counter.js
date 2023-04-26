import React from "react";

import { useState } from "react";

function Counter() {

    let [data,SetData]=useState(1)

    function onClickEventUp(){
        SetData(data+1)
    }
    function onClickEventDown(){
        SetData(data-1)
        if(data==0){
            SetData(0)
            alert("Sorry You can't Go Below Zero(0)!!")
        }
    }
    return (
        <>
        <div className="btn">
            <p className="text">{data}</p>
            <button className="button1" onClick={onClickEventUp}>Click me..For Increasing</button>
            <button className="button1" onClick={onClickEventDown}>Click me..For Decreasing</button>
        </div>
        </>
    )
}
export default Counter