import './Inputs.css'

function Inputs(){
    return(
        <div className="div_inp">
            <input placeholder="Enter your email address..." type="email" className="inp" />
            <button className="but">SUBSCRIBE</button>
        </div>
    );
}

export default Inputs;