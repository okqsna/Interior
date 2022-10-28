import './Base.css'
import Head from './head_end/head'
import Inputs from './Inputs/Inputs'
import Box from './LastOne/LastOne'

function Base(){
    return(
        <div>
            <div className="base">
                <Head/>
                <Inputs/>
            </div>
            <Box />
        </div>
        
    );
}

export default Base;