import React from 'react';
import './Main.scss';
import Star from './img/star.svg';
import ClientsBase from './Clients.json';
class Main extends React.Component{
    render(){
        return(
            <section className='Main'>
                <div className="Main__container">
                        {
                           ClientsBase && ClientsBase.map((client)=>{
                                return(
                                <div className="card__Main">
                                <div className="img__card">
                                
                                </div>
                                <div className="txt__card" key={client.id}>
                                <h2>{client.name}</h2>
                                <h5>{client.job}</h5>
                                <div className="rating__card">
                                    <img alt="star" src={Star} ></img>
                                    <p>{client.rating}</p>
                                </div>
                                <p>{client.comment}</p>
                                </div>
                                </div>
                
                                )
                              
                            })
                            
                        }
                         
                         </div>
            </section>
        )
    }

}
export default Main;

