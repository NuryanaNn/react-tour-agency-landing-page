import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faEarth, faThumbsUp } from '@fortawesome/free-solid-svg-icons'




const ChooseUs = () =>{
    return(
        <div className="chooseUs">
            <div className="title">
                <h3>Why Choose Us</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae non blanditiis, <br /> consequuntur rem at sit dignissimos ducimus optio tenetur neque.</p>
            </div>

            <div className="chooseContent">
                    <div className="card">
                    <div className="ChooseIcn">
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                        <h3>HANDPICKED HOTELS</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita similique repudiandae nulla dolorem quidem quod dolor sint saepe ex beatae.</p>
                    </div>
                    <div className="card">
                    <div className="ChooseIcn">
                        <FontAwesomeIcon icon={faEarth} />
                    </div>
                        <h3>WORLD CLASS SERVICE</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita similique repudiandae nulla dolorem quidem quod dolor sint saepe ex beatae.</p>
                    </div>
                    <div className="card">
                    <div className="ChooseIcn">
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </div>
                        <h3>BEST PRICE GUARANTEE</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita similique repudiandae nulla dolorem quidem quod dolor sint saepe ex beatae.</p>
                    </div>
                </div>
        </div>
    )
}

export default ChooseUs