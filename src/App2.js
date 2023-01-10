import React,{useState,useRef} from "react";
import Timer from "./component/Timer";
function App2(){
    const [showtimer, setshowTimer] = useState(false);
    return(
        <div>
            {showtimer && <Timer/>}
            <button onClick={()=>setshowTimer(!showtimer)}>타이머보이기/안보이기</button>
        </div>
    )
}
 
export default App2;