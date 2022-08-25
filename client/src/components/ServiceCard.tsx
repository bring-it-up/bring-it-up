import { ReactElement } from 'react';
import { AiOutlineShareAlt, AiFillStar } from 'react-icons/ai'
import Service from '../Service';

type Props = {
    service: Service;
}

// logic for defining tags is not determined yet
var tags: string[] = ["a", "b", "c"];
var arr: string[];
arr = ["a", "b", "c"];

let serv = new Service("a", "a", "a", "a", "a", "a", arr, true, "a", arr, false, arr, "a", "a");

const ServiceCard = ({ service }: Props): ReactElement => {
    return (
        <div>
            <div className="card">
                <div className="title"> 
                    <div className="name">
                        <h6><b>{service.serviceName}</b></h6>
                        <AiFillStar className="favourite" onClick={()=>{}}/>        
                    </div>
                    <div className="ratingItem">
                        <h6><b>{'5'} / 5</b></h6>
                        <AiOutlineShareAlt className="share" onClick={()=>{}}/>
                    </div>
                </div>


                <div className="information">
                    <p>{service.location}</p>
                    <p>|</p>
                    <p><a href="https://www.w3schools.com/">{'5'} reviews</a></p>
                    <p>|</p>
                    <p>{'5'} likes</p>
                </div>

                <div className="tags">
                        {tags.map((tag, index) => (
                            <div className="tag" key={index}>
                                {tag}
                            </div>
                        ),
                    )}
                </div>

                <div className="description">
                    <p>
                            {service.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;