import React from "react";
import TopHeader from "./HeaderComponent/TopHeader";
import BotHeader from "./HeaderComponent/BotHeader";
import './Header.css'


const Header = () =>{
    return (
        <>
        <header className="site-header">
        <TopHeader />
        <BotHeader />
        </header>
        </>
    
    )};

export default Header;