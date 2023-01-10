import './App.css';
import './Style.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
//import { useState } from 'react';

function App () {
  //const [mode,setMode] = useState("home");
  let content = null;
  let modevar = "home";
  if(modevar === "home"){
    content = <div>환영합니다.</div>
  }
  else if(modevar === "page"){
    content = <div>페이지입니다.</div>
  }
  const lists = [ 
    {id:1, title:'menu1'},
    {id:2, title:'menu2'},
    {id:3, title:'menu3'},
    {id:4, title:'menu4'}
  ]
  return (
    <div className='App'>
      {content}
      <button onClick={()=> {
        modevar="page"
        console.log(modevar)}}>모드변경</button>
      <Header lists={lists}/>
      <Main/>
      <Footer/> 
    </div>
  );
};

export default App;