import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane, faTicket, faShip, faTrain, faHome } from '@fortawesome/free-solid-svg-icons'


const Service = () =>{
    return(
        <div className="Service">
            <div className="title">
                <h3>FZ SERVICES</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore perspiciatis magnam blanditiis, quidem nobis totam.</p>
            </div>

            <div className="serviceContent">
                <div className="card">
                        <div className="ServiceIcn">
                        <FontAwesomeIcon icon={faBed} />
                        </div>
                    <h3>HOTEL BOOKING</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita similique repudiandae nulla dolorem quidem quod dolor sint saepe ex beatae.</p>
                </div>
                <div className="card">
                        <div className="ServiceIcn">
                        <FontAwesomeIcon icon={faPlane} />
                        </div>
                    <h3>FLIGHT BOOKING</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita similique repudiandae nulla dolorem quidem quod dolor sint saepe ex beatae.</p>
                </div>
                <div className="card">
                        <div className="ServiceIcn">
                        <FontAwesomeIcon icon={faTicket} />
                        </div>
                    <h3>TICKET BOOKING</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita similique repudiandae nulla dolorem quidem quod dolor sint saepe ex beatae.</p>
                </div>
                <div className="card">
                        <div className="ServiceIcn">
                        <FontAwesomeIcon icon={faShip} />
                        </div>
                    <h3>CRUISES BOOKING</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita similique repudiandae nulla dolorem quidem quod dolor sint saepe ex beatae.</p>
                </div>
                <div className="card">
                        <div className="ServiceIcn">
                        <FontAwesomeIcon icon={faTrain} />
                        </div>
                    <h3>TRAIN BOOKING</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita similique repudiandae nulla dolorem quidem quod dolor sint saepe ex beatae.</p>
                </div>
                <div className="card">
                        <div className="ServiceIcn">
                        <FontAwesomeIcon icon={faHome} />
                        </div>
                    <h3>AMAZING ROOM</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita similique repudiandae nulla dolorem quidem quod dolor sint saepe ex beatae.</p>
                </div>
            </div>
        </div>
    )
}

export default Service