import React from "react";
import './FooterTop.scss';
import Delivery from './img/car.svg';
import Lock from './img/locked.svg';
import Price from './img/price.svg';
import Return from './img/return.svg';
class FooterTop extends React.Component{
    render(){
        return(
            <footer className="FooterTop">
                <div className="shipping__footer">
                    <img src={Delivery} alt="shipping" />
                    <div className="txt__shipping">
                        <h4>Free Shipping</h4>
                        <h5>Capped at $319 per order</h5>
                    </div>
                </div>
                <div className="return__footer">
                <img src={Return} alt="return" />
                    <div className="txt__return">
                        <h4>Free Returns</h4>
                        <h5>Within 25 Days</h5>
                    </div>
                </div>
                <div className="secure__footer">
                <img src={Lock} alt="lock" />
                    <div className="txt__secure">
                        <h4>100% Secure</h4>
                        <h5>100% Secure payment</h5>
                    </div>
                </div>
                <div className="price__footer">
                <img src={Price} alt="price" />
                    <div className="txt__price">
                        <h4>Best Price</h4>
                        <h5>Guaranteed Gifts</h5>
                    </div>
                </div>
           
            </footer>
        )
    }
}
export default FooterTop;