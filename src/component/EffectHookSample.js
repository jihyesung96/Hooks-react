import React,{useState,useEffect} from 'react';

const EffectHookSample = () => {
    const [ number, setNumber] =useState(0);
    const [ text, setText] =useState("green");
    const onclick = () =>{
        setNumber(number+1);
    }
    //렌더링 될때마다 매번 실행
    useEffect(()=>{
        console.log("렌더링 되었읍니다.");
    }) //[]만들면 한번만 실행되고 없으면 계속 실행이됨
    //처음 마운트 될때만 실행
    useEffect(()=>{
        console.log("마운트 되었습니다.")
    },[])
    useEffect(()=>{
        console.log("number가 변경 되었습니다.")
    },[number])//number가 업데이트 되었을때 실행
    return (
        <div>
            <span>{number}</span>
            <button onClick={onclick}>update</button>
            <input value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
    );
};

export default EffectHookSample;