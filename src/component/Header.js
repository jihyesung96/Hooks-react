import React from 'react';
import Nav from './Nav';

function Header ({lists}) {
    //props는 상태로 변경됨
    const number1 =0;
    return(
        <header>
            <h1>Green {number1}</h1>
            <Nav lists={lists}/>
        </header>
    )
};

export default Header;