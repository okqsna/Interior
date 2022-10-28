import './head.css'
import image_one from './Group.png'
import image_two from './interior.png'

function head(){
    return(
        <div className="head">
            <div className="root_head">
                <img src="image_one" alt="img_one" />
                <img src="image_two" alt="img_two" />
            </div>
            <h2>Join Now For Early Access</h2>
            <div className="p">Suspendisse eu velit est. Cras nec vestibulum<br />quam. Donec tincidunt purus nec enim tincidunt, sit</div>
        </div>
    );
}

export default head;