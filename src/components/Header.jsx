import React from 'react';
import {Navlink} from 'react-router';

const Header = () =>{
    return(
       <nav>
     <Navlink to="/"> Home</Navlink>
        </nav>
    );
};

export default Header;