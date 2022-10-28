import React from "react";
import './Clients.scss';
import Header from './Header/Header';
import Main from './Main/Main';

class Clients extends React.Component{
    render(){
        
        return(
            <section className="Clients">
                <Header/>
                <Main/>
            </section>
        )
    }
}
export default Clients;