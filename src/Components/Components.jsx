import React from "react";
import './Components.scss';
import Clients from './Clients/Clients';
import TopProducts from './TopProducts/TopProducts';
class Components extends React.Component{
    render(){
        return(
            <div className="Components">
                <Clients/>
                <TopProducts/>
            </div>
        )
    }
}
export default Components;