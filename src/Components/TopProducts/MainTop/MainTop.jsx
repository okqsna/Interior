import React from "react";
import './MainTop.scss';
import Change from './img/change.svg';
import Heart from './img/heart.svg';
import Buy from './img/buy.svg';
import Stars from './img/stars.svg'; 
import Products from './Products.json';
class MainTop extends React.Component{
    render(){
        return(
            <main className="MainTop">
                <div className="row__MainTop">

                    {
                        Products && Products.map((product)=>{
                            return(
                                <div className="card__MainTop">
                                <div className="img__cardMainTop">
                                    <img alt="product"  src={product.img}></img>
                                </div>
                                <div className="command__cardMainTop">
                                    <img alt="change" src={Change}></img>
                                    <img alt="heart"  src={Heart}></img>
                                    <img alt="buy" src={Buy}></img>
                                </div>
                                <p className="mainTitle">{product.title}</p>
                                <div className="txt__cardMainTop">
                                    <div className="price__txt">
                                    <del className="oldPrice">{product.oldPrice}</del>
                                    <p className="newPrice">{product.newPrice}</p>
                                    </div>
                                    <img alt="stars" src={Stars}></img>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </main>
        )
    }

}
export default MainTop;