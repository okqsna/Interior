import React from "react";
import './TopProducts.scss';
import HeaderTop from './HeaderTop/HeaderTop';
import MainTop from './MainTop/MainTop';
import FooterTop from './FooterTop/FooterTop';
class TopProducts extends React.Component{
    render(){
        return(
            <section className="TopProducts">
                <HeaderTop/>
                <MainTop/>
                <FooterTop/>
            </section>
        )
    }
}
export default TopProducts;