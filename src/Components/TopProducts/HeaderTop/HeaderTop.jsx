import React from "react";
import './HeaderTop.scss';

class HeaderTop extends React.Component{
    render(){
        return(
            <header className="HeaderTop">
            <div className="topTitle__Header">
                <div className="line__topTitle"></div>
                <h4>POPULAR PRODUCT</h4>
            </div>
            <div className="Title__row">
                <h1>Top Special Product</h1>
                <a href="https://github.com/okqsna">See More Products</a>
            </div>
            </header>
        )
    }
}
export default HeaderTop;