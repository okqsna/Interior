import React from "react";
import './Header.scss';
class Header extends React.Component{
    render(){
        return(
        <header className="Header">
            <div className="Header__txt">
                <div className="Header__txt__title">
                    <div className="Header__txt__title__line"></div>
                    <p className="p__title">what people say</p>
                    <div className="Header__txt__title__line"></div>
                </div>
                <h1 className="Header__txt__mainTitle">Words Of Our Clients</h1>
            </div>
        </header>
        )
    }

}
export default Header;